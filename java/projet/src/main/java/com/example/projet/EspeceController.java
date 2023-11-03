package com.example.projet;

import com.example.projet.beans.EspeceBean;
import com.example.projet.services.EspeceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

@Controller
public class EspeceController {

    @Autowired
    private EspeceService especeService;

    @RequestMapping("/guide")
    public String guidePage(
//            @RequestParam(name = "q", required = false) String query,
//            @RequestParam(name = "eauDouces", required = false) List<String> eauDouces,
//            @RequestParam(name = "eauSaumatre", required = false) List<String> eauSaumatre,
//            @RequestParam(name = "eauDeMer", required = false) List<String> eauDeMer,
//            @RequestParam(name = "sort", defaultValue = "name") String sort,
//            @RequestParam(name = "order", defaultValue = "asc") String order,
            Model model
    ) {
        List<EspeceBean> especes = new ArrayList<>();
        especes = especeService.getAll();
//        List<EspeceBean> especes = new ArrayList<>();
//
//        if (typeEaux == null || typeEaux.isEmpty()) {
//            // Si aucun type d'eau n'est sélectionné, récupérez tous les poissons triés par le critère donné
//            especes = especeService.getAllSorted(sort);
//        } else {
//            // Sinon, récupérez les poissons qui correspondent à au moins l'un des types d'eau
//            for (String typeEau : typeEaux) {
//                List<EspeceBean> fishByWaterType = especeService.getFishByWaterTypes(typeEau);
//                especes.addAll(fishByWaterType);
//            }
//        }
//
//        model.addAttribute("especes", especes);
        model.addAttribute("especes", especes);
        return "guide";
    }
}

