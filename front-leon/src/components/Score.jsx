export default function ScoreBoard({ score }) {
    return (
        <div className="fixed top-0 right-0 p-4 bg-blue-500 text-white rounded">
            Score: {score}
        </div>
    );
}