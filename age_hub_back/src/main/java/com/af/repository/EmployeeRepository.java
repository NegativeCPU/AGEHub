package com.af.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.af.entity.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, String> {
	@Query("SELECT s FROM Employee s WHERE s.email=?1 AND s.password=?2")
	Employee login(String email, String password);

}
