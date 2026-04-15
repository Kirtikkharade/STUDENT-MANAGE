import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentList from "./component/StudentList";
import AddStudent from "./component/AddStudent";
import EditStudent from "./component/EditStudent";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<StudentList />} />
                <Route path="/add" element={<AddStudent />} />
                <Route path="/edit/:id" element={<EditStudent />} />
            </Routes>
        </Router>
    );
}

export default App;