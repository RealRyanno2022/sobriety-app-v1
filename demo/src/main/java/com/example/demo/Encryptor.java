package com.example;

import org.jasypt.util.text.AES256TextEncryptor;

public class Encryptor {
    public static void main(String[] args) {
        if (args.length < 2) {
            System.out.println("Usage: java Encryptor <password> <text>");
            System.exit(1);
        }

        String password = args[0];
        String text = args[1];

        AES256TextEncryptor textEncryptor = new AES256TextEncryptor();
        textEncryptor.setPassword(password);

        String encryptedText = textEncryptor.encrypt(text);
        System.out.println("Encrypted text: " + encryptedText);
    }
}
