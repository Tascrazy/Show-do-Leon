export const fetchQuestion = async (level) => {
    const res = await fetch(`http://localhost:8080/api/questions/${level}`);
    if (!res.ok) throw new Error('Erro ao buscar perguntas');
    return res.json();
};

export const saveScore = async (scoreData) => {
    const res = await fetch(`http://localhost:8080/api/scores`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(scoreData)
    });
    if (!res.ok) throw new Error('Erro ao salvar pontuação');
    return res.json();
};

export const getLeaderboard = async () => {
    const res = await fetch(`http://localhost:8080/api/scores/leaderboard`);
    if (!res.ok) throw new Error('Erro ao buscar leaderboard');
    return res.json();
}   