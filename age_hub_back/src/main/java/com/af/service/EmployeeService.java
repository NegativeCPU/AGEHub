package com.af.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.af.entity.Employee;
import com.af.repository.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	EmployeeRepository employeeRepository;

	public void saveEmployee(Employee employee) {
		employeeRepository.save(employee);
	}

	public Employee loginEmployee(Employee employee) {
		Employee login = employeeRepository.login(employee.getEmail(), employee.getPassword());
		return login;
	}

	public List<Employee> findAllEmployees() {
		return employeeRepository.findAll();
	}

	public Optional<Employee> findByEmail(String email) {
		return employeeRepository.findById(email);
	}

	public void deleteEmployeeByEmail(String email) {
		employeeRepository.deleteById(email);
	}

}
