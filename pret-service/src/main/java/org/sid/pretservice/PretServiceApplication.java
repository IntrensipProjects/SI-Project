package org.sid.pretservice;

import org.sid.pretservice.entities.Pret;
import org.sid.pretservice.enums.EtatPret;
import org.sid.pretservice.repository.PretRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import java.util.Date;
import java.util.List;

@SpringBootApplication
public class PretServiceApplication {

    private final PretRepository pretRepository;

    public PretServiceApplication(PretRepository pretRepository) {
        this.pretRepository = pretRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(PretServiceApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(PretRepository pretRepository,
                                               RepositoryRestConfiguration repositoryRestConfiguration){
        return args -> {
            repositoryRestConfiguration.exposeIdsFor(Pret.class);
            pretRepository.saveAll(
                    List.of(
                            Pret.builder().montant(4500)
                                    .dateEmprunt(new Date(2022, 12, 1))
                                    .dateRembouserment(new Date(2023, 1, 1))
                                    .etatDemandePret(EtatPret.PRET_ACCORDE)
                                    .build(),
                            Pret.builder().montant(300)
                                    .dateEmprunt(new Date(2022, 12, 1))
                                    .dateRembouserment(new Date(2023, 12, 15))
                                    .etatDemandePret(EtatPret.PRET_REMBOURSE)
                                    .build(),
                            Pret.builder().montant(78500)
                                    .dateEmprunt(new Date(2022, 12, 1))
                                    .dateRembouserment(new Date(2024, 12, 1))
                                    .etatDemandePret(EtatPret.PRET_REFUSE)
                                    .build()
                    )
            );
            pretRepository.findAll().forEach(p->{
                System.out.println(p);
            });
        };

    }

}
