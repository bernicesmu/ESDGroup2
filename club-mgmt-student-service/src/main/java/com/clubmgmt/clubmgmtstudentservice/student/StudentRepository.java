package com.clubmgmt.clubmgmtstudentservice.student;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student,Integer>{ //Type of primary id is integer
   
    @Query("SELECT s from Student s where s.matricNum = ?1")
    Optional<Student> findStudentByMatricNum(int matricNum);

    @Modifying
    @Query("DELETE FROM Student s where s.id =?1")
    void deleteBySID(int id);
}
