package com.example.student.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.student.entity.Student;
import com.example.student.repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repo;

    public List<Student> getAllStudents() {
        return repo.findAll();
    }

    public Student saveStudent(Student student) {
        return repo.save(student);
    }

    public Student getStudentById(int id) {
        return repo.findById(id).orElse(null);
    }

    public void deleteStudent(int id) {
        repo.deleteById(id);
    }
}