import React, { useState } from "react";
import { addEmployee } from "../services/api";
import { useNavigate } from "react-router-dom";
import "../App.css";

function AddEmployee() {
    const [stud, setStud] = useState({
        name: "",
        age: "",
        gender:"",
        city: "",
        marks:"",
        email:"",
        course:"",
        admission_date: ""
    });


    const navigate = useNavigate();

    const handleChange = (e) => {
        setStud({ ...stud, [e.target.name]: e.target.value });
    };

    const validate = () => {
        if (!stud.name ||  !stud.age || !stud.gender || !stud.city || !stud.marks || !stud.email || !stud.course || !stud.admission_date) {
            alert("All fields are required!");
            return false;
        }
        if (stud.marks <= 0) {
            alert("Marks must be positive");
            return false;
        }
        if (stud.age <= 0) {
            alert("Age must be valid");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        await addEmployee(stud);
        navigate("/");
    };

    return (
        <div className="form-container">
            <h2>Add Employee</h2>

            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" onChange={handleChange} />
                <input name="age" type="number" placeholder="Age" onChange={handleChange} />
                <input name="gender" type="" {handleChange}/>
                <input name="city" placeholder="City" onChange={handleChange} />
                <input name="admision_date" type="date" onChange={handleChange} />

                <button type="submit" className="btn-add">Save</button>
            </form>
        </div>
    );
}

export default AddStudent;