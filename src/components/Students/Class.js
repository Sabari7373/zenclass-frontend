import React, { useState } from 'react';
import './Class.css'
import {useNavigate} from 'react-router-dom'
const days = [
    {
        id:       1,
        dayCount: "Day 1",
        heading:  "Javascript - Day -1 : Introduction to Browser & web",
        time:     "Monday - 10.00 AM To 1.00 PM",
        content1: "Introduction to web Browser",
        content2: "HTTP Methods",
        content3: "How to Server Looks at the URL",
        content4: "Request & Response Cycle"
    },
    {
        id: 2,
        dayCount: "Day 2",
        heading:  "Javascript - Day -2 : Request & Response Cycle",
        time:     "Tuesday - 10.00 AM To 1.00 PM ",
        content1: "HTML Debug and Inspect",
        content2: "Data Types",
        content3: "Window & Object",
        content4: "Copy By value and Copy by reference"
    },
    {
        id: 3,
        dayCount: "Day 3",
        heading:  "Javascript - Day -3 : Array and Objects",
        time:     "Wednesday - 10.00 AM To 1.00 PM ",
        content1: "Introduction to Array",
        content2: "Array and JSON iteration",
        content3: "XMLHTTPRequest",
        content4: "Hoisting & scope"
      
    },
    {
        id: 4,
        dayCount: "Day 4",
        heading:  "Javascript - Day -4 : Javascript Functions",
        time:     "Thursday - 10.00 AM To 1.00 PM ",
        content1: "Introduction to functions",
        content2: "Function & return keyword",
        content3: "Types of function",

    },
    {
        id: 5,
        dayCount: "Day 5",
        heading:  "JavaScript - Day - 5",
        time:     "Saturday - 10.00 AM To 1.00 PM ",
        content1: "Async Programming",
        content2: "Callback - callstack,webapi, eventloop, queue",
        content3: "Promise fetch , Promise States , Promise chain",
        content4: "Use of fetch() & then() & catch()"
    },
    {
        id: 6,
        dayCount: "Day 6",
        heading:  "HTML and CSS - Day - 6",
        time:     "Friday - 10.00 AM To 1.00 PM ",
        content1: "What is HTML and Why ?",
        content2: "Div vs Section Tags, HTML Forms",
        content3: "Inline and Block Elements , Basic Tags",
        content4: "Form Submit , Responsive web design "

    },
    {
        id: 7,
        dayCount: "Day 7",
        heading:  "HTML and CSS - Day - 7",
        time:     "Monday - 09.00 AM To 12.00 PM ",
        content1: "Selectors and Its Types",
        content2: "Display properties",
        content3: "Inline CSS and External CSS",
        content4: "Styles , Responsive web CSS Design"

    },
    {
        id: 8,
        dayCount: "Day 8",
        heading:  "DOM - Day - 8",
        time:     "Tuesday - 09.00 AM To 12.00 PM ",
        content1: "Bootstrap and DOM",
        content2: "What is Bootstrap, React Bootstrap",
        content3: "Bootstrap Framework classes",
        content4: "DOM in REACT JS",
        content5: "What is Virtual DOM , Selectors in DOM"

    },
    {
        id: 9,
        dayCount: "Day 9",
        heading:  "Javascript - Day - 9",
        time:     "Wdnesday - 10.00 AM To 1.00 PM ",
        content1: "ES5 vs ES6",
        content2: "What is ECMA script ",
        content3: "Object manipulation , Differences",

    },
    {
        id: 10,
        dayCount: "Day 10",
        heading:  "Javascript - Day - 10 : Array methods",
        time:     "Thursday - 10.00 AM To 1.00 PM ",
        content1: "Array methods in javascripts",
        content2: "Map, Reduce,  Filter",
        content3: "Other array methods practice in session",
        content4: "Details about Pop , Push , Delete , Length , Shift "

    },
    {
        id: 11,
        dayCount: "Day 11",
        heading:  "React JS - Day - 11",
        time:     "Friday - 10.00 AM To 1.00 PM ",
        content1: "React JS Framework",
        content2: "What is React JS ,Why React",
        content3: "What is components , Understanding the components ",
        content4: "Passing data through props , Deploying react to netlify"

    },
    {
        id: 12,
        dayCount: "Day 12",
        heading:  "React JS - Day - 12",
        time:     "Saturday - 09.00 AM To 12.00 PM ",
        content1: "React JS - React Hooks & States",
        content2: "Conditional rendering , Handling Events",
        content3: "Difference bedween Props vs state",
        content4: "Types Of Hooks and its Usages"

    },
    {
        id: 13,
        dayCount: "Day 13",
        heading:  "React JS - Day - 13",
        time:     "Monday - 10.00 AM To 1.00 PM ",
        content1: "React JS Framework",
        content2: "Component life cycle , Components - In depth",
        content3: "Stateful and stateless components , Reusable components ",
        content4: "Passing dynamic data to component , React Routings",
        content5: "React JS Conditional routings and Rendering"
    },
    {
        id: 14,
        dayCount: "Day 14",
        heading:  "React JS - Day - 14",
        time:     "Tuesday - 10.00 AM To 1.00 PM ",
        content1: "React JS useEffect , Lifecycle of Hook",
        content2: "What is Props drilling",
        content3: "Passing data from child to parent component , Understanding the components ",
        content4: "CRUD Operation Project Using React JS"

    },
    {
        id: 15,
        dayCount: "Day 15",
        heading:  "MySQL - Day - 15",
        time:     "Wednesday - 1.00 PM To 4.00 PM",
        content1: "Database - MySQL",
        content2: "Introduction to database",
        content3: "What is MySQL? , Intro to MySQL engines",
        content4: "basic queries - create db, table , insert, update, alter",
        content5: "select - where clause, distinct, group by, order by, offset, limit"

    },
    {
        id: 16,
        dayCount: "Day 16",
        heading:  "Node JS and Express JS - Day - 16",
        time:     "Thursday - 1.00 PM To 4.00 PM",
        content1: "Node JS and its Express JS Framework",
        content2: "What is Express , What is API",
        content3: "API methods - GET, POST, PUT, DELETE , Request & response objects ",
        content4: "Url  &  Query parameters , Node JS Routing",
        content5: "Npm packages : In build , Third party ,  Custom"

    },
    {
        id: 17,
        dayCount: "Day 17",
        heading:  "Mongo DB - DATABASE - Day - 17",
        time:     "Friday - 1.00 PM To 4.00 PM",
        content1: "Mongo DB - DATABASE",
        content2: "Intro to Mongodb & installation of mongodb",
        content3: "Why mongodb? , What is document? , What is collection?",
        content4: "Mongodb vs MySQL ,Installation of mongodb , creation of database, collections, documents",
        content5: "Mongo DB Queries - insert , find , delete , patch , update"

    },
    {
        id: 18,
        dayCount: "Day 18",
        heading:  "Express JS - Day - 18",
        time:     "Friday - 1.00 PM To 4.00 PM",
        content1: "Mongo DB - Connectivity",
        content2: "Connection to MongoDB(local & atlas)",
        content3: "simultenously frontend + backend connectivity",
        content4: "dotenv , Deployment, Authentication , collections, documents",
        content5: "Mongo DB Queries - insert , find , delete , patch , update"

    },
    {
        id: 17,
        dayCount: "Day 19",
        heading:  "Mongo DB - DATABASE - Day - 17",
        time:     "Friday - 1.00 PM To 4.00 PM",
        content1: "Mongo DB - DATABASE",
        content2: "Intro to Mongodb & installation of mongodb",
        content3: "Why mongodb? , What is document? , What is collection?",
        content4: "Mongodb vs MySQL ,Installation of mongodb , creation of database, collections, documents",
        content5: "Mongo DB Queries - insert , find , delete , patch , update"

    },
    {
        id: 17,
        dayCount: "Day 20",
        heading:  "Pre-Placement Session",
        time:     "Friday - 1.00 PM To 4.00 PM",
        content1: "Mandatory session on placement",
        content2: "Creating Portfolios",
        content3: "Course Completion Certificate Generate and Mock Interviews",
        content4: "Capstone Project Review",
        content5: "Placement Cell examinations and getting Into Placement"

    },
]

