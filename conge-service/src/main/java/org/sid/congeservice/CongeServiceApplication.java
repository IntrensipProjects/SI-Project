package org.sid.congeservice;

import org.sid.congeservice.entities.Conge;
import org.sid.congeservice.enums.EtatConge;
import org.sid.congeservice.repositories.CongeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import java.util.Date;
import java.util.List;

@SpringBootApplication
public class CongeServiceApplication {

	private final CongeRepository congeRepository;

	public CongeServiceApplication(CongeRepository congeRepository) {
		this.congeRepository = congeRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(CongeServiceApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(CongeRepository congeRepository,
											   RepositoryRestConfiguration repositoryRestConfiguration){
		return args -> {
			repositoryRestConfiguration.exposeIdsFor(Conge.class);
			congeRepository.saveAll(
					List.of(
							Conge.builder().type("Congé sabatique").
									dateDebutConge(new Date(23/9/2022)).
									dateFinConge(new Date(23/9/2023)).
									etatDemandeConge(EtatConge.CONGE_ACCORDE).build(),
							Conge.builder().type("Congé de maternité").
									//dateDebutConge().
									//dateFinConge().
									etatDemandeConge(EtatConge.DEMANDE_REFUSEE).build(),
							Conge.builder().type("Congé de soins médicaux").
									//dateDebutConge().
									//dateFinConge().
									etatDemandeConge(EtatConge.DEMANDE_EN_ATTENTE).build()
					)
			);
			congeRepository.findAll().forEach(c->{
				System.out.println(c);
			});
		};
	}
}
