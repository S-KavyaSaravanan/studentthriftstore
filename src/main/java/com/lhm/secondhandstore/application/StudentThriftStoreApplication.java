package com.lhm.secondhandstore.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@ComponentScan({ "com.lhm" })
public class StudentThriftStoreApplication {
	public static void main(String[] args) {
	SpringApplication.run(StudentThriftStoreApplication.class, args);
		
	}

}
