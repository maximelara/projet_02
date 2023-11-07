-- DROP DATABASE IF EXISTS projet;
-- CREATE DATABASE IF NOT EXISTS projet;
USE projet;

-- Création des tables
-- CREATE TABLE especes(
--    id_espece INT AUTO_INCREMENT,
--    nom_espece VARCHAR(255) NOT NULL,
--    nom_latin_espece VARCHAR(255),
--    taille_moyenne_espece VARCHAR(50),
--    description_espece TEXT,
--    type_eaux_espece VARCHAR(255),
--    image_espece VARCHAR(255),
--    PRIMARY KEY(id_espece)
-- ) ENGINE = InnoDB;

-- CREATE TABLE roles(
--    id_role INT AUTO_INCREMENT,
--    libelle_role VARCHAR(50) NOT NULL,
--    PRIMARY KEY(id_role),
--    UNIQUE(libelle_role)
-- ) ENGINE = InnoDB;
-- INSERT INTO roles (libelle_role) VALUES ('ROLE_ADMIN');
-- INSERT INTO roles (libelle_role) VALUES ('ROLE_USER');




CREATE TABLE utilisateurs(
	id_utilisateur INT AUTO_INCREMENT,
	pseudo_utilisateur VARCHAR(50) NOT NULL,
	mot_de_passe_utilisateur VARCHAR(60) NOT NULL,
    email_utilisateur VARCHAR(255) NOT NULL,
	date_naissance_utilisateur DATE NOT NULL,
	description_utilisateur TEXT,
	technique_preferee_utilisateur VARCHAR(50),
	image_profil_utilisateur VARCHAR(255),	
	id_role INT DEFAULT 2,  
	PRIMARY KEY(id_utilisateur),
	UNIQUE(pseudo_utilisateur),
	FOREIGN KEY(id_role) REFERENCES roles(id_role)
) ENGINE = InnoDB;













-- CREATE TABLE types_lieux(
--    id_type_lieu INT AUTO_INCREMENT, 
--    libelle_type_lieu VARCHAR(50) NOT NULL,
--    PRIMARY KEY(id_type_lieu),
--    UNIQUE(libelle_type_lieu)
-- ) ENGINE = InnoDB;

-- CREATE TABLE types_touches(
--    id_type_touche INT AUTO_INCREMENT,
--    libelle_type_touche VARCHAR(50) NOT NULL,
--    PRIMARY KEY(id_type_touche)
-- ) ENGINE = InnoDB;

-- CREATE TABLE especes(
--    id_espece INT AUTO_INCREMENT,
--    nom_espece VARCHAR(50) NOT NULL,
--    description_espece TEXT,
--    image_espece VARCHAR(255),
--    PRIMARY KEY(id_espece)
-- ) ENGINE = InnoDB;

-- CREATE TABLE poissons(
--    id_poisson INT AUTO_INCREMENT,
--    nom_poisson VARCHAR(50),
--    description_poisson TEXT,
--    PRIMARY KEY(id_poisson)
-- ) ENGINE = InnoDB;



-- CREATE TABLE sessions(
--    id_session INT AUTO_INCREMENT,
--    titre_session VARCHAR(50) NOT NULL,
--    statut_session TINYINT(1) NOT NULL,
--    localisation_session POINT,
--    date_debut_session DATETIME NOT NULL,
--    date_fin_session DATETIME,
--    description_session TEXT,
--    images_session VARCHAR(255),
--    id_type_lieu INT NOT NULL,
--    PRIMARY KEY(id_session),
--    FOREIGN KEY(id_type_lieu) REFERENCES types_lieux(id_type_lieu)
-- ) ENGINE = InnoDB;

-- CREATE TABLE touches(
--    id_touche INT AUTO_INCREMENT,
--    date_touche DATETIME NOT NULL,
--    localisation_touche POINT,
--    commentaire_touche TEXT,
--    materiel_touche VARCHAR(50),
--    appat_touche VARCHAR(50),
--    taille_touche DECIMAL(15,2),
--    poids_touche DECIMAL(15,2),
--    images_touche VARCHAR(255),
--    id_poisson INT,
--    id_espece INT,
--    id_type_touche INT NOT NULL,
--    id_session INT NOT NULL,
--    PRIMARY KEY(id_touche),
--    FOREIGN KEY(id_poisson) REFERENCES poissons(id_poisson),
--    FOREIGN KEY(id_espece) REFERENCES especes(id_espece),
--    FOREIGN KEY(id_type_touche) REFERENCES types_touches(id_type_touche),
--    FOREIGN KEY(id_session) REFERENCES sessions(id_session)
-- ) ENGINE = InnoDB;

-- CREATE TABLE commentaires_touches(
--    id_commentaire_touche INT AUTO_INCREMENT,
--    contenu_commentaire_touche TEXT NOT NULL,
--    image_commentaire_touche VARCHAR(255),
--    id_touche INT NOT NULL,
--    id_utilisateur INT NOT NULL,
--    PRIMARY KEY(id_commentaire_touche),
--    FOREIGN KEY(id_touche) REFERENCES touches(id_touche),
--    FOREIGN KEY(id_utilisateur) REFERENCES utilisateurs(id_utilisateur)
-- ) ENGINE = InnoDB;

