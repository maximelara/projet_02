package com.example.projet.model;


import com.example.projet.beans.EspeceBean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EspeceRepository extends JpaRepository<EspeceBean, Integer> {
    @Query("SELECT e FROM EspeceBean e " +
            "WHERE (:query IS NULL OR e.nom_espece LIKE %:query%) " +
            "OR (:query IS NULL OR e.nom_latin_espece LIKE %:query%) ")
    List<EspeceBean> search(@Param("query") String query);
}

