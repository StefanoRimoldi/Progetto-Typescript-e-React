import React from "react";
import { Question } from "../types/QuizTypes";

interface QuestionProps {
    question: Question;
    onAnswer: (answerId: number) => void;
    selectedAnswer: number | null; // Nuova proprietà per la risposta selezionata
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const QuestionComponent: React.FC<QuestionProps> = ({
    question,
    onAnswer,
    selectedAnswer,
    isDarkMode,

}) => {
    return (
        <div
            className={`p-6 mb-6 rounded-lg shadow-lg ${isDarkMode
                ? "bg-gray-800/50 text-white border-gray-700"
                : "bg-gray-100 text-black border-gray-300"
                }`}
        >
            <h3
                className={`text-lg font-medium ${isDarkMode ? "text-gray-200" : "text-gray-800"
                    } mb-4`}
            >
                {question.text}
            </h3>
            <div className="space-y-3">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        className={`w-full text-center px-4 py-2 text-left rounded-lg transition duration-200 ${selectedAnswer === index
                            ? isDarkMode
                                ? "bg-green-600 text-white"
                                : "bg-green-400 text-black"
                            : isDarkMode
                                ? "bg-gray-700/50 text-white hover:bg-gray-600/50"
                                : "bg-orange-300 text-black hover:bg-orange-400"
                            }`}
                        onClick={() => onAnswer(index)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionComponent;
