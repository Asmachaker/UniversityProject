package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Enseignant;
import org.springframework.stereotype.Repository;

@Repository
public interface EnseignantRepository extends JpaRepository<Enseignant,Long> {

}
