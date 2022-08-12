package com.af.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.af.entity.Equipment;
import com.af.repository.EquipmentRepository;

@Service
public class EquipmentService {
	@Autowired
	EquipmentRepository equipmentRepository;

	public void saveEquipment(Equipment equipment) {
		equipmentRepository.save(equipment);
	}

	public List<Equipment> findAllEquipment() {
		return equipmentRepository.findAll();
	}

	public Optional<Equipment> findById(Integer id) {
		return equipmentRepository.findById(id);
	}

	public void deleteEquipmentById(Integer id) {
		equipmentRepository.deleteById(id);
	}

}
