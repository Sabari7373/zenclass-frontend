import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Requirements.css';
import { Config } from '../../config';
import { MDBBtn } from "mdb-react-ui-kit";
import Swal from 'sweetalert2'

function Leads() {

    const [Leads, setLeads] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        loadData()
    }, [])
    let loadData = async () => {
        setLoading(true);
        let Leads = await axios.get(`${Config.api}/viewRequirements`);
        setLeads(Leads.data);
        setLoading(false);
    };
   
    const handleClick = () => {
        Swal.fire(
            'Applied Successfully',
            'Interview will be schedule soon..',
            'success'
          )
    }
    

    return (

        <div className='App'>
            <div>
                <nav className='App-header'><h2 className='heading'>Requirements
                    <span>
                        <Link className='backToDashboard' to="/dashboard" >
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
                            <th>Company Name</th>
                            <th>Role</th>
                            <th>Work Location</th>
                            <th>Salary</th>
                            <th>Deadline for Apply</th>
                            <th>Apply</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {Leads.map((lead, index) => {
                            return (
                                <tr key={index}>
                                    <td>{lead.companyName}</td>
                                    <td>{lead.role}</td>
                                    <td>{lead.workLocation}</td>
                                    <td>{lead.salary}</td>
                                    <td>{lead.deadline}</td>
                                    <td>
                                        <button 
                                            onClick={handleClick}
                                            className='apply-button'>
                                            Apply
                                        </button>
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

export default Leads;