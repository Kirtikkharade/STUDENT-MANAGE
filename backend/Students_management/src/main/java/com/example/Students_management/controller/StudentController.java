package com.example.Students_management.controller;

import com.example.backend.model.Student;
import com.example.backend.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api/students")
public class StudentController {

    @Autowired
    private StudentService service;

    @GetMaping
    public List<Student>getAll(){return service.getAll();}

    @postMapping
    public Student save(@RequestBody Student stud){return service.save(stud);}

    @GetMapping("/{id}")
    public Student getById(@PathVariable Integer id) {
        return service.getById(id);
    }

    @PutMapping("/{id}")
    public Student update(@PathVariable Integer id, @RequestBody Student stud) {
        return service.update(id, stud);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        service.delete(id);
    }

    @GetMapping("/test")
    public String test() {
        return "WORKING";
    }
}
}
