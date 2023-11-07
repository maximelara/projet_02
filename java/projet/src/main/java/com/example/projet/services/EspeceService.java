package com.example.projet.services;

import com.example.projet.beans.EspeceBean;
import com.example.projet.model.EspeceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EspeceService {
    @Autowired
    private EspeceRepository especeRep;
    public List<EspeceBean> getAll() {
        return especeRep.findAll();
    }

}
