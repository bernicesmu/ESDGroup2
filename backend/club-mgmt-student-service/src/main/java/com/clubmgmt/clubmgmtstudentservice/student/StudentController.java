package com.clubmgmt.clubmgmtstudentservice.student;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="/student") ///student/test does not seem to work strangly
@CrossOrigin(origins="http://localhost:3000")
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



	@GetMapping("/{matricNum}/health")
	public Map<String, Object> getStudentHealthInfo(
					@PathVariable("matricNum") String matricNum
	){
		return studentService.getStudentHealthInfo(matricNum);
	}

	@GetMapping("/{matricNum}/contact")
	public Map<String, Object> getStudentContact(
					@PathVariable("matricNum") String matricNum
	){
		return studentService.getStudentContactInfo(matricNum);
	}
	
	@PostMapping("/register")
	public void registerNewStudent(@RequestBody Student student){
		//As long as the keyvalue seems to match the student class, will work.
		studentService.addNewStudent(student);
	}

	@PostMapping("/")
	public Student getStudentDetails(
		@RequestBody Student student
	){
		return studentService.getStudentDetails(student.getMatricNum());
	}

	@PostMapping("/group")
	public List<Student> getGroupStudentDetails(
		@RequestBody List<String> matricNumList
	){
		return studentService.getGroupStudentDetails(matricNumList);
	}


	@PutMapping("{matricNum}")
	public void updateNok(
				@PathVariable("matricNum") String matricNum,
				// @RequestParam(required = false) String nokName, 
				@RequestBody Student newInfo){
		studentService.updateStudentNoK(matricNum, newInfo);
	}

	@PutMapping("/{matricNum}/update")
	public void updateStudentJson(
		@PathVariable("matricNum") String matricNum,
		@RequestBody StudentUpdate studentUpdate
	){
		studentService.updateStudentJson(matricNum, studentUpdate);
	}

	@DeleteMapping(path="{matricNum}")
	public void deleteStudent(@PathVariable("matricNum") String matricNum){
		studentService.delete(matricNum);
	}
	
	
}
