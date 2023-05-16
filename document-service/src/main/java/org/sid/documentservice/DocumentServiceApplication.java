package org.sid.documentservice;

import org.sid.documentservice.entities.Document;
import org.sid.documentservice.enums.EtatDocument;
import org.sid.documentservice.repositories.DocumentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import java.util.Date;
import java.util.List;

@SpringBootApplication
public class DocumentServiceApplication {

	private final DocumentRepository documentRepository;

	public DocumentServiceApplication(DocumentRepository documentRepository) {
		this.documentRepository = documentRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(DocumentServiceApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(DocumentRepository documentRepository,
											   RepositoryRestConfiguration repositoryRestConfiguration){
		return args -> {
			repositoryRestConfiguration.exposeIdsFor(Document.class);
			documentRepository.saveAll(
					List.of(
							Document.builder().intitule("Attestation de travail")
									.dateDemande(new Date(2023, 1, 4))
									.etatDemandeDocument(EtatDocument.DOCUMENT_DELIVRE).build(),
							Document.builder().intitule("Fiche de paie").
									dateDemande(new Date(2022,9,23))
									.etatDemandeDocument(EtatDocument.DOCUMENT_EN_ATTENTE_DE_SIGNATURE)
									.build(),
							Document.builder().intitule("Fiche de mission").
									dateDemande(new Date(2023,2,28))
									.etatDemandeDocument(EtatDocument.DEMANDE_REFUSEE)
									.build()
					)
			);
			documentRepository.findAll().forEach(d->{
				System.out.println(d);
			});
		};
	}
}
