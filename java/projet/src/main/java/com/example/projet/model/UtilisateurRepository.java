package com.example.projet.model;

import com.example.projet.beans.UtilisateurBean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UtilisateurRepository extends JpaRepository<UtilisateurBean, Integer> {
    boolean existsByEmailUtilisateur(String email);
    boolean existsByPseudoUtilisateur(String pseudo);
}