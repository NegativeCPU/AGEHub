package com.af.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.af.entity.Employee;
import com.af.entity.Equipment;
import com.af.entity.Inspection;
import com.af.service.EmployeeService;
import com.af.service.EquipmentService;
import com.af.service.InspectionService;

@CrossOrigin
@RestController
public class EmployeeController {

	@Autowired
	EmployeeService employeeService;
	@Autowired
	EquipmentService equipmentService;
	@Autowired
	InspectionService inspectionService;

	// POSTMAN SOA
	@RequestMapping(value = "/save", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
	public void submitEmployeeDetails(@RequestBody Employee employee) {
		employeeService.saveEmployee(employee);
	}

	// POSTMAN SOA
	@RequestMapping(value = "/findByEmail", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<Optional<Employee>> findByEmail(String email) {
		Optional<Employee> findEmployee = employeeService.findByEmail(email);
		try {
			if (findEmployee.isPresent()) {
				return new ResponseEntity<>(findEmployee, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	// POSTMAN SOA
	@RequestMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
	public ResponseEntity<Employee> loginHandler(@RequestBody Employee employee) {
		Employee login = employeeService.loginEmployee(employee);
		try {
			if (!login.equals(null)) {
				return new ResponseEntity<>(login, HttpStatus.OK);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return null;
	}

	// POSTMAN SOA
	@RequestMapping(value = "/findAllEmployees", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<List<Employee>> findAll() {
		try {
			List<Employee> allEmployees = employeeService.findAllEmployees();
			return new ResponseEntity<List<Employee>>(allEmployees, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}

	// POSTMAN SOA
	@RequestMapping(value = "/saveEquipment", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
	public void submitEquipmentDetails(@RequestBody Equipment equipment) {
		equipmentService.saveEquipment(equipment);
	}

	// POSTMAN SOA
	@RequestMapping(value = "/findById", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<Optional<Equipment>> findById(Integer id) {
		Optional<Equipment> findEquipment = equipmentService.findById(id);
		try {
			if (findEquipment.isPresent()) {
				return new ResponseEntity<>(findEquipment, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	// POSTMAN SOA
	@RequestMapping(value = "/findAllEquipment", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<List<Equipment>> findAllEquipment() {
		try {
			List<Equipment> allEquipment = equipmentService.findAllEquipment();
			return new ResponseEntity<List<Equipment>>(allEquipment, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}

	// POSTMAN SOA
	@RequestMapping(value = "/saveInspection", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
	public void submitInspectionDetails(@RequestBody Inspection inspection) {
		inspectionService.saveInspection(inspection);
	}

	// POSTMAN SOA
	@RequestMapping(value = "/findByJobControlNumber", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<Optional<Inspection>> findByJobControlNumber(String jobControlNumber) {
		Optional<Inspection> findInspection = inspectionService.findByJobControlNumber(jobControlNumber);
		try {
			if (findInspection.isPresent()) {
				return new ResponseEntity<>(findInspection, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	// POSTMAN SOA
	@RequestMapping(value = "/findAllInspection", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<List<Inspection>> findAllInspection() {
		try {
			List<Inspection> allInspection = inspectionService.findAllInspections();
			return new ResponseEntity<List<Inspection>>(allInspection, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}

	@RequestMapping(value = "/deleteByJobControlNumber", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
	@ResponseBody
	public void deleteByJobControlNumber(String jobControlNumber) {
		inspectionService.deleteInspectionByJobControlNumber(jobControlNumber);
	}
}
