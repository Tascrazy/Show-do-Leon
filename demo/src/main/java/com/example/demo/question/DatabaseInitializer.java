package com.example.demo.question;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DatabaseInitializer {

        @Bean
        CommandLineRunner initDatabase(QuestionRepository questionRepository) {
                return args -> {
                        // EASY
                        questionRepository.save(new Question(
                                        null,
                                        "Qual é o maior planeta do Sistema Solar?",
                                        "Marte",
                                        "Júpiter",
                                        "Saturno",
                                        "Terra",
                                        "Júpiter",
                                        Question.difficulty.EASY));

                        questionRepository.save(new Question(
                                        null,
                                        "Qual é o número de continentes no planeta Terra?",
                                        "Cinco",
                                        "Seis",
                                        "Sete",
                                        "Oito",
                                        "Sete",
                                        Question.difficulty.EASY));

                        questionRepository.save(new Question(
                                        null,
                                        "Qual é o símbolo químico da água?",
                                        "O2",
                                        "H2O",
                                        "CO2",
                                        "NaCl",
                                        "H2O",
                                        Question.difficulty.EASY));

                        // MEDIUM
                        questionRepository.save(new Question(
                                        null,
                                        "Em que ano aconteceu a chegada do homem à Lua?",
                                        "1965",
                                        "1969",
                                        "1971",
                                        "1975",
                                        "1969",
                                        Question.difficulty.MEDIUM));

                        questionRepository.save(new Question(
                                        null,
                                        "Qual é a fórmula matemática que representa a 'Lei da Gravitação Universal' de Newton?",
                                        "E = mc²",
                                        "F = ma",
                                        "F = G * (m1 * m2) / r²",
                                        "P = V * I",
                                        "F = G * (m1 * m2) / r²",
                                        Question.difficulty.MEDIUM));

                        questionRepository.save(new Question(
                                        null,
                                        "Quem pintou a obra conhecida como 'A Última Ceia'?",
                                        "Michelangelo",
                                        "Leonardo da Vinci",
                                        "Rafael",
                                        "Van Gogh",
                                        "Leonardo da Vinci",
                                        Question.difficulty.MEDIUM));

                        // HARD
                        questionRepository.save(new Question(
                                        null,
                                        "Qual é o número atômico do elemento químico Urânio?",
                                        "82",
                                        "92",
                                        "94",
                                        "96",
                                        "92",
                                        Question.difficulty.HARD));

                        questionRepository.save(new Question(
                                        null,
                                        "Qual é a capital do país Butão?",
                                        "Thimphu",
                                        "Katmandu",
                                        "Daca",
                                        "Phnom Penh",
                                        "Thimphu",
                                        Question.difficulty.HARD));

                        questionRepository.save(new Question(
                                        null,
                                        "Na música clássica, quem compôs a obra conhecida como Bolero?",
                                        "Maurice Ravel",
                                        "Ludwig van Beethoven",
                                        "Johann Sebastian Bach",
                                        "Wolfgang Amadeus Mozart",
                                        "Maurice Ravel",
                                        Question.difficulty.HARD));
                };
        }
}
