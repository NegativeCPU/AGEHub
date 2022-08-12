package com.af.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.af.entity.Inspection;
import com.af.repository.InspectionRepository;

@Service
public class InspectionService {
	@Autowired
	InspectionRepository inspectionRepository;

	public void saveInspection(Inspection inspection) {
		inspectionRepository.save(inspection);
	}

	public List<Inspection> findAllInspections() {
		return inspectionRepository.findAll();
	}

	public Optional<Inspection> findByJobControlNumber(String jobControlNumber) {
		return inspectionRepository.findById(jobControlNumber);
	}

	public void deleteInspectionByJobControlNumber(String jobControlNumber) {
		inspectionRepository.deleteById(jobControlNumber);
	}

}
