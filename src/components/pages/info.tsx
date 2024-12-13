import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiTarget } from 'react-icons/fi';

interface InfoProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const InfoPage: React.FC<InfoProps> = ({ isDarkMode }) => {
    const [isVisible] = useState(true);
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div
                className={`max-w-3xl w-full ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} rounded-2xl shadow-xl p-6 sm:p-8 space-y-6 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                <div className="space-y-4">
                    <h1 className={`text-3xl sm:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} tracking-tight opacity-100 transition-opacity duration-500`}>
                        Benvenuto in FoodWise!
                    </h1>
                    <h2 className={`text-xl sm:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-700'} tracking-tight opacity-100 transition-opacity duration-500`}>
                        Cibo e Ambiente: Quanto ne sai?
                    </h2>

                    <h3 className={`text-lg sm:text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed opacity-100 transition-opacity duration-500`}>
                        Scopri quanto il tuo stile di vita alimentare influisce sull’ambiente e sulle persone!
                    </h3>
                    <p className={`text-lg sm:text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed opacity-100 transition-opacity duration-500`}>
                        Entra nel nostro quiz interattivo e divertente per testare la tua conoscenza sul cibo e le sue connessioni con la sostenibilità. <br /> Ogni domanda ti farà riflettere su scelte alimentari che possono fare la differenza, migliorando il mondo che ci circonda.<br /> Con un punteggio finale, potrai sfidare i tuoi amici e scoprire chi è il più informato su cibo, ambiente e benessere!
                    </p>

                    <div className="text-lg sm:text-xl prose prose-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} max-w-none">
                        <ul className="list-disc pl-6 space-y-2">
                            <li>👉 Sfida te stesso!</li>
                            <li>🌱 Impara qualcosa di nuovo su cibo e ambiente</li>
                            <li>🥇 Condividi il tuo punteggio con gli amici!</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:gap-4">
                    <button
                        onClick={handleBackClick}
                        className="group relative inline-flex items-center gap-2 text-white bg-orange-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 mb-4 sm:mb-0"
                        aria-label="Accetta la sfida"
                    >
                        <FiTarget className="text-xl group-hover:-translate-x-1 transition-transform duration-300" />
                        <span>Accetta la sfida</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InfoPage;
