package com.lt.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.lt.service.HelloWorld;
import com.lt.service.HelloWorldImpl;

@Configuration
public class AppConfig {
	
	@Bean(name = "hellobean")
	public HelloWorld helloWorld() {
		return new HelloWorldImpl();
	}

}
