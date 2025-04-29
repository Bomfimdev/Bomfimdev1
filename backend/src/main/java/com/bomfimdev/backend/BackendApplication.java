package com.bomfimdev.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@ComponentScan(basePackages = {"com.bomfimdev.backend", "com.bomfimdev.config", "com.bomfimdev.model", "com.bomfimdev.repository", "com.bomfimdev.controller", "com.bomfimdev.service"})
@EnableJpaRepositories(basePackages = "com.bomfimdev.repository")
@EntityScan(basePackages = "com.bomfimdev.model")
public class BackendApplication implements WebMvcConfigurer {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("https://bomfim-dev.netlify.app")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}