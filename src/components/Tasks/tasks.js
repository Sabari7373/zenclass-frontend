import React from "react";
import Popup from 'reactjs-popup';
import './tasks.css'
import Swal from 'sweetalert2'
import { Formik, Form, Field } from 'formik';


function Tasks() {

    const Today = new Date();
    const TodayDate = (Today.getDate() + "-" + Today.getMonth() + "-" + Today.getFullYear());
    console.log(TodayDate);
    

    const onSubmit = ()=>{
        Swal.fire(
            'Submitted Successfully',
            'Marks will be given after Evaluvating',
            'success'
          )
    }

    return (
        <div className="container">
            <div>
                <h1 className="task-list">Task Submissions</h1>
            </div>
            <div className="task-list">
                <h6>(B41 WD Tamil) - Javascript - Day 1</h6>
                <h6>Introduction To Browers and Web</h6>
                <span>Submitted on {TodayDate} </span>
                <Popup trigger=
                    {<button className="popup-button"> View Task </button>}
                    position="right center">
                    <div className="popup-container">
                        <div className="popup">
                            <h6>(B41 WD Tamil) - Javascript - Day 1</h6>
                            <div className="inputForm">
                                <label htmlFor="text">Enter the Front-end Source code URL :</label>
                                <input type="text" id="text" style={{ width: "350px" }} className="inputFeild" />
                                <button type="submit" className="popup-button" onClick={onSubmit}>Submit</button>
                            </div>
                            <p>Submitted on {TodayDate} </p>
                            <p>Warning: 1 mark will be deducted from your total score if you're failed to submit the task within the deadline</p>
                            <a href="/tasks" type="submit" className="popup-button">back</a>
                        </div>
                    </div>
                </Popup>
            </div>


            <div className="task-list">
                <h6>(B41 WD Tamil) - Javascript - Day 2</h6>
                <h6>Javascript - Day -2 : Request & Response Cycle</h6>
                <span>Submitted on {TodayDate} </span>
                <Popup trigger=
                    {<button className="popup-button"> View Task </button>}
                    position="right center">
                    <div className="popup-container">
                        <div className="popup">
                            <h6>(B41 WD Tamil) - Javascript - Day 2</h6>
                            <div className="inputForm">
                                <label htmlFor="text">Enter the Front-end Source code URL :</label>
                                <input type="text" id="text" style={{ width: "350px" }} className="inputFeild" />
                                <button type="submit" className="popup-button" onClick={onSubmit}>Submit</button>
                            </div>
                            <p>Submitted on {TodayDate} </p>
                            <p>Warning: 1 mark will be deducted from your total score if you're failed to submit the task within the deadline</p>
                            <a href="/tasks" type="submit" className="popup-button">back</a>
                        </div>
                    </div>
                </Popup>
            </div>


            <div className="task-list">
                <h6>(B41 WD Tamil) - Javascript - Day 3</h6>
                <h6>Javascript  Array & Objects</h6>
                <span>Submitted on {TodayDate} </span>
                <Popup trigger=
                    {<button className="popup-button"> View Task </button>}
                    position="right center">
                    <div className="popup-container">
                        <div className="popup">
                            <h6>(B41 WD Tamil) - Javascript Day 3 : JS array & objects</h6>
                            <div className="inputForm">
                                <label htmlFor="text">Enter the Front-end Source code URL :</label>
                                <input type="text" id="text" style={{ width: "350px" }} className="inputFeild" />
                                <button type="submit" className="popup-button" onClick={onSubmit}>Submit</button>
                            </div>
                            <p>Submitted on {TodayDate} </p>
                            <p>Warning: 1 mark will be deducted from your total score if you're failed to submit the task within the deadline</p>
                            <a href="/tasks" type="submit" className="popup-button">back</a>
                        </div>
                    </div>
                </Popup>
            </div>


            <div className="task-list">
                <h6>(B41 WD Tamil) - Javascript - Day 4</h6>
                <h6>Javascript Functions</h6>
                <span>Submitted on {TodayDate} </span>
                <Popup trigger=
                    {<button className="popup-button"> View Task </button>}
                    position="right center">
                    <div className="popup-container">
                        <div className="popup">
                            <h6>(B41 WD Tamil) - Javascript Functions</h6>
                            <div className="inputForm">
                                <label htmlFor="text">Enter the Front-end Source code URL :</label>
                                <input type="text" id="text" style={{ width: "350px" }} className="inputFeild" />
                                <button type="submit" className="popup-button" onClick={onSubmit}>Submit</button>
                            </div>
                            <p>Submitted on {TodayDate} </p>
                            <p>Warning: 1 mark will be deducted from your total score if you're failed to submit the task within the deadline</p>
                            <a href="/tasks" type="submit" className="popup-button">back</a>
                        </div>
                    </div>
                </Popup>
            </div>

            <div className="task-list">
                <h6>(B41 WD Tamil) -HTML & CSS- Day -5 </h6>
                <h6>HTML & CSS - Responsive web design</h6>
                <span>Submitted on {TodayDate} </span>
                <Popup trigger=
                    {<button className="popup-button"> View Task </button>}
                    position="right center">
                    <div className="popup-container">
                        <div className="popup">
                            <h6>(B41 WD Tamil) - HTML & CSS - Responsive web design</h6>
                            <div className="inputForm">
                                <label htmlFor="text">Enter the Front-end Source code URL :</label>
                                <input type="text" id="text" style={{ width: "350px" }} className="inputFeild" />
                                <label htmlFor="text">Enter the Front-end Deployed URL :</label>
                                <input type="text" id="text" style={{ width: "350px" }} className="inputFeild" />
                                <label htmlFor="text">Enter the Front-end Source code URL :</label>
                                <input type="text" id="text" style={{ width: "350px" }} className="inputFeild" />
                                <label htmlFor="text">Enter the Front-end Deployed URL :</label>
                                <input type="text" id="text" style={{ width: "350px" }} className="inputFeild" />
                                <button type="submit" className="popup-button" onClick={onSubmit}>Submit</button>
                            </div>
                            <p>Submitted on {TodayDate} </p>
                            <p>Warning: 1 mark will be deducted from your total score if you're failed to submit the task within the deadline</p>
                            <a href="/tasks" type="submit" className="popup-button">back</a>
                        </div>
                    </div>
                </Popup>
            </div>


            <div className="task-list">
                <h6>(B41 WD Tamil) - Javascript - Day 6</h6>
                <h6>Async programming - Callback</h6>
                <span>Submitted on {TodayDate} </span>
                <Popup trigger=
                    {<button className="popup-button"> View Task </button>}
                    position="right center">
                    <div className="popup-container">
                        <div className="popup">
                            <h6>(B41 WD Tamil) - Async programming - Callback</h6>
                            <div className="inputForm">
                                <label htmlFor="text">Enter the Front-end Source code URL :</label>
                                <input type="text" id="text" style={{ width: "350px" }} className="inputFeild" />
                                <button type="submit" className="popup-button" onClick={onSubmit}>Submit</button>
                            </div>
                            <p>Submitted on {TodayDate} </p>
                            <p>Warning: 1 mark will be deducted from your total score if you're failed to submit the task within the deadline</p>
                            <a href="/tasks" type="submit" className="popup-button">back</a>
                        </div>
                    </div>
                </Popup>
            </div>


            <div className="task-list">
                <h6>(B41 WD Tamil) - Javascript - Day 7</h6>
                <h6>Async programming - Promise</h6>
                <span>Submitted on {TodayDate} </span>
                <Popup trigger=
                    {<button className="popup-button"> View Task </button>}
                    position="right center">
                    <div className="popup-container">
                        <div className="popup">
                            <h6>(B41 WD Tamil) - Async programming - Promise</h6>
                            <div className="inputForm">
                                <label htmlFor="text">Enter the Front-end Source code URL :</label>
                                <input type="text" id="text" style={{ width: "350px" }} className="inputFeild" />
                                <button type="submit" className="popup-button" onClick={onSubmit}>Submit</button>
                            </div>
                            <p>Submitted on {TodayDate} </p>
                            <p>Warning: 1 mark will be deducted from your total score if you're failed to submit the task within the deadline</p>
                            <a href="/tasks" type="submit" className="popup-button">back</a>
                        </div>
                    </div>
                </Popup>
            </div>

            <div className="task-list">
                <h6>(B41 WD Tamil) - Javascript - Day 8</h6>
                <h6>DOM - Recap of Topics</h6>
                <span>Submitted on {TodayDate} </span>
                <Popup trigger=
                    {<button className="popup-button"> View Task </button>}
                    position="right center">
                    <div className="popup-container">
                        <div className="popup">
                            <h6>(B41 WD Tamil) - DOM - Recap of Topics</h6>
                            <div className="inputForm">
                                <label htmlFor="text">Enter the Front-end Source code URL :</label>
                                <input type="text" id="text" style={{ width: "350px" }} className="inputFeild" />
                                <button type="submit" className="popup-button" onClick={onSubmit}>Submit</button>
                            </div>
                            <p>Submitted on {TodayDate} </p>
                            <p>Warning: 1 mark will be deducted from your total score if you're failed to submit the task within the deadline</p>
                            <a href="/tasks" type="submit" className="popup-button">back</a>
                        </div>
                    </div>
                </Popup>
            </div>


            <div className="task-list">
                <h6>(B41 WD Tamil) - Javascript - Day 9</h6>
                <h6>ES5 vs ES6</h6>
                <span>Submitted on {TodayDate} </span>
                <Popup trigger=
                    {<button className="popup-button"> View Task </button>}
                    position="right center">
                    <div className="popup-container">
                        <div className="popup">
                            <h6>(B41 WD Tamil) - Javascript ES5 vs ES6</h6>
                            <div className="inputForm">
                                <label htmlFor="text">Enter the Front-end Source code URL :</label>
                                <input type="text" id="text" style={{ width: "350px" }} className="inputFeild" />
                                <button type="submit" className="popup-button" onClick={onSubmit}>Submit</button>
                            </div>
                            <p>Submitted on {TodayDate} </p>
                            <p>Warning: 1 mark will be deducted from your total score if you're failed to submit the task within the deadline</p>
                            <a href="/tasks" type="submit" className="popup-button">back</a>
                        </div>
                    </div>
                </Popup>
            </div>


            <div className="task-list">
                <h6>(B41 WD Tamil) - Javascript - Day 10</h6>
                <h6>Javascript - Array methods</h6>
                <span>Submitted on {TodayDate} </span>
                <Popup trigger=
                    {<button className="popup-button"> View Task </button>}
                    position="right center">
                    <div className="popup-container">
                        <div className="popup">
                            <h6>(B41 WD Tamil) - Javascript - Array methods</h6>
                            <div className="inputForm">
                                <label htmlFor="text">Enter the Front-end Source code URL :</label>
                                <input type="text" id="text" style={{ width: "350px" }} className="inputFeild" />
                                <button type="submit" className="popup-button" onClick={onSubmit}>Submit</button>
                            </div>
                            <p>Submitted on {TodayDate} </p>
                            <p>Warning: 1 mark will be deducted from your total score if you're failed to submit the task within the deadline</p>
                            <a href="/tasks" type="submit" className="popup-button">back</a>
                        </div>
                    </div>
                </Popup>
            </div>


            <div className="task-list">
                <h6>(B41 WD Tamil) - React JS - Day 11</h6>
                <h6>React JS Show Components</h6>
                <span>Submitted on {TodayDate} </span>
                <Popup trigger=
                    {<button className="popup-button"> View Task </button>}
                    position="right center">
                    <div className="popup-container">
                        <div className="popup">
                            <h6>(B41 WD Tamil) - React JS Show Components</h6>
                            <div className="inputForm">
                                <label htmlFor="text">Enter the Front-end Source code URL :</label>
                                <input type="text" id="text" style={{ width: "350px" }} className="inputFeild" />
                                <label htmlFor="text">Enter the Front-end Deployed URL :</label>
                                <input type="text" id="text" style={{ width: "350px" }} className="inputFeild" />
                                <button type="submit" className="popup-button" onClick={onSubmit}>Submit</button>
                            </div>
                            <p>Submitted on {TodayDate} </p>
                            <p>Warning: 1 mark will be deducted from your total score if you're failed to submit the task within the deadline</p>
                            <a href="/tasks" type="submit" className="popup-button">back</a>
                        </div>
                    </div>
                </Popup>
            </div>


            <div className="task-list">
                <h6>(B41 WD Tamil) - React JS - Day 12</h6>
                <h6>React JS - hooks & states</h6>
                <span>Submitted on {TodayDate} </span>
                <Popup trigger=
                    {<button className="popup-button"> View Task </button>}
                    position="right center">
                    <div className="popup-container">
                        <div className="popup">
                            <h6>(B41 WD Tamil) - React JS - hooks & states</h6>
                            <div className="inputForm">
                                <label htmlFor="text">Enter the Front-end Source code URL :</label>
                                <input type="text" id="text" style={{ width: "350px" }} className="inputFeild" />
                                <label htmlFor="text">Enter the Front-end Deployed URL :</label>
                                <input type="text" id="text" style={{ width: "350px" }} className="inputFeild" />
                                <button type="submit" className="popup-button" onClick={onSubmit}>Submit</button>
                            </div>
                            <p>Submitted on {TodayDate} </p>
                            <p>Warning: 1 mark will be deducted from your total score if you're failed to submit the task within the deadline</p>
                            <a href="/tasks" type="submit" className="popup-button">back</a>
                        </div>
                    </div>
                </Popup>
            </div>

            <div className="task-list">
                <h6>(B41 WD Tamil) - React JS - Day 13</h6>
                <h6>React JS components Add To Cart</h6>
                <span>Submitted on {TodayDate} </span>
                <Popup trigger=
                    {<button className="popup-button"> View Task </button>}
                    position="right center">
                    <div className="popup-container">
                        <div className="popup">
                            <h6>(B41 WD Tamil) - React JS components Add To Cart</h6>
                            <div className="inputForm">
                                <label htmlFor="text">Enter the Front-end Source code URL :</label>
                                <input type="text" id="text" style={{ width: "350px" }} className="inputFeild" />
                                <label htmlFor="text">Enter the Front-end Deployed URL :</label>
                                <input type="text" id="text" style={{ width: "350px" }} className="inputFeild" />
                                <button type="submit" className="popup-button" onClick={onSubmit}>Submit</button>
                            </div>
                            <p>Submitted on {TodayDate} </p>
                            <p>Warning: 1 mark will be deducted from your total score if you're failed to submit the task within the deadline</p>
                            <a href="/tasks" type="submit" className="popup-button">back</a>
                        </div>
                    </div>
                </Popup>
            </div>

            <div className="task-list">
                <h6>(B41 WD Tamil) - React JS - Day 14</h6>
                <h6>React JS Student Dashboard  CRUD Operations</h6>
                <span>Submitted on {TodayDate} </span>
                <Popup trigger=
                    {<button className="popup-button"> View Task </button>}
                    position="right center">
                    <div className="popup-container">
                        <div className="popup">
                            <h6>(B41 WD Tamil) - React JS Student Dashboard  CRUD Operations</h6>
                            <div className="inputForm">
                                <label htmlFor="text">Enter the Front-end Source code URL :</label>
                                <input type="text" id="text" style={{ width: "350px" }} className="inputFeild" />
                                <label htmlFor="text">Enter the Front-end Deployed URL :</label>
                                <input type="text" id="text" style={{ width: "350px" }} className="inputFeild" />
                                <button type="submit" className="popup-button" onClick={onSubmit}>Submit</button>
                            </div>
                            <p>Submitted on {TodayDate} </p>
                            <p>Warning: 1 mark will be deducted from your total score if you're failed to submit the task within the deadline</p>
                            <a href="/tasks" type="submit" className="popup-button">back</a>
                        </div>
                    </div>
                </Popup>
            </div>

            <div className="task-list">
                <h6>(B41 WD Tamil) - MY SQL - Day 15</h6>
                <h6>MY SQL Movie Validation</h6>
                <span>Submitted on {TodayDate} </span>
                <Popup trigger=
                    {<button className="popup-button"> View Task </button>}
                    position="right center">
                    <div className="popup-container">
                        <div className="popup">
                            <h6>(B41 WD Tamil) - MY SQL Movie Validation</h6>
                            <div className="inputForm">
                                <label htmlFor="text">Enter the Source code URL :</label>
                                <input type="text" id="text" style={{ width: "350px" }} className="inputFeild" />
                                <button type="submit" className="popup-button" onClick={onSubmit}>Submit</button>
                            </div>
                            <p>Submitted on {TodayDate} </p>
                            <p>Warning: 1 mark will be deducted from your total score if you're failed to submit the task within the deadline</p>
                            <a href="/tasks" type="submit" className="popup-button">back</a>
                        </div>
                    </div>
                </Popup>
            </div>

            <div className="task-list">
                <h6>(B41 WD Tamil) - Mongo DB - Day 16</h6>
                <h6>Mongo DB Queries</h6>
                <span>Submitted on {TodayDate} </span>
                <Popup trigger=
                    {<button className="popup-button"> View Task </button>}
                    position="right center">
                    <div className="popup-container">
                        <div className="popup">
                            <h6>(B41 WD Tamil) - Mongo DB Queries</h6>
                            <div className="inputForm">
                                <label htmlFor="text">Enter the Front-end Source code URL :</label>
                                <input type="text" id="text" style={{ width: "350px" }} className="inputFeild" />
                                <button type="submit" className="popup-button" onClick={onSubmit}>Submit</button>
                            </div>
                            <p>Submitted on {TodayDate} </p>
                            <p>Warning: 1 mark will be deducted from your total score if you're failed to submit the task within the deadline</p>
                            <a href="/tasks" type="submit" className="popup-button">back</a>
                        </div>
                    </div>
                </Popup>
            </div>

            <div className="task-list">
                <h6>(B41 WD Tamil) - Node JS & Express JS - Day 17</h6>
                <h6>Node JS & Express JS - API Creation</h6>
                <span>Submitted on {TodayDate} </span>
                <Popup trigger=
                    {<button className="popup-button"> View Task </button>}
                    position="right center">
                    <div className="popup-container">
                        <div className="popup">
                            <h6>(B41 WD Tamil) - Node JS & Express JS</h6>
                            <div className="inputForm">
                                <label htmlFor="text">Enter the Backend Source code URL :</label>
                                <input type="text" id="text" style={{ width: "350px" }} className="inputFeild" />
                                <button type="submit" className="popup-button" onClick={onSubmit}>Submit</button>
                            </div>
                            <p>Submitted on {TodayDate} </p>
                            <p>Warning: 1 mark will be deducted from your total score if you're failed to submit the task within the deadline</p>
                            <a href="/tasks" type="submit" className="popup-button">back</a>
                        </div>
                    </div>
                </Popup>
            </div>

            <div className="task-list">
                <h6>(B41 WD Tamil) - Express JS - Day 18</h6>
                <h6>Express JS - API</h6>
                <span>Submitted on {TodayDate} </span>
                <Popup trigger=
                    {<button className="popup-button"> View Task </button>}
                    position="right center">
                    <div className="popup-container">
                        <div className="popup">
                            <h6>(B41 WD Tamil) - Express JS - API</h6>
                            <div className="inputForm">
                                <label htmlFor="text" >Enter the Backend Source code URL :</label>
                                <input type="text" id="text" style={{ width: "350px" }} className="inputFeild" />
                                <button type="submit" className="popup-button" onClick={onSubmit}>Submit</button>
                            </div>
                            <p>Submitted on {TodayDate} </p>
                            <p>Warning: 1 mark will be deducted from your total score if you're failed to submit the task within the deadline</p>
                            <a href="/tasks" type="submit" className="popup-button">back</a>
                        </div>
                    </div>
                </Popup>
            </div>

        </div>
    )
}
export default Tasks
