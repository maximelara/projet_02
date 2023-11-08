package com.example.projet.beans;


import jakarta.persistence.*;

@Entity
@Table(name = "especes") //Nom de la table que représente ce bean
public class EspeceBean {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_espece;
    private String nom_espece;
    private String nom_latin_espece;
    private String taille_moyenne_espece;
    private String description_espece;
    @Column(name = "type_eaux_espece")
    private String typeEauxEspece;
    private String image_espece;

    public EspeceBean(String nom_espece, String nom_latin_espece,
                      String taille_moyenne_espece, String description_espece,
                      String typeEauxEspece, String image_espece) {
        this.nom_espece = nom_espece;
        this.nom_latin_espece = nom_latin_espece;
        this.taille_moyenne_espece = taille_moyenne_espece;
        this.description_espece = description_espece;
        this.typeEauxEspece = typeEauxEspece;
        this.image_espece = image_espece;
    }

    public EspeceBean() {
    }

    public int getId_espece() {
        return id_espece;
    }

    public void setId_espece(int id_espece) {
        this.id_espece = id_espece;
    }

    public String getNom_espece() {
        return nom_espece;
    }

    public void setNom_espece(String nom_espece) {
        this.nom_espece = nom_espece;
    }

    public String getNom_latin_espece() {
        return nom_latin_espece;
    }

    public void setNom_latin_espece(String nom_latin_espece) {
        this.nom_latin_espece = nom_latin_espece;
    }

    public String getTaille_moyenne_espece() {
        return taille_moyenne_espece;
    }

    public void setTaille_moyenne_espece(String taille_moyenne_espece) {
        this.taille_moyenne_espece = taille_moyenne_espece;
    }

    public String getDescription_espece() {
        return description_espece;
    }

    public void setDescription_espece(String description_espece) {
        this.description_espece = description_espece;
    }

    public String getTypeEauxEspece() {
        return typeEauxEspece;
    }

    public void setTypeEauxEspece(String typeEauxEspece) {
        this.typeEauxEspece = typeEauxEspece;
    }

    public String getImage_espece() {
        return image_espece;
    }

    public void setImage_espece(String image_espece) {
        this.image_espece = image_espece;
    }
}
