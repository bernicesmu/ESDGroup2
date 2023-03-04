package com.clubmgmt.clubmgmtstudentservice.student;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class StudentConfig {
    
    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository){
        return args->{
            Student desmond = new Student.StudentBuilder(1389405, "test1@scis.smu.edu.sg","desmond").build();
			Student lesmond = new Student.StudentBuilder(1389406, "test2@scis.smu.edu.sg","lesmond").build();
            repository.saveAll(
                List.of(
                    desmond,
                    lesmond
                    ));
        };

    }
}
