package com.example.projet;

import com.example.projet.beans.EspeceBean;
import com.example.projet.beans.UtilisateurBean;
import com.example.projet.services.EspeceService;
import com.example.projet.services.UtilisateurService;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ProjetAPI {
    @Autowired
    private EspeceService especeService;
    @Autowired
    private UtilisateurService utilisateurService;

    @GetMapping("/guide")
    public List<EspeceBean> getGuideEspeces() {
        return especeService.getAll();
    }
    @PostMapping("/inscription")
    public ResponseEntity<String> inscrireUtilisateur(@RequestBody UtilisateurBean utilisateur) {
        if (utilisateurService.emailExists(utilisateur.getEmailUtilisateur())) {
            return ResponseEntity.badRequest().body("L'adresse e-mail est déjà utilisée.");
        }
        if (utilisateurService.pseudoExists(utilisateur.getPseudoUtilisateur())) {
            return ResponseEntity.badRequest().body("Ce pseudo est déjà pris.");
        }

        utilisateur.setIdRole(2);
        String motDePasseHash = BCrypt.hashpw(utilisateur.getMotDePasseUtilisateur(), BCrypt.gensalt());
        utilisateur.setMotDePasseUtilisateur(motDePasseHash);
        utilisateurService.inscrireUtilisateur(utilisateur);
        return ResponseEntity.ok("Inscription réussie.");
    }
}
