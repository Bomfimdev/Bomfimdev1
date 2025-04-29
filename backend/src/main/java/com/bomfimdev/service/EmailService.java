package com.bomfimdev.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void enviarEmail(String nome, String email, String mensagem) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("smurfbomfim@gmail.com");
        message.setSubject("Nova Mensagem de Contato - " + nome);
        message.setText("Nome: " + nome + "\nE-mail: " + email + "\nMensagem: " + mensagem);
        mailSender.send(message);
    }
}