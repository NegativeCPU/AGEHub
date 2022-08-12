package com.af.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(basePackages = "com.af.repository")
@EntityScan(basePackages = "com.af.entity")
public class ApplicationConfig {

}
