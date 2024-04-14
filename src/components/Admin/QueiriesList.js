import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MDBNavbar, MDBContainer } from "mdb-react-ui-kit";
import './QueriesList.css';
// import LeadsService from './LeadsService'
import { Config } from '../../config';
import { MDBBtn } from "mdb-react-ui-kit";
import Swal from 'sweetalert2';


function AdminQueriesList() {

    const [Queries, setQueries] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        loadData()
    }, [])
    let loadData = async () => {
        setLoading(true);
        let Queries = await axios.get(`${Config.api}/admin/getqueries`);
        setQueries(Queries.data);
        setLoading(false);
    };

    let QueryDelete = async (id) => {
        try {
            let ask = window.confirm("Are you sure ! Do you want Delete this Data ?");
            if (ask) {
                await axios.delete(`${Config.api}/removequery/${id}`)
            };
            loadData()
        } catch (error) {
            console.log(error);
        }
    }
    
    let QueryAccept = async (id) => {
        try {
            var time = new Date();
            const timeOut = setTimeout(() => {
                const time = new Date();
                Swal.fire(
                  'Query Accept by You..',
                  `The Schedule will Be Send to the Student is ${time}`,
                  'success'
                );
              }, 1000);

        } catch (error) {
            console.log(error);
        }
    }

    const updateAndSave = async (id) => {
        try {
            let info = alert("The File Is Updated Succesfully..!")
            const updatedQueries = [...Queries];
            updatedQueries[id].editing = true;
            setQueries(updatedQueries);
        } catch (error) {
            console.log(error);
        };
    }

    return (
        <div className='App'>
            <div>
                <nav className='App-header'><h2 className='heading'>List Of Queries
                    <span>
                        <Link className='backToDashboard' to="/admin/dashboard" >
                            <MDBBtn className="mb-1.5 mt-2">Dashboard</MDBBtn>
                        </Link>
                    </span>
                </h2>
                </nav>
            </div>
            <main className="App-main">
                <table className="tableDatas">
                    <thead>
                        <tr>
                            <th>Catogory</th>
                            <th>SubCatogory</th>
                            <th>Query Title</th>
                            <th>Query Description</th>
                            <th>Time In</th>
                            <th>Time Out</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Queries.map((Query, index) => {
                            return (
                                <tr key={index}>

                                    <td>{Query.category}</td>
                                    <td>{Query.subCatogory}</td>
                                    <td>{Query.queryTitle}</td>
                                    <td>{Query.queryDescription}</td>
                                    <td>{Query.timeFrom}</td>
                                    <td>{Query.timeTo}</td>
                                    <td>
                                        <button className="accept-button btn btn-success me-2" onClick={() => { QueryAccept(Query._id) }}>Accept Query</button>
                                        <button className="delete-button" onClick={() => { QueryDelete(Query._id) }}>Remove Query</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </main>
            <br />
        </div>
    );
}

export default AdminQueriesList;