package com.clubmgmt.clubmgmtstudentservice;

import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.clubmgmt.clubmgmtstudentservice.student.Student;

@SpringBootApplication
@RestController
public class ClubMgmtStudentServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClubMgmtStudentServiceApplication.class, args);
	}

	@GetMapping("/")
	public List<Student> homepage(){
		
		return List.of(
			new Student.StudentBuilder(1389405, "test1@scis.smu.edu.sg","desmond").build(),
			new Student.StudentBuilder(1389406, "test2@scis.smu.edu.sg","lesmond").build()
		);
	}
}
