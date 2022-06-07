package com.lt.service;

import java.util.List;

import com.lt.model.Customer;

public interface CustomerInterface {

	public List<Customer> addCustomer();

	public void updateCustomer(int id);

	public void viewCustomer();

	public void deleteCustomer(int id);

}
