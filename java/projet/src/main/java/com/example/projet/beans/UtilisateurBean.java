package com.example.projet.beans;

import jakarta.persistence.*;

import java.util.Date;
@Entity
@Table(name = "utilisateurs") //Nom de la table que représente ce bean
public class UtilisateurBean {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idUtilisateur;
    private String pseudoUtilisateur;
    private String motDePasseUtilisateur;
    private String emailUtilisateur;
    private Date dateNaissanceUtilisateur;
    private String descriptionUtilisateur;
    private String techniquePrefereeUtilisateur;
    private String imageProfilUtilisateur;
    private int idRole;

    public UtilisateurBean(int idUtilisateur, String pseudoUtilisateur, String motDePasseUtilisateur,
                           String emailUtilisateur, Date dateNaissanceUtilisateur, String descriptionUtilisateur,
                           String techniquePrefereeUtilisateur, String imageProfilUtilisateur, int idRole) {
        this.idUtilisateur = idUtilisateur;
        this.pseudoUtilisateur = pseudoUtilisateur;
        this.motDePasseUtilisateur = motDePasseUtilisateur;
        this.emailUtilisateur = emailUtilisateur;
        this.dateNaissanceUtilisateur = dateNaissanceUtilisateur;
        this.descriptionUtilisateur = descriptionUtilisateur;
        this.techniquePrefereeUtilisateur = techniquePrefereeUtilisateur;
        this.imageProfilUtilisateur = imageProfilUtilisateur;
        this.idRole = idRole;
    }

    public UtilisateurBean() {
    }

    public int getIdUtilisateur() {
        return idUtilisateur;
    }

    public void setIdUtilisateur(int idUtilisateur) {
        this.idUtilisateur = idUtilisateur;
    }

    public String getPseudoUtilisateur() {
        return pseudoUtilisateur;
    }

    public void setPseudoUtilisateur(String pseudoUtilisateur) {
        this.pseudoUtilisateur = pseudoUtilisateur;
    }

    public String getMotDePasseUtilisateur() {
        return motDePasseUtilisateur;
    }

    public void setMotDePasseUtilisateur(String motDePasseUtilisateur) {
        this.motDePasseUtilisateur = motDePasseUtilisateur;
    }

    public String getEmailUtilisateur() {
        return emailUtilisateur;
    }

    public void setEmailUtilisateur(String emailUtilisateur) {
        this.emailUtilisateur = emailUtilisateur;
    }

    public Date getDateNaissanceUtilisateur() {
        return dateNaissanceUtilisateur;
    }

    public void setDateNaissanceUtilisateur(Date dateNaissanceUtilisateur) {
        this.dateNaissanceUtilisateur = dateNaissanceUtilisateur;
    }

    public String getDescriptionUtilisateur() {
        return descriptionUtilisateur;
    }

    public void setDescriptionUtilisateur(String descriptionUtilisateur) {
        this.descriptionUtilisateur = descriptionUtilisateur;
    }

    public String getTechniquePrefereeUtilisateur() {
        return techniquePrefereeUtilisateur;
    }

    public void setTechniquePrefereeUtilisateur(String techniquePrefereeUtilisateur) {
        this.techniquePrefereeUtilisateur = techniquePrefereeUtilisateur;
    }

    public String getImageProfilUtilisateur() {
        return imageProfilUtilisateur;
    }

    public void setImageProfilUtilisateur(String imageProfilUtilisateur) {
        this.imageProfilUtilisateur = imageProfilUtilisateur;
    }

    public int getIdRole() {
        return idRole;
    }

    public void setIdRole(int idRole) {
        this.idRole = idRole;
    }
}
