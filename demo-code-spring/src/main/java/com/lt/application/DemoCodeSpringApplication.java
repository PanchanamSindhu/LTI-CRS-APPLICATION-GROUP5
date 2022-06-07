package com.lt.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

import com.lt.configuration.AppConfig;
import com.lt.configuration.CustomerConfig;
import com.lt.service.CustomerImpl;
import com.lt.service.HelloWorld;

@SpringBootApplication
@ComponentScan({"com.lt.*"})
@EnableAutoConfiguration
@Configuration
@Import({ AppConfig.class, CustomerConfig.class })

public class DemoCodeSpringApplication {

	public static void main(String[] args) {

//		System.out.println("first application");
		ApplicationContext app = SpringApplication.run(AppConfig.class);
		HelloWorld obj = (HelloWorld) app.getBean("hellobean");
		obj.PrintHelloWorld("spring5 java config");

		ApplicationContext app1 = SpringApplication.run(CustomerConfig.class);
		CustomerImpl customer = (CustomerImpl) app1.getBean("customerBean");
		customer.addCustomer();
		customer.deleteCustomer(101);
		customer.updateCustomer(102);
		customer.viewCustomer();
	}
	
}
