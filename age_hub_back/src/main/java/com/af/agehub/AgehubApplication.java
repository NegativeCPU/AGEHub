package com.af.agehub;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages = "com.af")
@SpringBootApplication
public class AgehubApplication {

	public static void main(String[] args) {
		SpringApplication.run(AgehubApplication.class, args);
	}

}
