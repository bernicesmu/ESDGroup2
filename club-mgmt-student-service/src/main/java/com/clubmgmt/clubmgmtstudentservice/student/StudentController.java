package com.clubmgmt.clubmgmtstudentservice.student;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="/student") ///student/test does not seem to work strangly
public class StudentController {
    
	private final StudentService studentService; //Referencing studentService

	@Autowired //This student service will be created and injected into the constructore
	public StudentController(StudentService studentService){
		this.studentService = studentService;
	}

	@GetMapping("/")
	public List<Student> getAllStudents(){
		return studentService.getAllStudents();
	}

	@PostMapping("/")
	public void registerNewStudent(@RequestBody Student student){
		//As long as the keyvalue seems to match the student class, will work.
		studentService.addNewStudent(student);
	}

	@DeleteMapping(path="{matricNum}")
	public void deleteStudend(@PathVariable("matricNum") int matricNum){
		studentService.delete(matricNum);
	}
	
}
