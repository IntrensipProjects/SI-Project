package org.sid.stagiaireservice.entities;

import org.springframework.data.rest.core.config.Projection;

import java.util.Date;

@Projection(name = "resumeStagiaire", types = Stagiaire.class)
public interface StagiaireProjection {

    public String getNom();
    public String getEmail();
    public String getCNE();
    public String getNomUniversite();
    public Date getDateDebutStage();
    public Date getDateFinStage();
    public String getConventionStage();
}
