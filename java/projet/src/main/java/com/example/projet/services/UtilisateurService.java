package com.example.projet.services;

import com.example.projet.beans.UtilisateurBean;
import com.example.projet.model.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UtilisateurService {
    @Autowired
    private UtilisateurRepository utilisateurRep;
    public UtilisateurBean inscrireUtilisateur(UtilisateurBean utilisateur){

        return utilisateurRep.save(utilisateur);
    }
    public boolean emailExists(String email) {
        return utilisateurRep.existsByEmailUtilisateur(email);
    }

    public boolean pseudoExists(String pseudo) {
        return utilisateurRep.existsByPseudoUtilisateur(pseudo);
    }

}
