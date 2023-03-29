package com.clubmgmt.clubmgmtstudentservice.student;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

	public Student getStudentDetails(String matricNum) {
		Optional<Student> studentOptional =	studentRepository.findStudentByMatricNum(matricNum);
		if (studentOptional.isPresent()){
			return studentRepository.getStudentDetails(matricNum);
		} else {
			throw new IllegalStateException("Student does not exist in database!");
		}
    }

	public Map<String, Object> getStudentHealthInfo(String matricNum) {
		Optional<Student> studentOptional =	studentRepository.findStudentByMatricNum(matricNum);
		if (studentOptional.isPresent()){
			List<Object[]> dataList = studentRepository.getStudentHealthInfo(matricNum);
			Object[] data = dataList.get(0);
			Map<String, Object> dataOut = new HashMap<>();
			dataOut.put("nokName", data[0]);
            dataOut.put("nokRelationship", data[1]);
            dataOut.put("nokNumber", data[2]);
            dataOut.put("bloodType", data[3]);
            dataOut.put("vaccinationStatus", data[4]);
            dataOut.put("medicalHistory", data[5]);
			return dataOut;
		} else {
			throw new IllegalStateException("Matric number is not registered!");
		}
	}

	public Map<String, Object> getStudentContactInfo(String matricNum) {
		Optional<Student> studentOptional =	studentRepository.findStudentByMatricNum(matricNum);
		if (studentOptional.isPresent()){
			List<Object[]> dataList = studentRepository.getStudentContactInfo(matricNum);
			Object[] data = dataList.get(0);
			Map<String, Object> dataOut = new HashMap<>();
			dataOut.put("matriculatedName", data[0]);
            dataOut.put("smuEmail", data[1]);
            dataOut.put("phoneNum", data[2]);
            dataOut.put("telegramUser", data[3]);
			return dataOut;
		} else {
			throw new IllegalStateException("Matric number is not registered!");
		}
	}

    public ResponseEntity<HashMap<String, Object>> addNewStudent(Student student) {
		Optional<Student> studentOptional =	studentRepository.findStudentByMatricNum(student.getMatricNum());
		HashMap<String, Object> outputMap = new HashMap<>();
		if (studentOptional.isPresent()){
			outputMap.put("code", "400");
			outputMap.put("message", "Matric number " + student.getMatricNum() + " already exists!");
			// throw new IllegalStateException("Matric number exists!");
		} else {
			//Rmrmb to check if matric is correct
			studentRepository.save(student); //This saves it to database
			outputMap.put("code", 201);
			outputMap.put("message", "Student has been registered." );
			outputMap.put("data", student);
		}
		return ResponseEntity.ok(outputMap);

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
	public void delete(String matricNum) {
	
		Optional<Student> studentOptional =	studentRepository.findStudentByMatricNum(matricNum);
		int studentId = studentOptional.map(Student::getId).orElse(-1);
		if ( studentId == -1 ){
			throw new IllegalStateException("Student with matricNum " + matricNum + " does not exist.");
		}
		studentRepository.deleteBySID(studentId);
	}

	@Transactional
	public void updateStudentNoK(String matricNum, Student newInfo){
		//Check if student exists
		// Optional<Student> studentOptional = studentRepository.findStudentByMatricNum(matricNum);
		Student student = studentRepository.findStudentByMatricNum(matricNum)
			.orElseThrow(()->new IllegalStateException(
				"Student ID " + matricNum + " is not registered."
			));
		
		//Check if inputs are not empty
		String nokName = newInfo.getNokName();
		String nokRelationship = newInfo.getNokRelationship();
		int nokNumber = newInfo.getNokNumber();
		if (nokName != null && nokName.length() > 0 &&
			nokRelationship != null && nokRelationship.length() > 0){
				student.setNokName(nokName);
				student.setNokRelationship(nokRelationship);
				student.setNokNumber(nokNumber);
			}
	}

    public void updateStudentJson(String matricNum, StudentUpdate studentUpdate) {
		Student student = studentRepository.findStudentByMatricNum(matricNum)
		.orElseThrow(()->new IllegalStateException(
			"Student ID " + matricNum + " is not registered."
		));
		if (studentUpdate.getSmuEmail() != null){
			student.setSmuEmail(studentUpdate.getSmuEmail());
		}
		if (studentUpdate.getGender() != null){
			student.setGender(studentUpdate.getGender());
		}
		if (studentUpdate.getDegree() != null){
			student.setDegree(studentUpdate.getDegree());
		}
		if (studentUpdate.getIntakeYear() != null){
			student.setIntakeYear(studentUpdate.getIntakeYear());
		}
		if (studentUpdate.getTelegramUser() != null){
			student.setTelegramUser(studentUpdate.getTelegramUser());
		}
		if (studentUpdate.getPhoneNum() != 0){
			student.setPhoneNum(studentUpdate.getPhoneNum());
		}
		if (studentUpdate.isVaccinationStatus() == false || studentUpdate.isVaccinationStatus() == true){
			student.setVaccinationStatus(studentUpdate.isVaccinationStatus());
		}
		if (studentUpdate.getMedicalHistory() != null){
			//Might look into appending this.
			student.setMedicalHistory(studentUpdate.getMedicalHistory());
		}
		if (studentUpdate.getBloodType() != null){
			student.setBloodType(studentUpdate.getBloodType());
		}
		if (studentUpdate.getNokName() != null){
			student.setNokName(studentUpdate.getNokName());
		}
		if (studentUpdate.getNokRelationship() != null){
			student.setNokRelationship(studentUpdate.getNokRelationship());
		}
		if (studentUpdate.getNokNumber() != 0){
			student.setNokNumber(studentUpdate.getNokNumber());
		}

		
		studentRepository.save(student);
    }

	public ResponseEntity<HashMap<String, Object>> getGroupStudentDetails(List<String> matricNumList) {
		if (matricNumList.size()==0){
			HashMap<String, Object> outputMap = new HashMap<>();
			outputMap.put("code", 501);
			outputMap.put("message", "matricNumList is empty.");
			return ResponseEntity.ok(outputMap);
		}
		List<Student> output = new ArrayList<>();
		List<String> notFound = new ArrayList<>();

		for (String matricNum:matricNumList){
			try {
				output.add(getStudentDetails(matricNum));
			} catch (IllegalStateException ise) {
				//Student cannot be found
				// output.add(new Student.StudentBuilder(matricNum,null,null).setAdditionalInfo(null,null,null).setHealthInfo(null,null,false).setTelegramUser(null).setPhoneNo(0).build());
				output.add(null);
				notFound.add(matricNum);
			}
		}
		HashMap<String, Object> outputMap = new HashMap<>();
		outputMap.put("code", 201);
		outputMap.put("details", output);
		outputMap.put("missingUsers", notFound);
		return ResponseEntity.ok(outputMap);

	}







}
