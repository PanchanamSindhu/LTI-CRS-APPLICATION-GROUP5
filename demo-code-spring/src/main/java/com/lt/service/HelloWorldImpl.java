/**
 * 
 */
package com.lt.service;

import org.springframework.stereotype.Service;

/**
 * @author user211
 *
 */
@Service
public class HelloWorldImpl implements HelloWorld {

	
	
	@Override
	public String PrintHelloWorld(String msg) {
		System.out.println("hello "+msg);
		return "hello "+msg;
	}

}
