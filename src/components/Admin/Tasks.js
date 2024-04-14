import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap'; // Assuming you are using React Bootstrap

const AdminTasksPage = () => {
  // Sample tasks data
  const tasks = [
    { id: 1, name: "Virat Kholi", grade: "A", task: "React.js",status: 'Completed' },
    { id: 2, name: "Ab de Villiars", grade: "B", task: "Node.js",status: 'Pending' },
    { id: 3, name: "Glenn Maxwell", grade: "C", task: "JavaScript",status: 'Pending' },
    { id: 4, name: "Faf Duplesis", grade: "A", task: "HTML" , status: 'Completed'},
    { id: 5, name: "Mohhamed Siraj", grade: "B", task: "CSS", status: 'Completed' },
    { id: 6, name: "Yuvendra Chahal", grade: "A", task: "Bootstrap", status: 'Completed' },
    { id: 7, name: "Devdat Padikkal", grade: "C", task: "MongoDB",status: 'Pending' },
    { id: 8, name: "Harsal Patel", grade: "B", task: "Express.js", status: 'Completed' },
    { id: 9, name: "Rajat Pattidhar", grade: "A", task: "AWS" , status: 'Completed'},
    { id: 10, name: "Ros toply", grade: "B", task: "Data Structures", status: 'Completed'},
    { id: 11, name: "Dinesh Karthik", grade: "C", task: "GIT" , status: 'Completed'},
    { id: 12, name: "Mitchal Stark", grade: "A", task: "Angular", status: 'Completed' }
    // Add more tasks as needed
  ];

  return (
    <div className="task-container p-5">

      <h1>Tasks Done by Students</h1>
    
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Current Grade</th>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.name}</td>
              <td>{task.grade}</td>
              <td>{task.task}</td>
              <td>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
       
  
  );
};

export default AdminTasksPage;
