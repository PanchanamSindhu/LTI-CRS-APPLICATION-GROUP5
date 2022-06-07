/**
 * 
 */
package com.lt.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


import com.lt.service.CustomerImpl;
import com.lt.service.CustomerInterface;


/**
 * @author user211
 *
 */
@Configuration
public class CustomerConfig {
	@Bean(name = "customerBean")
	public CustomerInterface customerData() {
		return new CustomerImpl();
		
		
	}
	

}
