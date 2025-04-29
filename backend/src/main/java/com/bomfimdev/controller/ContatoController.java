package com.bomfimdev.controller;

import com.bomfimdev.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/contato")
public class ContatoController {

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<String> enviarMensagem(@RequestBody Map<String, String> dados) {
        try {
            String nome = dados.get("nome");
            String email = dados.get("email");
            String mensagem = dados.get("mensagem");
            emailService.enviarEmail(nome, email, mensagem);
            return ResponseEntity.ok("Mensagem enviada com sucesso!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Erro ao enviar mensagem: " + e.getMessage());
        }
    }
}