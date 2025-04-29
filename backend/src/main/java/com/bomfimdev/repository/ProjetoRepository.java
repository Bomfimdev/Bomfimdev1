package com.bomfimdev.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bomfimdev.model.Projeto;

public interface ProjetoRepository extends JpaRepository<Projeto, Long> {
}