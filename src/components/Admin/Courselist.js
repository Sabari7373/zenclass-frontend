
import React from "react";
import "./CourseList.css";

const courses = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "AWS",
    "Data Structures",
    "GIT"
];

const CourseList = () => {
    return (
        <div>

            <div className="course-list-container">
                <h1>Available Courses</h1>
            </div>

            <div className="courses">
                <ul className="course-list">
                    {courses.map((course, index) => (
                        <li className="course-item" key={index}>
                            {course}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default CourseList;
