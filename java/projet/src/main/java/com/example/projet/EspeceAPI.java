package com.example.projet;

import com.example.projet.beans.EspeceBean;
import com.example.projet.services.EspeceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
public class EspeceAPI {
    @Autowired
    private EspeceService especeService;
    @GetMapping("/api/guide")
    public List<EspeceBean> guidePage() {
        return especeService.getAll();
    }
}
