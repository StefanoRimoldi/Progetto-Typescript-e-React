import React, { useState } from "react";
import { questions } from "../data/question";
import { FiShare, FiRefreshCw } from "react-icons/fi";

interface ResultsProps {
    userAnswers: number[];
    isDarkMode: boolean;
    toggleTheme: () => void;
    onReset: () => void;
}

const Results: React.FC<ResultsProps> = ({ userAnswers, isDarkMode, onReset }) => {
    const [showSummary, setShowSummary] = useState(false);

    let correctAnswers = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === questions[index].correctAnswerId) {
            correctAnswers++;
        }
    });

    const totalQuestions = questions.length;
    const scorePercentage = ((correctAnswers / totalQuestions) * 100).toFixed(1);

    const getSkillLevel = (score: number): string => {
        if (score <= 3) {
            return "Principiante";
        } else if (score <= 7) {
            return "Consapevole";
        } else if (score <= 9) {
            return "Responsabile";
        } else {
            return "Leader";
        }
    };

    const skillLevel = getSkillLevel(correctAnswers);

    const handleShare = async () => {
        const shareData = {
            title: "Risultati del Quiz",
            text: `Ho completato il quiz e ho ottenuto ${correctAnswers} risposte corrette su ${totalQuestions}! Livello: ${skillLevel}. Prova anche tu!`,
            url: "https://foodwisequiz.netlify.app/"
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
                alert("Risultato condiviso con successo!");
            } catch (error) {
                console.error("Errore nella condivisione:", error);
                alert("Condivisione annullata o non supportata.");
            }
        } else {
            alert("La condivisione non è supportata su questo dispositivo.");
        }
    };


    return (
        <div className={`flex flex-col items-center justify-center py-16 ${isDarkMode ? "bg-gray-900" : "bg-gray-300"}`}>
            <div className={`p-6 rounded-lg shadow-lg w-full max-w-md text-center ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
                <h2 className="text-2xl font-bold mb-4">Risultati</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <div className={`p-4 rounded-lg ${isDarkMode ? "bg-gray-700 text-gray-300" : "bg-orange-300 text-gray-600"}`}>
                        <p className="font-bold text-base sm:text-lg lg:text-xl">Domande Totali</p>
                        <p className="text-lg sm:text-2xl lg:text-3xl">{totalQuestions}</p>
                    </div>
                    <div className={`p-4 rounded-lg ${isDarkMode ? "bg-gray-700 text-gray-300" : "bg-orange-300 text-gray-600"}`}>
                        <p className="font-bold text-base sm:text-lg lg:text-xl">Risposte Corrette</p>
                        <p className="text-lg sm:text-2xl lg:text-3xl">{correctAnswers}</p>
                    </div>
                    <div className={`p-4 rounded-lg ${isDarkMode ? "bg-gray-700 text-gray-300" : "bg-orange-300 text-gray-600"}`}>
                        <p className="font-bold text-base sm:text-lg lg:text-xl">Punteggio</p>
                        <p className="text-lg sm:text-2xl lg:text-3xl">{scorePercentage}%</p>
                    </div>
                </div>

                <p className="text-lg mb-6">
                    Il tuo livello è: <span className="text-green-500 font-bold">{skillLevel}</span>
                </p>

                <button
                    onClick={() => setShowSummary(!showSummary)}
                    className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition duration-200 w-full"
                >
                    {showSummary ? "Nascondi Riepilogo" : "Mostra Riepilogo"}
                </button>

                {showSummary && (
                    <div className="mt-6 space-y-4">
                        <h3 className={`text-lg font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>Riepilogo domande</h3>
                        {questions.map((question, index) => (
                            <div key={index} className={`p-4 rounded-lg ${isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"}`}>
                                <p className="font-medium">{question.text}</p>
                                <p className="text-sm">
                                    La tua risposta: {" "}
                                    <span className={userAnswers[index] === question.correctAnswerId ? "text-green-500" : "text-red-500"}>
                                        {question.options[userAnswers[index]] || "Non risposto"}
                                    </span>
                                </p>
                                {userAnswers[index] !== question.correctAnswerId && (
                                    <p className="text-sm text-gray-500">
                                        Risposta corretta: <span className="text-green-500">{question.options[question.correctAnswerId]}</span>
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-6 flex justify-between gap-4">
                    <button
                        onClick={onReset}
                        className="bg-[#58ff00] text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200 flex-1 flex items-center justify-center"
                    >
                        <FiRefreshCw size={20} />
                    </button>
                    <button
                        onClick={handleShare}
                        className="bg-[#58ff00] text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200 flex-1 flex items-center justify-center gap-2"
                    >
                        <FiShare size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Results;
