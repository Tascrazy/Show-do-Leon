'use client';

import { useEffect, useState } from 'react';
import QuestionBox from '../../components/QuestionBox';
import Score from '../../components/Score';
import { fetchQuestion } from '../../services/api';
import { useRouter } from 'next/navigation';

export default function Game() {
    const [question, setQuestion] = useState(null);
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState('easy');
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [usedQuestions, setUsedQuestions] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const getNewQuestion = async () => {
            let newQuestion;
            do {
                newQuestion = await fetchQuestion(level);
            } while (usedQuestions.some(q => q.id === newQuestion.id));

            setQuestion(newQuestion);
            setUsedQuestions([...usedQuestions, newQuestion]);
        }
        getNewQuestion();
    }, [level, correctAnswers]);

    const handleAnswer = (selectedOption) => {
        if (selectedOption === question.correctAnswer) {

            const scoreValue = level === 'easy' ? 10 : level === 'medium' ? 20 : 40;
            setScore(score + scoreValue);

            const updatedCorrectAnswers = correctAnswers + 1;

            if (updatedCorrectAnswers === 3) {
                setCorrectAnswers(0);
                if (level === 'easy') {
                    setLevel('medium');
                } else if (level === 'medium') {
                    setLevel('hard');
                }
            } else {
                setCorrectAnswers(updatedCorrectAnswers);
            }
        } else {
            router.push(`/result?score=${score}`);
        }
    };

    return (
        <div className="p-4">
            {question ? (
                <QuestionBox
                    question={question.questionText}
                    options={[question.optionA, question.optionB, question.optionC, question.optionD]}
                    onAnswer={handleAnswer}
                />
            ) : (
                <p>Carregando...</p>
            )}
            <Score score={score} />
            <p className="mt-2">Nível atual: {level.toUpperCase()}</p>
        </div>
    );
}
