package com.af.entity;

import javax.persistence.*;

@Entity
@Table(name = "employee")
public class Employee {

	@Id
	@Column(name = "email")
	private String email;

	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;

	@Column(name = "emp_rank")
	private String empRank;

	@Column(name = "emp_level")
	private String empLevel;

	@Column(name = "password")
	private String password;

	public Employee() {

	}

	public Employee(String email, String firstName, String lastName, String empRank, String empLevel, String password) {
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.empRank = empRank;
		this.empLevel = empLevel;
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmpRank() {
		return empRank;
	}

	public void setEmpRank(String empRank) {
		this.empRank = empRank;
	}

	public String getEmpLevel() {
		return empLevel;
	}

	public void setEmpLevel(String empLevel) {
		this.empLevel = empLevel;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
