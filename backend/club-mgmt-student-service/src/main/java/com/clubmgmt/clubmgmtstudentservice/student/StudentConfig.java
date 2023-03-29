package com.clubmgmt.clubmgmtstudentservice.student;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class StudentConfig {
    
    // @Bean
    // CommandLineRunner commandLineRunner(StudentRepository repository){
    //     return args->{
    //     Student desmond = new Student.StudentBuilder("01389505", "desmond@scis.smu.edu.sg","Desmond Doss").setAdditionalInfo("M","SCIS","2022/23").setHealthInfo("B+","Nil", true).setTelegramUser("@zyzz").setPhoneNo(90906690).build();
    //     Student john = new Student.StudentBuilder("01324567", "johndoe@scis.smu.edu.sg","John Doe").setAdditionalInfo("M","SCIS","2022/23").setHealthInfo("A-","nil", true).setTelegramUser("@joh").setPhoneNo(90146690).build();
    //     Student alice = new Student.StudentBuilder("01432567", "alicetan@scis.smu.edu.sg","Alice Tan").setAdditionalInfo("F","SOSS","2022/23").setHealthInfo("B-","nil", true).setTelegramUser("@alict").setPhoneNo(89146690).build();
    //     repository.save(desmond);
    //     repository.save(john);
    //     repository.save(alice);
    // };
    // }
}



