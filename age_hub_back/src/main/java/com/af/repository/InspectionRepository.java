package com.af.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.af.entity.Inspection;

@Repository
public interface InspectionRepository extends JpaRepository<Inspection, String>{

}
