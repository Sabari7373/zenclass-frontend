import React from "react";
import "./dahboard.css";
import { Link,useNavigate} from "react-router-dom";
import { useState,useEffect } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
} from "mdb-react-ui-kit";
import ChartApp from "./chart";


export default function Dashboard() {

  const navigate = useNavigate()


  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);


 const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <MDBNavbar fixed="top" expand="lg" className="navBars" >
        <MDBContainer fluid>
          <Link to="/">
            <MDBNavbarBrand color="dark">Zenclass Dashboard</MDBNavbarBrand>
          </Link>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}>
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoTogglerSecond}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">


              {/* sidebar */}

              <div className="sidebar position-absolute top-0 start-0">
                <Link to="/dashboard">
                  <MDBNavbarBrand id="title" className="p-3" color="dark">
                    ZenClass Dashboard
                  </MDBNavbarBrand>
                </Link>




                <div className="sidebutton gap-3 mt-4 p-2">

                  <Link to="/class">
                    <MDBBtn className="sidebtn">
                      <i class="fa-solid fa-chart-line"></i> Class
                    </MDBBtn>
                  </Link>
                  <Link to="/queries">
                    <MDBBtn className="sidebtn">
                      <i class="fa-solid fa-chart-line"></i> Queries
                    </MDBBtn>
                  </Link>
                  <Link to="/viewQueries">
                    <MDBBtn className="sidebtn">
                      <i class="fa-solid fa-chart-line"></i> View Queries
                    </MDBBtn>
                  </Link>
                  <Link to="/tasks">
                    <MDBBtn className="sidebtn">
                      <i class="fa-solid fa-chart-line"></i> Tasks
                    </MDBBtn>
                  </Link>
                  <Link to="/webcode">
                    <MDBBtn className="sidebtn">
                      <i class="fa-solid fa-chart-line"></i> WebCode
                    </MDBBtn>
                  </Link>
                  <Link to="/capstone">
                    <MDBBtn className="sidebtn">
                      <i class="fa-solid fa-chart-line"></i> Capstone
                    </MDBBtn>
                  </Link>

                  <Link to="/requirements">
                    <MDBBtn className="sidebtn">
                      <i class="fa-solid fa-chart-line"></i> Requirements
                    </MDBBtn>
                  </Link>
                  <Link to="/certificate">
                    <MDBBtn className="sidebtn">
                      <i class="fa-solid fa-chart-line"></i> Certificate
                    </MDBBtn>
                  </Link>
                  <Link to="/syllabus">
                    <MDBBtn className="sidebtn">
                      <i class="fa-solid fa-chart-line"></i> Syllabus
                    </MDBBtn>
                  </Link>


                </div>
              </div>
            </MDBNavbarNav>

            <div>
             
                <MDBBtn className="sideLogoutBtn"  >
                  <i class="fa-solid fa-right-from-bracket" onClick={handleLogout()}></i> Logout from Student 
                </MDBBtn>
             
            </div>


          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <MDBContainer className="chart gap-3 mb-3">
        <div className="back p-4 text-center">
          <MDBBtn className="btn">Codekata</MDBBtn>
          <h6 className="text-center m-3">Total marks : 100</h6>
          <h6 className="text-center m-3">You Got : 45</h6>
        </div>
        <div className="back p-4 text-center">
          <MDBBtn className="btn">Webkata</MDBBtn>
          <h6 className="text-center m-3">Total marks : 100</h6>
          <h6 className="text-center m-3">You Got : 62</h6>
        </div>
        <div className="back p-4 text-center">
          <MDBBtn className="btn">WebCode</MDBBtn>
          <h6 className="text-center m-3">Total marks : 10</h6>
          <h6 className="text-center m-3">You Got  : 8.5</h6>
        </div>
        <div className="back p-4 text-center">
          <MDBBtn className="btn">Capstone</MDBBtn>
          <h6 className="text-center m-3">Total marks : 10</h6>
          <h6 className="text-center m-3">You Got  : 8.7</h6>
        </div>
      </MDBContainer>

      {/* Here import the Chart JS File */}

                 <ChartApp />

    </>
  );
}
