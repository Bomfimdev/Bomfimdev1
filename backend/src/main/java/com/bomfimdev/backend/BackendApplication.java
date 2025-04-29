package com.bomfimdev.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.bomfimdev.backend", "com.bomfimdev.config", "com.bomfimdev.model", "com.bomfimdev.repository", "com.bomfimdev.controller", "com.bomfimdev.service"})
@EnableJpaRepositories(basePackages = "com.bomfimdev.repository")
@EntityScan(basePackages = "com.bomfimdev.model")
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }
}