package com.lt.model;


public class Customer {


	private String name;
	private int id;
	
	@Override
	public String toString() {
		return "Customer [name=" + name + ", id=" + id + "]";
	}

	

	public Customer(String name, int id) {
		super();
		this.name = name;
		this.id = id;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}

}
