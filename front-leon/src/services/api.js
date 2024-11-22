import axios from 'axios';

export const fetchQuestion = async (level) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/questions/${level}`);
        return response.data;
    } catch (error) {
        throw new Error('Erro ao buscar perguntas');
    }
};

export const saveScore = async (scoreData) => {
    try {
        const response = await axios.post(`http://localhost:8080/api/scores`, scoreData, {
            headers: { 'Content-Type': 'application/json' }
        });
        return response.data;
    } catch (error) {
        throw new Error('Erro ao salvar pontuação');
    }
};

export const getLeaderboard = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/api/scores/leaderboard`);
        return response.data;
    } catch (error) {
        throw new Error('Erro ao buscar leaderboard');
    }
};
