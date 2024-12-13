import React from "react";
import { FaReact } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiVisualstudiocode } from 'react-icons/si';

interface FooterProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
    return (
        <footer className={`py-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} rounded-lg mb-8 p-4`}>

            <div className="text-center text-gray-400 flex flex-col items-center">
                {/* LOGO */}
                <div className="mt-2">
                    <img
                        src="/images/FoodWise.png"
                        alt="Logo"
                        className="h-8"
                    />
                </div>


                <p className="mt-4 text-sm text-gray-500">
                    Realizzato con React, TypeScript, e Tailwind CSS, sviluppato in Visual Studio Code.
                </p>


                <div className="flex space-x-4 mt-4 text-gray-400">
                    <FaReact className="text-2xl" title="React" />
                    <SiTypescript className="text-2xl" title="TypeScript" />
                    <SiTailwindcss className="text-2xl" title="Tailwind CSS" />
                    <SiVisualstudiocode className="text-2xl" title="Visual Studio Code" />
                </div>
                <p className="mt-4">© 2024 FoodWise</p>
            </div>
        </footer>
    );
}

export default Footer;
