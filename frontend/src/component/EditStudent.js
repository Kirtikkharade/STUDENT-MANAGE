import React, { useEffect, useState } from "react";
import { getStudentById, updateStudent } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

function EditStudent() {
    const { id } = useParams();
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

    useEffect(() => {
        getStudentById(id).then((res) => {
            setStudent(res.data);
        });
    }, [id]);

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateStudent(id, student).then(() => {
            alert("Updated Successfully!");
            navigate("/");
        });
    };

    return (
        <div>
            <h2>Edit Student</h2>

            <form onSubmit={handleSubmit}>
                <input name="name" value={student.name} onChange={handleChange} /><br/>
                <input name="age" value={student.age} onChange={handleChange} /><br/>
                <input name="gender" value={student.gender} onChange={handleChange} /><br/>
                <input name="city" value={student.city} onChange={handleChange} /><br/>
                <input name="marks" value={student.marks} onChange={handleChange} /><br/>
                <input name="email" value={student.email} onChange={handleChange} /><br/>
                <input name="course" value={student.course} onChange={handleChange} /><br/>
                <input type="date" name="admissionDate" value={student.admissionDate} onChange={handleChange} /><br/>

                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default EditStudent;