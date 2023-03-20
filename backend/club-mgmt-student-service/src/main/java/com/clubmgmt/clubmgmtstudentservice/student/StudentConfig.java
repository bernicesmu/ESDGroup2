package com.clubmgmt.clubmgmtstudentservice.student;

import org.springframework.context.annotation.Configuration;

@Configuration
public class StudentConfig {
    
    // @Bean
    // CommandLineRunner commandLineRunner(StudentRepository repository){
    //     return args->{
        Student desmond = new Student.StudentBuilder("01389405", "test1@scis.smu.edu.sg","desmond").setAdditionalInfo("M","SCIS","2022/23").setHealthInfo("B+","sick of coding", true).setTelegramUser("@zyzz").setPhoneNo(123).build();
 
}



