package org.sid.stagiaireservice;

import org.sid.stagiaireservice.entities.Stagiaire;
import org.sid.stagiaireservice.repository.StagiaireRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import java.util.List;

@SpringBootApplication
public class StagiaireServiceApplication {
    private final StagiaireRepository stagiaireRepository;

    public StagiaireServiceApplication(StagiaireRepository stagiaireRepository) {
        this.stagiaireRepository = stagiaireRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(StagiaireServiceApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(StagiaireRepository stagiaireRepository,
                                               RepositoryRestConfiguration repositoryRestConfiguration){
        return args -> {
            repositoryRestConfiguration.exposeIdsFor(Stagiaire.class);
            stagiaireRepository.saveAll(
                    List.of(
                            Stagiaire.builder().nom("Martin Renard").
                                    email("m.renard@yahoo.com").
                                    //dateNaissance().
                                    adresse("Sidi Maârrouf, Casablanca").
                                    CNE("ZR34ODB").
                                    nomUniversite("EMSI").
                                    classe("1ACP").
                                    typeStage("Stage d'observation").
                                    //dateDebutStage().
                                    //dateFinStage().
                                    conventionStage("").
                                    nomEncadrantInterne("Youssef Salah").
                                    nomEncadrantExterne("Nicolas Legrand").build(),

                            Stagiaire.builder().nom("Ayoub Hassan").
                                    email("ayoubhassan121@gmail.com").
                                    //dateNaissance().
                                            adresse("Derb Ghallef, Casablanca").
                                    CNE("FR437Z4").
                                    nomUniversite("ISGA").
                                    classe("2ACI").
                                    typeStage("Stage en alternance").
                                    //dateDebutStage().
                                    conventionStage("").
                                    nomEncadrantInterne("Elliot Paul").
                                    nomEncadrantExterne("Mary Stewart").build(),
                            Stagiaire.builder().nom("Olivier Descartes").
                                    email("olidescartes@icloud.com").
                                    //dateNaissance().
                                    adresse("Belvédère").
                                    CNE("HU492GT").
                                    nomUniversite("HEM").
                                    classe("1ACI").
                                    typeStage("Stage d'application").
                                    //dateDebutStage().
                                    //dateFinStage().
                                    conventionStage("").
                                    nomEncadrantInterne("Youssef Salah").
                                    nomEncadrantExterne("Helène Poussin").build()
                    )
            );
            stagiaireRepository.findAll().forEach(s->{
                System.out.println(s);
            });
        };
    }
}
