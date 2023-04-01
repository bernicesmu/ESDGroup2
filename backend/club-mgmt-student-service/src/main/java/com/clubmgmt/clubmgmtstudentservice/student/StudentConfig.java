package com.clubmgmt.clubmgmtstudentservice.student;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class StudentConfig {
    
    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository){
        return args->{
            if (repository.count() == 0){
                Student bernice = new Student.StudentBuilder("1429384", "bernice.teo.2021@scis.smu.edu.sg", "Bernice Teo").setAdditionalInfo("F","SCIS","2021").setHealthInfo("A+","Nil", true).setTelegramUser("@berrrniice").setPhoneNo(93456765).setNok("Angela", "Mother",93456765).build();
                Student ivan = new Student.StudentBuilder("1301938", "ivan.yeo.2021@scis.smu.edu.sg", "Ivan Yeo").setAdditionalInfo("M","SCIS","2021").setHealthInfo("AB-","Asthma", true).setTelegramUser("@ivanyeowq").setPhoneNo(82345671).setNok("Gabriel", "Father",82345671).build();
                Student bryan = new Student.StudentBuilder("1338329", "bryan.lee.2021@scis.smu.edu.sg", "Bryan Lee").setAdditionalInfo("M","SCIS","2021").setHealthInfo("A-","Nil", true).setTelegramUser("@bryanlee237").setPhoneNo(91234543).setNok("Pauline", "Mother",91234543).build();
                Student atrayee = new Student.StudentBuilder("1449284", "atrayeed.2021@scis.smu.edu.sg", "Atrayee Dutt").setAdditionalInfo("F","SCIS","2021").setHealthInfo("B+","Peanuts", true).setTelegramUser("@atrayeet").setPhoneNo(93567654).setNok("Aadhya", "Mother",93567654).build();
                Student xunyi = new Student.StudentBuilder("1302934", "xunyi.lim.2021@scis.smu.edu.sg", "Lim Xun Yi").setAdditionalInfo("M","SCIS","2021").setHealthInfo("O+","Nil", false).setTelegramUser("@desmondxy").setPhoneNo(89876988).setNok("Desmond", "Father",89876988).build();
                Student regine = new Student.StudentBuilder("1419345", "reginetan.2021@scis.smu.edu.sg", "Regine Tan").setAdditionalInfo("F","SCIS","2021").setHealthInfo("B-","Aenmic", true).setTelegramUser("@ginxed").setPhoneNo(90138293).setNok("Shalom", "Mother",90138293).build();
                repository.save(bernice);
                repository.save(ivan);
                repository.save(bryan);
                repository.save(atrayee);
                repository.save(xunyi);
                repository.save(regine);
            }
      
            };
        }
}



