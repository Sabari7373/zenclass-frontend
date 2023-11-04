

import React from "react";
import Popup from 'reactjs-popup';
import './Capstone.css';
import { Formik, Form, Field } from 'formik';
import axios from "axios";
import Swal from 'sweetalert2'
import { Config } from '../../config';


function Capstone() {

  return (
    <>
      <div>
        <h1 className="title">Capstone</h1>
      </div>
      <div className="container">
        <div className="task-list">
          <h6>(B41 WD TAMIL - Capstone Project) Student Dashboard</h6>
          <h6>Zen Class Student Dashboard</h6>
          <span>Yet To Be Graded</span>
          <Popup
            trigger={<button className="popup-button"> View Details </button>}
            position="right center"
          >
            <div className="popup-container">
              <div className="popup">
                <h6>(B41 WD TAMIL - First Webcode) Student Dashboard</h6>
                <h5>Descriptions :</h5>
                <h6>Implement the Zen Class Student Dashboard using MERN STACK</h6>

                <p>1 . Use React for frontend , MUI Materials</p>
                <p>2 . Use NodeJS , ExpressJS for backend</p>
                <p>3 . Use MongoDB for Database</p>

                <h5> Any Basic Hints :</h5>
                <p>You have 24 hours to complete before the deadline.</p>
                <span>Raise a query ticket only in the Zen portal and get your doubts resolved. </span>

                <Formik
                  initialValues={{
                    frontendSourceCodeURL: '',
                    frontendDeployedURL: '',
                    backendSourceCodeURL: '',
                    backendDeployedURL: '',
                  }}
                  onSubmit={(values) => {
                    try {
                      axios.post(`${Config.api}/capstone`, values);
                      console.log(values);
                      Swal.fire(
                        'Submitted Successfully',
                        'Marks will be given after Evaluvating',
                        'success'
                      )
                    } catch (error) {
                      console.error("API request error:", error);
                    }
                  }}
                >
                  {({ handleChange, values, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                      <div className="inputForm">
                        <label htmlFor="frontendSourceCodeURL">Enter the Front-end Source code URL :</label>
                        <Field type="text" name="frontendSourceCodeURL" style={{ width: "350px" }} className="inputFeild"
                          onChange={handleChange} value={values.frontendSourceCodeURL} />

                        <label htmlFor="frontendDeployedURL">Enter the Front-end Deployed URL :</label>
                        <Field type="text" name="frontendDeployedURL" style={{ width: "350px" }} className="inputFeild"
                          onChange={handleChange} value={values.frontendDeployedURL} />

                        <label htmlFor="backendSourceCodeURL">Enter the Back-end Source code URL :</label>
                        <Field type="text" name="backendSourceCodeURL" style={{ width: "350px" }} className="inputFeild"
                          onChange={handleChange} value={values.backendSourceCodeURL} />

                        <label htmlFor="backendDeployedURL">Enter the Back-end Deployed URL :</label>
                        <Field type="text" name="backendDeployedURL" style={{ width: "350px" }} className="inputFeild"
                          onChange={handleChange} value={values.backendDeployedURL} />

                        <button type="submit" className="popup-button">Submit</button>
                      </div>
                    </Form>
                  )}
                </Formik>

                <p>Warning: 1 mark will be deducted from your total score if you fail to submit the task within the deadline</p>
                <a href="/capstone" className="popup-button">back</a>
              </div>
            </div>
          </Popup>
        </div>
      </div>
    </>
  );
}

export default Capstone;
