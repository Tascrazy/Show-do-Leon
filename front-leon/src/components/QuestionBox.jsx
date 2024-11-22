export default function QuestionCard({ question, options, onAnswer }) {
    return (
        <div className="p-4 bg-gray-100 rounded shadow" >
            <h2 className="text-lg font-bold mb-4">{question}</h2>
            {options.map((option, index) => (
                <button key={index} onClick={() => onAnswer(option)} className="block w-full py-2 px-4 mb-2 bg-blue-200 hover:bg-blue-300 rounded" >
                    {option}
                </button>
            ))}
        </div>
    );
}