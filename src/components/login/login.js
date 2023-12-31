import React from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { Config } from "../../config";
import {Form} from 'react-bootstrap'
import {
  MDBInput,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle
  
} from "mdb-react-ui-kit";


// validation
const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "";
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
      loginAs:""
    },

    validate,
    onSubmit: async (values) => {
      try {
        await axios.post(`${Config.api}/login`, values);
        // localStorage.setItem("react_app_token", Login.data.token);
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <MDBContainer className="login-forms" >
      <div >
        {/* <img alt="example" className="img-fluid headerimg" src="./backgroundcut_edit (5).png" /> */}
        <form onSubmit={formik.handleSubmit}>
          <h1 className='Heading'>Login Account</h1>
          {/* email */}
          <MDBInput
             className="mb-4"
             type="email"
             Name="email"
             label="Email address"
             onChange={formik.handleChange}
             value={formik.values.email}
          />{formik.errors.email ? <div style={{ color: "red" }}>{formik.errors.email}</div> : null}
          {/* password */}
          <MDBInput className="mb-4" 
             type="password" 
             label="Password" 
             Name="password" 
             onChange={formik.handleChange}
             value={formik.values.password} />

             
      <div className="dropdown">
      <Form.Group id='user'>
        <Form.Select 
        onChange={formik.handleChange}
        placeholder="Select The User Type">
          <option value={formik.values.student}>Student</option>
          <option value={formik.values.admin}>Admin</option>
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
            {/* <p>
              Login ID Demo <Link to="/demo">Login</Link>
            </p> */}
          </div>
        </form>
      </div>
    </MDBContainer>
  );
}