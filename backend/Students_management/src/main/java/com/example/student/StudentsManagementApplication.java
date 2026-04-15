package com.example.student;   // ⚠️ must match folder

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StudentsManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentsManagementApplication.class, args);
	}
}