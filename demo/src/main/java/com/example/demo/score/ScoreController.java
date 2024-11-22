package com.example.demo.score;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/scores")
public class ScoreController {

    @Autowired
    public ScoreRepository scoreRepository;

    @PostMapping
    public Score saveScore(@RequestBody Score score) {
        score.setTimestamp(LocalDateTime.now());
        return scoreRepository.save(score);
    }

    @GetMapping("/leaderboard")
    public List<Score> getLeaderBoard() {
        return scoreRepository.findTop10ByOrderByScoreDesc();
    }

}
