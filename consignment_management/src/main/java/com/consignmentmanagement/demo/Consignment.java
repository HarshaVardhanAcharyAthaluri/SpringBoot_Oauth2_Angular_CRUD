package com.consignmentmanagement.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Consignment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer consignmentId;
	
	private String consignmentCatogeory;
	
	private String consignmentStatus;
	
	private String deliveryPartner;

	public Integer getConsignmentId() {
		return consignmentId;
	}

	public void setConsignmentId(Integer consignmentId) {
		this.consignmentId = consignmentId;
	}

	public String getConsignmentCatogeory() {
		return consignmentCatogeory;
	}

	public void setConsignmentCatogeory(String consignmentCatogeory) {
		this.consignmentCatogeory = consignmentCatogeory;
	}

	public String getConsignmentStatus() {
		return consignmentStatus;
	}

	public void setConsignmentStatus(String consignmentStatus) {
		this.consignmentStatus = consignmentStatus;
	}

	public String getDeliveryPartner() {
		return deliveryPartner;
	}

	public void setDeliveryPartner(String deliveryPartner) {
		this.deliveryPartner = deliveryPartner;
	}
	
	
	
}
