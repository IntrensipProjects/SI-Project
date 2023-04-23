package org.sid.stagiaireservice.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor @Builder

public class Stagiaire {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String nom;
    private String email;
    private Date dateNaissance;
    private String adresse;
    private String CNE;
    private String nomUniversite;
    private String typeStage;
    private Date dateDebutStage;
    private Date dateFinStage;
    private String conventionStage;
}
