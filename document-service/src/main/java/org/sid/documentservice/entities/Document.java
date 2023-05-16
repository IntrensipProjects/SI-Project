package org.sid.documentservice.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.sid.documentservice.enums.EtatDocument;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor @Builder

public class Document {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;
    private String intitule;
    private Date dateDemande;
    @Enumerated(EnumType.STRING)
    @Column(length = 35)
    private EtatDocument etatDemandeDocument;

}
