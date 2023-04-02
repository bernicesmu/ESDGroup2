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
                Student daniel = new Student.StudentBuilder("1986754", "daniellee.2020@business.smu.edu.sg", "Daniel Lee").setAdditionalInfo("M","SOB","2021").setHealthInfo("A-","Nil", true).setTelegramUser("@johndoe").setPhoneNo(91234567).setNok("Kevin", "Father",97843215).build();
                Student jane = new Student.StudentBuilder("1237819", "jane.smith.2022@law.smu.edu.sg", "Jane Smith").setAdditionalInfo("F","YPHSL","2022").setHealthInfo("AB+","Asthma", true).setTelegramUser("@janesmith").setPhoneNo(83456789).setNok("Karen", "Mother",81234567).build();
                Student robert = new Student.StudentBuilder("1815063", "robert.ng.2021@law.smu.edu.sg", "Robert Ng").setAdditionalInfo("M","YPHSL","2021").setHealthInfo("B+","Nil", true).setTelegramUser("@robertng").setPhoneNo(89991234).setNok("Sean", "Father",85672134).build();
                Student emily = new Student.StudentBuilder("1429605", "emily.tan.2019@economics.smu.edu.sg", "Emily Tan").setAdditionalInfo("F","SOE","2019").setHealthInfo("B-","Peanuts", true).setTelegramUser("@emilytan").setPhoneNo(85673428).setNok("Jessica", "Mother",93124567).build();
                Student david = new Student.StudentBuilder("1760382", "david.lee.2018@accountancy.smu.edu.sg", "David Lee").setAdditionalInfo("M","SOA","2018").setHealthInfo("O+","Nil", true).setTelegramUser("@davidlee").setPhoneNo(91238901).setNok("Marcus", "Father",89456123).build();
                repository.save(bernice);
                repository.save(ivan);
                repository.save(bryan);
                repository.save(atrayee);
                repository.save(xunyi);
                repository.save(regine);
                repository.save(daniel);
                repository.save(jane);
                repository.save(robert);
                repository.save(emily);
                repository.save(david);
            }
            };
        }
}



