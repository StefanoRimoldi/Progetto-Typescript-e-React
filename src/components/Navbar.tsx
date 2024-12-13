import React from "react";
import { FiSun, FiMoon, FiInfo } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface NavBarProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
    resetQuiz?: () => void;
}

const Navbar: React.FC<NavBarProps> = ({ isDarkMode, toggleTheme, resetQuiz }) => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        if (resetQuiz) {
            resetQuiz();
        }
        navigate('/');
    };

    return (
        <nav
            className={`${isDarkMode ? "bg-gray-800/40" : "bg-white/70"} backdrop-blur-md shadow-lg ${isDarkMode ? "shadow-gray-900/20" : "shadow-gray-200/20"
                } rounded-lg mb-8 p-4`}
        >
            <div className="flex justify-center items-center relative">
                <button
                    onClick={() => navigate('/info')}
                    className="p-2 rounded-full hover:bg-gray-700/20 absolute left-0"
                >
                    <FiInfo size={24} className={isDarkMode ? "text-gray-200" : "text-gray-800"} />
                </button>

                {/* LOGO */}
                <img
                    onClick={handleBackClick}
                    src="/images/FoodWise.png"
                    alt="Logo"
                    className="h-10 md:h-16 cursor-pointer"
                />

                {/* DARK LIGHT MODE */}
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-gray-700/20 absolute right-0"
                >
                    {isDarkMode ? (
                        <FiSun size={24} className="text-gray-200" />
                    ) : (
                        <FiMoon size={24} className="text-gray-800" />
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
