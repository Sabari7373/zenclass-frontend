import React from "react";
import "./StudentList.css"; // Import your CSS file for styling

const students = [
    { id: 1, name: "Virat Kholi", grade: "A", course: "React.js" },
    { id: 2, name: "Ab de Villiars", grade: "B", course: "Node.js" },
    { id: 3, name: "Glenn Maxwell", grade: "C", course: "JavaScript" },
    { id: 4, name: "Faf Duplesis", grade: "A", course: "HTML" },
    { id: 5, name: "Mohhamed Siraj", grade: "B", course: "CSS" },
    { id: 6, name: "Yuvendra Chahal", grade: "A", course: "Bootstrap" },
    { id: 7, name: "Devdat Padikkal", grade: "C", course: "MongoDB" },
    { id: 8, name: "Harsal Patel", grade: "B", course: "Express.js" },
    { id: 9, name: "Rajat Pattidhar", grade: "A", course: "AWS" },
    { id: 10, name: "Ros toply", grade: "B", course: "Data Structures" },
    { id: 11, name: "Dinesh Karthik", grade: "C", course: "GIT" },
    { id: 12, name: "Mitchal Stark", grade: "A", course: "Angular" }
];

const StudentList = () => {
    return (
        <div> 
    
        <div className="student-list-container">
                <h1>Student List</h1>
            </div>
        <div className="container">
        
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <ul className="list-group">
                        {students.map((student) => (
                            <li className="list-group-item" key={student.id}>
                                <span className="student-id">{student.id}</span>
                                <span className="student-name">{student.name}</span>
                                <span className="student-grade">Grade: {student.grade}</span>
                                <span className="student-course">Course: {student.course}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

                
        </div>
    );
};

export default StudentList;
