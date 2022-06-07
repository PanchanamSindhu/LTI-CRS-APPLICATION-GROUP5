/**
 * 
 */
package com.lt.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lt.model.Customer;

/**
 * @author user211
 *
 */
@Service
public class CustomerImpl implements CustomerInterface{

	@Autowired
	
	@Override
	public List<Customer> addCustomer() {
		// TODO Auto-generated method stub
		List<Customer> customerList=new ArrayList<Customer>(Arrays.asList(
				new Customer("Sindnhu",101),
				new Customer("xya",102),
				new Customer("Snjdhnhu",104)));
		
		System.out.println("CUSTOMER ADDED SUCCESFULLY :"+ customerList);
		return customerList;
		
	}

	@Override
	public void updateCustomer(int id) {
		System.out.println("----UPDATED SUCCESFULLY ------");
		
		
	}

	@Override
	public void viewCustomer() {
		// TODO Auto-generated method stub
		List<Customer> customerList= addCustomer();
		System.out.println("----CUSTOMER LIST ------"+customerList);
		
	}

	@Override
	public void deleteCustomer(int id) {
		// TODO Auto-generated method stub
		List<Customer> customerList= addCustomer();
		List<Customer> neList=new ArrayList<Customer>();
		
		for(Customer c:customerList) {
			if(!(c.getId()==id)) {
				neList.add(c);
			}
		}
		
		System.out.println("================CUSTOMER DELETED SCUCCESFULLY FOR ID ===========:"+ id);
		System.out.println("AFTER DELETION==================== "+neList);
	}

}
