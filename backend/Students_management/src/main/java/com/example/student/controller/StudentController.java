package com.example.student.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.student.entity.Student;
import com.example.student.service.StudentService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentService service;

    @GetMapping
    public List<Student> getAllStudents() {
        return service.getAllStudents();
    }

    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        return service.saveStudent(student);
    }

    @GetMapping("/{id}")
    public Student getStudent(@PathVariable int id) {
        return service.getStudentById(id);
    }

    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable int id, @RequestBody Student student) {
        Student existing = service.getStudentById(id);

        existing.setName(student.getName());
        existing.setAge(student.getAge());
        existing.setGender(student.getGender());
        existing.setCity(student.getCity());
        existing.setMarks(student.getMarks());
        existing.setEmail(student.getEmail());
        existing.setCourse(student.getCourse());
        existing.setAdmissionDate(student.getAdmissionDate());

        return service.saveStudent(existing);
    }

    @DeleteMapping("/{id}")
    public String deleteStudent(@PathVariable int id) {
        service.deleteStudent(id);
        return "Deleted successfully";
    }
}