package org.sid.employeeservice;


import org.sid.employeeservice.Entities.Employee;
import org.sid.employeeservice.Repositories.EmployeeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import java.util.List;

@SpringBootApplication
public class EmployeeServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(EmployeeServiceApplication.class, args);
    }
    @Bean
    CommandLineRunner start(EmployeeRepository employeeRepository,
                            RepositoryRestConfiguration restConfiguration){
        return args -> {
            restConfiguration.exposeIdsFor(Employee.class);
//            Employee employee = new Employee();
//            employee.setNomComplet("Nouhaila OHAPOUNE");
//            employee.setAdresse("Casablanca");
//            employee.setDateDeNaissance(new Date());
//            employee.setCNE("BA2596");
//            employee.setPositionHeld("Dev");
//            employee.setTel("0644359316");

            employeeRepository.saveAll(
                    List.of(
                            Employee.builder().nomComplet("Nouhaila OHAPOUNE").adresse("Casablanca").CNE("BA2596")
                                    .email("n.ohapoune@mundiapolis.ma").positionHeld("dev").dateDeNaissance("07/01/2000")
                                    .tel("0644359316").dateEmbauche("03/06/2024").build()

                    )
            );
        };
    }



}
