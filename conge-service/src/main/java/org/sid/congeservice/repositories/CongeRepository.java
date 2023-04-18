package org.sid.congeservice.repositories;

import org.sid.congeservice.entities.Conge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CongeRepository extends JpaRepository<Conge,Long> {
}
