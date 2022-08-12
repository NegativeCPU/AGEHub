package com.af.entity;

import java.time.LocalDate;

import javax.persistence.*;

@Entity
@Table(name = "inspection")
public class Inspection {
	@Id
	@Column(name = "job_control_number")
	private String jobControlNumber;

	@Column(name = "type")
	private String type;

	@Column(name = "discrepancy")
	private String discrepancy;

	@Column(name = "date_due")
	private LocalDate dateDue;

	@ManyToOne
	@JoinColumn(name = "equipment_id")
	private Equipment equipment;

	public Inspection() {

	}

	public Inspection(String jobControlNumber, String type, String discrepancy, LocalDate dateDue,
			Equipment equipment) {
		this.jobControlNumber = jobControlNumber;
		this.type = type;
		this.discrepancy = discrepancy;
		this.dateDue = dateDue;
		this.equipment = equipment;
	}

	public String getJobControlNumber() {
		return jobControlNumber;
	}

	public void setJobControlNumber(String jobControlNumber) {
		this.jobControlNumber = jobControlNumber;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getDiscrepancy() {
		return discrepancy;
	}

	public void setDiscrepancy(String discrepancy) {
		this.discrepancy = discrepancy;
	}

	public LocalDate getDateDue() {
		return dateDue;
	}

	public void setDateDue(LocalDate dateDue) {
		this.dateDue = dateDue;
	}

	public Equipment getEquipment() {
		return equipment;
	}

	public void setEquipment(Equipment equipment) {
		this.equipment = equipment;
	}

}
