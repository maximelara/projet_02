package com.example.projet.model;


import com.example.projet.beans.EspeceBean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EspeceRepository extends JpaRepository<EspeceBean, Integer> {
}

