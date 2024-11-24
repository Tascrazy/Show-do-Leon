export default function QuestionCard({ question, options, onAnswer }) {
    return (
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">{question}</h2>
            <div className="space-y-4">
                {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => onAnswer(option)}
                        className="w-full py-3 px-6 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg hover:from-blue-600 hover:to-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-300"
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}
