import React, { useState } from "react";
import { questions } from "../data/question";
import QuestionComponent from "./QuestionComponent";
import Results from "./Results";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoPlayCircle } from "react-icons/io5";

interface QuizProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
}


const Quiz: React.FC<QuizProps> = ({ isDarkMode, toggleTheme }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<number[]>([]);
    const [quizStarted, setQuizStarted] = useState(false);
    const [quizEnded, setQuizEnded] = useState(false);


    const handleAnswer = (answerId: number) => {
        setUserAnswers((prevAnswers) => {
            const newAnswers = [...prevAnswers];
            newAnswers[currentQuestionIndex] = answerId;
            return newAnswers;
        });

        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizEnded(true);
        }
    };

    const resetQuiz = () => {
        console.log('Resetting quiz state');
        setUserAnswers([]);
        setQuizStarted(false);
        setCurrentQuestionIndex(0);
        setQuizEnded(false);
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    if (quizEnded) {
        return <Results userAnswers={userAnswers} isDarkMode={isDarkMode} toggleTheme={toggleTheme} onReset={resetQuiz} />;
    }

    const startQuiz = () => {
        setQuizStarted(true);
    };


    if (!quizStarted) {
        return (
            <div className={`flex items-center justify-center pt-10 pb-10 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-300'}`}>
                <div className={`p-6 rounded-lg shadow-lg w-full max-w-md text-center ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
                    <h1 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Benvenuto in FoodWise!</h1>
                    <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Scopri l'impatto del cibo sull'ambiente.<br /> Rispondi alle domande per scoprire quanto ne sai!</p>
                    <button
                        onClick={startQuiz}
                        className={`flex items-center justify-center mx-auto bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-400 transition duration-200 ${isDarkMode ? 'hover:bg-orange-400' : ''}`}
                    >
                        <IoPlayCircle className="text-xl group-hover:-translate-x-1 transition-transform duration-300" />
                        <span> Inizia il quiz</span>
                    </button>

                </div>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];

    const progressPercentage = Math.round(
        (currentQuestionIndex / questions.length) * 100
    );


    return (
        <div className={`max-w-2xl mx-auto ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-300 text-gray-900'}`}>
            <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                    <button
                        onClick={() => {
                            setQuizStarted(false);
                            setCurrentQuestionIndex(0);
                            setUserAnswers([]);
                            setQuizEnded(false);
                        }}
                        className={`px-3 py-1 text-sm rounded-md bg-[#58ff00] text-white hover:bg-green-400 transition duration-200`}
                    >
                        Ricomincia
                    </button>
                    <span className="text-sm font-medium">{`Domanda ${currentQuestionIndex + 1} di ${questions.length}`}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">{progressPercentage}%</span>
                </div>
                <div className="w-full bg-orange-700 rounded-full h-2.5">
                    <div
                        className="bg-[#58ff00] h-2.5 rounded-full transition-all duration-300"
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>
            </div>
            <QuestionComponent
                question={currentQuestion}
                onAnswer={handleAnswer}
                isDarkMode={isDarkMode}
                toggleTheme={toggleTheme}
                selectedAnswer={userAnswers[currentQuestionIndex] ?? null}
            />
            <div className="flex justify-between gap-4 mb-8">
                <button
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0}
                    className={`flex-1 flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium ${currentQuestionIndex === 0
                        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                        : "bg-[#ff7200] text-white hover:bg-[#e06600] transition duration-200"
                        }`}
                >
                    <FiChevronLeft className="mr-2" /> Precedente
                </button>
                <button
                    onClick={handleNext}
                    disabled={currentQuestionIndex === questions.length - 1}
                    className={`flex-1 flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium ${currentQuestionIndex === questions.length - 1
                        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                        : "bg-[#ff7200] text-white hover:bg-[#e06600] transition duration-200"
                        }`}
                >
                    Successivo <FiChevronRight className="ml-2" />
                </button>
            </div>
        </div>
    );

};

export default Quiz;
