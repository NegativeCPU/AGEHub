package com.af.entity;

import javax.persistence.*;

@Entity
@Table(name = "equipment")
public class Equipment {
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(name = "name")
	private String name;

	@Column(name = "type")
	private String type;

	@ManyToOne
	@JoinColumn(name = "employee_email")
	private Employee employee;

	public Equipment() {

	}

	public Equipment(Integer id, String name, String type, Employee employee) {
		this.id = id;
		this.name = name;
		this.type = type;
		this.employee = employee;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

}
