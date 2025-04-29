package com.bomfimdev.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bomfimdev.model.Projeto;
import com.bomfimdev.repository.ProjetoRepository;

@RestController
@RequestMapping("/api/projetos")
public class ProjetoController {

    @Autowired
    private ProjetoRepository projetoRepository;

    @GetMapping
    public List<Projeto> listarProjetos() {
        return projetoRepository.findAll();
    }

    @PostMapping
    public Projeto criarProjeto(@RequestBody Projeto projeto) {
        return projetoRepository.save(projeto);
    }
}