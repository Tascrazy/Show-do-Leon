'use client';

import { useEffect, useState } from 'react';
import QuestionCard from '../../components/QuestionCard';
import ScoreBoard from '../../components/ScoreBoard';
import { fetchQuestion } from '../../services/api';
import { useRouter } from 'next/navigation';

export default function Game() {
    const [question, setQuestion] = useState(null);
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState('easy');
    const router = useRouter();

    useEffect(() => {
        fetchQuestion(level).then(setQuestion);
    }, [level]);

    const handleAnswer = (selectedOption) => {
        if (selectedOption === question.correctOption) {
            setScore(score + 10);
            setLevel(level === 'easy' ? 'medium' : 'hard');
        } else {
            router.push(`/result?score=${score}`);
        }
    };

    return (
        <div className="p-4">
            {question ? (
                <QuestionCard
                    question={question.questionText}
                    options={[question.optionA, question.optionB, question.optionC, question.optionD]}
                    onAnswer={handleAnswer}
                />
            ) : (
                <p>Carregando...</p>
            )}
            <ScoreBoard score={score} />
        </div>
    );
}
