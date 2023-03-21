package com.clubmgmt.clubmgmtstudentservice.student;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student,Integer>{ //Type of primary id is integer
   
    @Query("SELECT s from Student s where s.matricNum = ?1")
    Optional<Student> findStudentByMatricNum(String matricNum);

    @Query("SELECT s FROM Student s where s.matricNum = ?1")
    Student getStudentDetails(String matricNum);
    
    @Query("SELECT nokName, nokRelationship, nokNumber, bloodType, vaccinationStatus, medicalHistory from Student s where s.matricNum = ?1")
    List<Object[]> getStudentHealthInfo(String matricNum);

    @Query("SELECT matriculatedName, smuEmail, phoneNum, telegramUser from Student s where s.matricNum = ?1")
    List<Object[]> getStudentContactInfo(String matricNum);

    @Modifying
    @Query("DELETE FROM Student s where s.id =?1")
    void deleteBySID(int id);



}