-- CREATE TABLE messages_prives(
--    id_message_prive INT AUTO_INCREMENT,
--    date_message_prive DATETIME NOT NULL,
--    contenu_message_prive TEXT,
--    image_message_prive VARCHAR(255),
--    id_utilisateur INT,
--    id_utilisateur_1 INT,
--    PRIMARY KEY(id_message_prive),
--    FOREIGN KEY(id_utilisateur) REFERENCES utilisateurs(id_utilisateur),
--    FOREIGN KEY(id_utilisateur_1) REFERENCES utilisateurs(id_utilisateur)
-- ) ENGINE = InnoDB;

-- CREATE TABLE publications(
--    id_publication INT AUTO_INCREMENT,
--    date_publication DATETIME NOT NULL,
--    contenu_publication TEXT,
--    images_publication VARCHAR(255),
--    id_session INT,
--    id_utilisateur INT NOT NULL,
--    PRIMARY KEY(id_publication),
--    FOREIGN KEY(id_session) REFERENCES sessions(id_session),
--    FOREIGN KEY(id_utilisateur) REFERENCES utilisateurs(id_utilisateur)
-- ) ENGINE = InnoDB;

-- CREATE TABLE commentaires_publications(
--    id_commentaire_publication INT AUTO_INCREMENT,
--    contenu_commentaire_publication TEXT NOT NULL,
--    images_commentaire_publication VARCHAR(255),
--    id_publication INT NOT NULL,
--    id_utilisateur INT NOT NULL,
--    PRIMARY KEY(id_commentaire_publication),
--    FOREIGN KEY(id_publication) REFERENCES publications(id_publication),
--    FOREIGN KEY(id_utilisateur) REFERENCES utilisateurs(id_utilisateur)
-- ) ENGINE = InnoDB;

-- CREATE TABLE ajouter_utilisateurs(
--    id_utilisateur INT,
--    id_utilisateur_1 INT,
--    date_ajouter_utilisateur DATETIME NOT NULL,
--    PRIMARY KEY(id_utilisateur, id_utilisateur_1),
--    FOREIGN KEY(id_utilisateur) REFERENCES utilisateurs(id_utilisateur),
--    FOREIGN KEY(id_utilisateur_1) REFERENCES utilisateurs(id_utilisateur)
-- ) ENGINE = InnoDB;

-- CREATE TABLE liker_utilisateurs_publications(
--    id_utilisateur INT,
--    id_publication INT,
--    PRIMARY KEY(id_utilisateur, id_publication),
--    FOREIGN KEY(id_utilisateur) REFERENCES utilisateurs(id_utilisateur),
--    FOREIGN KEY(id_publication) REFERENCES publications(id_publication)
-- ) ENGINE = InnoDB;

-- CREATE TABLE liker_utilisateurs_commentaires_publication(
--    id_utilisateur INT,
--    id_commentaire_publication INT,
--    PRIMARY KEY(id_utilisateur, id_commentaire_publication),
--    FOREIGN KEY(id_utilisateur) REFERENCES utilisateurs(id_utilisateur),
--    FOREIGN KEY(id_commentaire_publication) REFERENCES commentaires_publications(id_commentaire_publication)
-- ) ENGINE = InnoDB;

-- CREATE TABLE partager_publications(
--    id_publication INT,
--    id_publication_1 INT,
--    PRIMARY KEY(id_publication, id_publication_1),
--    FOREIGN KEY(id_publication) REFERENCES publications(id_publication),
--    FOREIGN KEY(id_publication_1) REFERENCES publications(id_publication)
-- ) ENGINE = InnoDB;

-- CREATE TABLE liker_utilisateurs_touches(
--    id_utilisateur INT,
--    id_touche INT,
--    PRIMARY KEY(id_utilisateur, id_touche),
--    FOREIGN KEY(id_utilisateur) REFERENCES utilisateurs(id_utilisateur),
--    FOREIGN KEY(id_touche) REFERENCES touches(id_touche)
-- ) ENGINE = InnoDB;

-- -- Insertions de données
-- INSERT INTO types_lieux (libelle_type_lieu) VALUES
-- ("Rivière"),
-- ("Lac"),
-- ("Mer"),
-- ("Étang"),
-- ("Canal");

-- INSERT INTO types_touches (libelle_type_touche) VALUES
-- ("Décroche"),
-- ("Casse"),
-- ("Poisson");

-- -- Requête Ajouter une session
-- INSERT INTO sessions (titre_session, statut_session, localisation_session, date_debut_session, date_fin_session, id_type_lieu) VALUES
-- ("Ma session 1", 1, POINT(44.0737, 1.6161), "2023-08-21 09:00:00", "2023-08-21 19:00:00", 1),
-- ("Ma session 2", 0, POINT(44.0737, 1.6161), "2023-08-23 09:00:00", "2023-08-23 21:00:00", 1),
-- ("Ma session 3", 1, POINT(44.0737, 1.6161), "2023-08-26 09:00:00", "2023-08-26 19:00:00", 1);

-- INSERT INTO touches (date_touche, localisation_touche, id_type_touche, id_session) VALUES
-- ("2023-08-26 09:37:00", POINT(44.0737, 1.6161), 3, 1),
-- ("2023-08-26 14:12:00", POINT(44.0737, 1.6161), 2, 1);

-- -- Requête supprimer une prise
-- DELETE FROM touches
-- WHERE id_touche = 2;

-- -- Requête afficher les sessions
-- SELECT *
-- FROM sessions;







