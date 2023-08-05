package com.tutorial.crud.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

public class ProductoDto {

	@NotBlank
	private String nombre;
	
	//private Float precio; // en lugar de un primitivo lo cambio a la clase Float para poder unsar el null
	@Min(0)
	private float precio;
	public ProductoDto(@NotBlank String nombre, @Min(0) float precio) {
		super();
		this.nombre = nombre;
		this.precio = precio;
	}

	public ProductoDto() {
		super();
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public float getPrecio() {
		return precio;
	}

	public void setPrecio(float precio) {
		this.precio = precio;
	}

}
