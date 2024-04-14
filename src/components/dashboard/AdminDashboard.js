import React from "react";
import "./AdminDashboard.css";
import { Link, useNavigate } from "react-router-dom";
import {
  MDBBtn,
} from "mdb-react-ui-kit";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleAdminLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div>
        <h1 style={{ position: 'relative' }}>Admin Dashboard</h1>
        <div style={{ position: 'absolute', top: 15, right: 15 }}>
          <div>
            <MDBBtn className="sideLogoutBtn">
              <button className="fa-solid fa-right-from-bracket" onClick={handleAdminLogout}>Logout</button>
            </MDBBtn>
          </div>
        </div>
      </div>
      <div className="admin-container">
        <div className="admin-content container">
          <div className="text-center justify-content-center d-flex">
            <p className="admin-widget text-center">Welcome to the Admin Dashboard!</p>
          </div>
          <div className="admin-widgets">
            <div className="admin-widget text-center">
              <h2><Link to="/admin/courses" className="mt-4">View All Courses</Link></h2>
              <p>View All the Courses are available to the Students</p>
            </div>

            <div className="admin-widget text-center">
              <h2><Link to="/admin/add-courses" className="mt-4">Add New Courses</Link></h2>
              <p>Add New Courses To the Students, For All Type of Students</p>
            </div>

            <div className="admin-widget text-center">
              <h2><Link to="/admin/students" className="mt-4">Students List</Link></h2>
              <p>View All Students List here and their Studied Courses</p>
            </div>

            <div className="admin-widget text-center">
              <h2><Link to="/admin/tasks" className="mt-4">Tasks</Link></h2>
              <p>View The Tasks That Mentor Assigned To The Students</p>
            </div>

            <div className="admin-widget text-center">
              <h2><Link to="/admin/queries" className="mt-4">View Queries</Link></h2>
              <p>View and Accept the Queries and Resolve the Query</p>
            </div>

            <div className="admin-widget text-center">
              <h2><Link to="/admin/certificate" className="mt-4">Certificates</Link></h2>
              <p>Certificate Providing Access are here for the Students</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
