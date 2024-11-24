export default function ScoreBoard({ score }) {
    return (
        <div className="fixed top-4 right-4 px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white text-lg font-bold shadow-lg rounded-full">
            🏆 Score: {score}
        </div>
    );
}
