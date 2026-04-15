import React, { useState } from "react";
import { addStudent } from "../service/api";
import { useNavigate } from "react-router-dom";

function AddStudent() {
    const navigate = useNavigate();

    const [student, setStudent] = useState({
        name: "",
        age: "",
        gender: "",
        city: "",
        marks: "",
        email: "",
        course: "",
        admissionDate: ""
    });

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent(student).then(() => {
            alert("Student Added!");
            navigate("/");
        });
    };

    return (
        <div>
            <h2>Add Student</h2>

            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" onChange={handleChange} /><br/>
                <input name="age" placeholder="Age" onChange={handleChange} /><br/>
                <input name="gender" placeholder="Gender" onChange={handleChange} /><br/>
                <input name="city" placeholder="City" onChange={handleChange} /><br/>
                <input name="marks" placeholder="Marks" onChange={handleChange} /><br/>
                <input name="email" placeholder="Email" onChange={handleChange} /><br/>
                <input name="course" placeholder="Course" onChange={handleChange} /><br/>
                <input type="date" name="admissionDate" onChange={handleChange} /><br/>

                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default AddStudent;