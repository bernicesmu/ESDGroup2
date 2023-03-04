package com.clubmgmt.clubmgmtstudentservice.student;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service //Means this is a springbean service
public class StudentService {

	private final StudentRepository studentRepository;

	@Autowired
	public StudentService(StudentRepository studentRepository){
		this.studentRepository = studentRepository;
	}

    public List<Student> getAllStudents(){
		return studentRepository.findAll(); //Returns list
	}

    public void addNewStudent(Student student) {
		Optional<Student> studentOptional =	studentRepository.findStudentByMatricNum(student.getMatricNum());
		if (studentOptional.isPresent()){
			throw new IllegalStateException("Matric number exists!");
		} else {
			//Rmrmb to check if matric is correct
			studentRepository.save(student); //This saves it to database
		}

    }

	/**
	 * Takes in a matricNum, deletes the student record                         
	 * <p>
	 * Takes in matricNum, checks if a record exists. Deletes using the primary key of  
	 * the entry and not matricNum.
	 * <p>
	 * @return Returns void
	 */
	@Transactional
	public void delete(int matricNum) {
	
		Optional<Student> studentOptional =	studentRepository.findStudentByMatricNum(matricNum);
		int studentId = studentOptional.map(Student::getId).orElse(-1);
		System.out.println("To be deleted " + matricNum + ", studentId is " + studentId);
		if ( studentId == -1 ){
			throw new IllegalStateException("Student with matricNum " + matricNum + " does not exist.");
		}
		studentRepository.deleteBySID(studentId);
	}

}
