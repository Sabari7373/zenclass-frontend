import React from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { Config } from "../../config";
import { Form } from 'react-bootstrap'
import {
  MDBInput,
  MDBContainer,
  MDBBtn,
} from "mdb-react-ui-kit";

// validation
const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email address";
  }
  return errors;
};

// values
export default function Login() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      loginAs: "student",
    },
    validate,
    onSubmit: async (values) => {
     
      try {
        const data = await axios.post(`${Config.api}/login`, values);

        

        console.log(data.data.loggedUser);

        if(data.data.loggedUser == 0){
          console.log("------>",data.data.token);
          await localStorage.setItem("token", data.data.token);
          navigate("/dashboard");
        }else if(data.data.loggedUser == 1){
          localStorage.setItem("token", data.data.token);
          navigate("/admin/dashboard");
        }else{
          navigate("/error");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });




  const handleDropdownChange = (event) => {
    formik.setFieldValue("loginAs", event.target.value);
  };

  return (
    <MDBContainer className="login-forms">
      <div>
        <form onSubmit={formik.handleSubmit}>
          <h1 className='Heading'>Login Account</h1>
          {/* email */}
          <MDBInput
            className="mb-4"
            type="email"
            name="email"
            label="Email address"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div style={{ color: "red" }}>{formik.errors.email}</div> : null}
          {/* password */}
          <MDBInput
            className="mb-4"
            type="password"
            label="Password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          {/* dropdown for loginAs */}
          <div className="dropdown">
            <Form.Group id='user'>
              <Form.Select
                onChange={handleDropdownChange}
                value={formik.values.loginAs}
                placeholder="Select The User Type"
              >
                <option value="student">Student</option>
                <option value="admin">Admin</option>
              </Form.Select>
            </Form.Group>
          </div>

          {/* submit button */}
          <MDBBtn type="submit" value="Submit" className="mb-4" block>
            Sign in
          </MDBBtn>
          <div className="text-center">
            <p>
              Not a member? <Link to="/signup">Register User</Link>
            </p>
          </div>
        </form>
      </div>
    </MDBContainer>
  );
}
