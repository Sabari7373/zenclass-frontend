import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik, Formik, Form, Field } from "formik";
import axios from "axios";
import { Config } from "../../config";
import './Queries.css'
import {
    MDBInput,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBTextArea,
    MDBCheckbox,
    MDBBtn,
    MDBIcon,
} from "mdb-react-ui-kit";

const validate = values => {
    const errors = {};
};

export default function Queries() {
    let navigation = useNavigate();
    const formik = useFormik({
        initialValues: {
            category:'',
            subCatogory:'',
            queryTitle:'',
            queryDescription:'',
            timeFrom:'',
            timeTo:''
        },
        validate,
        onSubmit: async (values) => {
            try {
                await axios.post(`${Config.api}/queries`, values);
                navigation("/dashboard");
                alert("Query Succesfully Created")
            } catch (error) {
            }
        },
    });

    return (
        <MDBContainer >

            <div className="loginforms">

                <form onSubmit={formik.handleSubmit}>
                    <h1 className='Heading'>Create a Query</h1>
                    
                    <label htmlFor="category" style={{ textAlign: "center", display: "block" }}>Query Category</label>
                        <select name="category" 
                            id="category" 
                            style={{ width: "250px", textAlign: "center", margin: "10px" }} 
                            onChange={formik.handleChange}
                            value={formik.values.category} >
                            <label >Zen Class Doubt</label>  
                            <option value="Zen Class Doubt">Zen Class Doubt</option>
                            <option value="Placement Related">Placement Related</option>
                            <option value="Coordination Related">Coordination Related</option>
                            <option value="Prebootcamp Related">Prebootcamp Related</option>
                        </select>

                        <label htmlFor="subCatogory" style={{ textAlign: "center", display: "block" }}>Sub Catogory</label>
                        <select name="subCatogory" 
                            id="subCatogory" 
                            style={{ width: "250px", textAlign: "center", margin: "10px" }} 
                            onChange={formik.handleChange}
                            value={formik.values.subCatogory} >
                            <label>Company Info</label>
                            <option value="Company Info">Company Info</option>
                            <option value="Completion Certificate">Completion Certificate</option>
                            <option value="Portfolio">Portfolio</option>
                        </select>

                        <div className="inputForm">
                        <MDBInput
                                id="queryTitle"
                                Name="queryTitle"
                                
                                label="Query Title"
                                onChange={formik.handleChange}
                                value={formik.values.queryTitle}
                        />
                        </div>
                        <div className="inputForm">
                         <MDBInput
                                id="queryDescription"
                                Name="queryDescription"
                                className="queryDescription"
                                label="Query Description"
                                onChange={formik.handleChange}
                                value={formik.values.queryDescription}
                        />
                        </div>
                        <div className="inputForm">
                         <MDBInput
                                id="timeFrom"
                                Name="timeFrom"
                                type="time"
                                className="timeFrom"
                                label="From"
                                onChange={formik.handleChange}
                                value={formik.values.timeFrom}
                        />
                        </div>
                        <div className="inputForm">
                        <MDBInput
                                id="timeTo"
                                Name="timeTo"
                                type='time'
                                className="timeTo"
                                label="To"
                                onChange={formik.handleChange}
                                value={formik.values.timeTo}
                        />
                        </div>

                    <MDBBtn
                        type={"submit"}
                        value="Submit"
                        className="mb-4 mt-2"
                        block>
                        Create
                    </MDBBtn>

                    <Link to="/dashboard" >
                        <MDBBtn className="mb-4 mt-2">Back</MDBBtn>
                    </Link>
                </form>
            </div>
        </MDBContainer>
    );
}
