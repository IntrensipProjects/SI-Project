package org.sid.congeservice;

import org.sid.congeservice.entities.Conge;
import org.sid.congeservice.enums.EtatConge;
import org.sid.congeservice.enums.TypeConge;
import org.sid.congeservice.model.Employee;
import org.sid.congeservice.repositories.CongeRepository;
import org.sid.congeservice.services.EmployeeService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import java.util.Collection;
import java.util.Date;
import java.util.List;

@SpringBootApplication
@Import(AppConfig.class)
public class CongeServiceApplication {

	private final CongeRepository congeRepository;

	public CongeServiceApplication(CongeRepository congeRepository) {
		this.congeRepository = congeRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(CongeServiceApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(CongeRepository congeRepository, EmployeeService employeeService) {
		return args -> {
//			Long employeeId = 1L;
//			Conge conge = new Conge();
//			conge.setEmployeeId(employeeId);
//			conge.setDateDebutConge(new Date());
//			conge.setDateFinConge(new Date());
//			conge.setEtatDemandeConge(EtatConge.CONGE_ACCORDE);
//			conge.setType(TypeConge.CONGE_MALADIE);
//			Conge savedConge = congeRepository.save(conge);
		};
	}
}
