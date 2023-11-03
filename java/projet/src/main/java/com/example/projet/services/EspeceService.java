package com.example.projet.services;

import com.example.projet.beans.EspeceBean;
import com.example.projet.model.EspeceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Service
public class EspeceService {
    @Autowired
    private EspeceRepository especeRep;
    public List<EspeceBean> getAll() {
        return especeRep.findAll();
    }
    public List<EspeceBean> searchFish(String query) {
        // Utilisez votre repository ou une autre méthode pour rechercher les poissons en fonction de la requête
        return especeRep.search(query);
    }
//    public List<EspeceBean> getAllSorted(String sort) {
//        List<EspeceBean> allEspeces = especeRep.findAll();
//        List<EspeceBean> newList = new ArrayList<>();
//        if ("name".equals(sort)) {
//            allEspeces.sort(Comparator.comparing(EspeceBean::getNom_espece));
//
//
//        return especeRep.findAll();
//    }

//    public List<EspeceBean> getAllSorted(String sort) {
//        List<EspeceBean> allEspeces = especeRep.findAll();
//
//        // Vérifiez le critère de tri et triez la liste en conséquence
//        if ("name".equals(sort)) {
//            allEspeces.sort(Comparator.comparing(EspeceBean::getNom_espece));
//        } else if ("latinName".equals(sort)) {
//            allEspeces.sort(Comparator.comparing(EspeceBean::getNom_latin_espece));
//        } else if ("meanLenght".equals(sort)) {
//            allEspeces.sort(Comparator.comparing(EspeceBean::getTaille_moyenne_espece));
//        }
//
//        return allEspeces;
//    }
//
//    public List<EspeceBean> getFishByWaterTypes(List<String> typeEaux) {
//        List<EspeceBean> matchingFish = new ArrayList<>();
//
//        if (typeEaux.isEmpty()) {
//            return matchingFish; // Aucun type d'eau sélectionné, renvoie une liste vide
//        }
//
//        // Pour chaque type d'eau sélectionné, recherchez les poissons correspondants
//        for (String typeEau : typeEaux) {
//            List<EspeceBean> fishByWaterType = especeRep.findByTypeEauxEspeceContaining(typeEau);
//            if (matchingFish.isEmpty()) {
//                matchingFish.addAll(fishByWaterType);
//            } else {
//                // Conservez uniquement les poissons qui correspondent à tous les types d'eau sélectionnés
//                matchingFish.retainAll(fishByWaterType);
//            }
//        }
//
//        return matchingFish;
//    }
}