function Class() {
    let navigation = useNavigate();

    const [data, setData] = useState([])
    const playVideo = () => {
        navigation('/joinclass')
    }

    return (
        <> 
            <div>
               <h2 className='Heading'>Zen class Student Roadmap</h2>
            </div>
            <div className="row">
                <div className="column1" >
                
                    <div className='Heading'>
                        Join the class on time
                       <button onClick={playVideo} className='Join-class'>Join Class</button>
                    </div>
                    
                    {data && data.map((values) => {
                        return <Component {...values} />
                    })}
                </div>
                <div className="column2" >
                    <h3 className='Heading'>Sessions Roadmap</h3>
                    <div className='day-butttons'>
                        {days.map((values) => {

                            return (
                            <div>
                                <button onClick={() => setData([values])} className='butttons'>{values.dayCount}</button>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Class

const Component = (props) => {

    return (
        <>
            <div>
              
                <h3 className='head-prop'>{props.heading}</h3>
                <h5 className='time-prop'>{props.time}</h5>
                <p>{props.content1}</p>
                <p>{props.content2}</p>
                <p>{props.content3}</p>
                <p>{props.content4}</p>
                <p>{props.content5}</p>
            </div>
            <div className='enterURL'>
            <a href="/tasks" type="submit" className="submitButton">Submit Today's Task</a>            

            </div>
        </>
    )
}
