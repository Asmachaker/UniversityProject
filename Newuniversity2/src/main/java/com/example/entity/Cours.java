package com.example.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "cours")
public class Cours implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long codeC;
	private String libelleC;

	@OneToOne
	@JsonIgnore
	private Salle salleName;
	
	public Long getCodeC() {
		return codeC;
	}

	public void setCodeC(Long codeC) {
		this.codeC = codeC;
	}

	public String getLibelleC() {
		return libelleC;
	}

	public void setLibelleC(String libelleC) {
		this.libelleC = libelleC;
	}


	public Salle getSalleName() {
		return salleName;
	}

	public void setSalleName(Salle salleName) {
		this.salleName = salleName;
	}


}
