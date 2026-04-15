import React, { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../service/api";
import { Link } from "react-router-dom";

function StudentList() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = () => {
        getStudents().then((res) => {
            setStudents(res.data);
        });
    };

    const handleDelete = (id) => {
        deleteStudent(id).then(() => {
            loadStudents();
        });
    };

    return (
        <div>
            <h2>Student List</h2>

            <Link to="/add">Add Student</Link>

            <table border="1">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                {students.map((s) => (
                    <tr key={s.studentId}>
                        <td>{s.studentId}</td>
                        <td>{s.name}</td>
                        <td>{s.email}</td>
                        <td>
                            <Link to={`/edit/${s.studentId}`}>Edit</Link>
                            <button onClick={() => handleDelete(s.studentId)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default StudentList;