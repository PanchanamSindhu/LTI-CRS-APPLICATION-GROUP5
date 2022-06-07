package com.lt.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * This is the Exception class which returns exception message.
 * 
 * @param args Unused.
 * @return Nothing.
 * 
 */

@ResponseStatus(value =HttpStatus.NOT_FOUND)
public class CourseNotFoundException extends RuntimeException {
	private static final long serialVersionUID = 1L;

	/**
	 * 
	 * This method return exception message .
	 * return CourseNotFoundException
	 */

	public CourseNotFoundException(String errorMessage) {  
	    super(errorMessage); 

}
}
