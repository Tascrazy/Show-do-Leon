package com.example.demo.question;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/questions")
public class QuestionController {

    @Autowired
    private QuestionRepository questionRepository;

    @GetMapping("/level")
    public Question getRandomQuestion(@PathVariable("level") String level) {
        List<Question> questions = questionRepository.findByLevel(Question.difficulty.valueOf(level.toUpperCase()));
        if (questions.isEmpty()) {
            throw new RuntimeException("Acabou as perguntas do nivel:" + level);
        }
        return questions.get(new Random().nextInt(questions.size()));
    }

}
