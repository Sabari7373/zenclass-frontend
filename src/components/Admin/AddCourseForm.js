import React, { useState } from "react";
import Swal from 'sweetalert2';
import axios from 'axios'; 
import { Config } from "../../config";

import "./AddCourseForm.css";

const AddCourseForm = () => {

  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    instructor: "",
    duration: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const onSubmit = async (values) => {
    try {
      await axios.post(`${Config.api}/admin/courses`, values);
      // Assuming `navigation` is a function you have defined elsewhere
     
    } catch (error) {
      console.error("API request error:", error);
    }

    console.log("Submitted:", courseData);

    setCourseData({
      title: "",
      description: "",
      instructor: "",
      duration: ""
    });

    Swal.fire(
      'Added Successfully',
      'The new course will be added to students',
      'success'
    )
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(courseData);
  };

  return (
    <div >
      <h1>Add New Course</h1>

      <div className="add-course-form mt-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={courseData.title}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description:</label>
            <textarea
              id="description"
              name="description"
              value={courseData.description}
              onChange={handleChange}
              className="form-control"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="instructor" className="form-label">Instructor:</label>
            <input
              type="text"
              id="instructor"
              name="instructor"
              value={courseData.instructor}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="duration" className="form-label">Duration:</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={courseData.duration}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block p-3 mt-2">Add Course</button>
        </form>
      </div>
    </div>
  );
};

export default AddCourseForm;
