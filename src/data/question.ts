import { Question } from "../types/QuizTypes";

export const questions: Question[] = [
    {
        id: 1,
        text: "Quale settore produce la maggior parte delle emissioni di gas serra legate al cibo?",
        options: ["Coltivazione di cereali", "Produzione di carne e latticini", "Pesce", "Produzione di frutta"],
        correctAnswerId: 1,
    },
    {
        id: 2,
        text: "Quanta acqua serve per produrre 1 Kg di carne di manzo?",
        options: ["500 Litri", "1.500 Litri", "10.000 Litri", "15.000 Litri"],
        correctAnswerId: 3,
    },
    {
        id: 3,
        text: "Quale alimento ha l'impronta ecologica più bassa?",
        options: ["Fagioli", "Pollo", "Uova", "Maiale"],
        correctAnswerId: 0,
    },
    {
        id: 4,
        text: "Quanta percentuale di cibo prodotto viene sprecata ogni anno?",
        options: ["12%", "26%", "33%", "52%"],
        correctAnswerId: 2,
    },
    {
        id: 5,
        text: "Qual'è il cibo più sprecato al mondo?",
        options: ["Pane", "Frutta e Verdura", "Carne", "Riso"],
        correctAnswerId: 1,
    },
    {
        id: 6,
        text: "Quale dieta ha il minor impatto ambientale?",
        options: ["Dieta Onnivora", "Dieta Vegetariana", "Dieta Vegana", "Dieta Mediterranea"],
        correctAnswerId: 2,
    },
    {
        id: 7,
        text: "Qual'è il beneficio della filiera corta (Km 0)?",
        options: ["Riduce l'uso di pesticidi", "Favorisce prodotti biologici", "Riduce emissioni di trasporto", "Garantisce prodotti economici"],
        correctAnswerId: 2,
    },
    {
        id: 8,
        text: "Quale di queste è una soluzione innovativa per ridurre lo spreco alimentare?",
        options: ["Compostaggio domestico", "Packaging biodegradabile", "App contro lo spreco alimentare", "Tutte le precedenti"],
        correctAnswerId: 3,
    },
    {
        id: 9,
        text: "Quale alternativa proteica ha il minor impatto ambientale?",
        options: ["Insetti", "Carne Sintetica", "Pesce", "Soia"],
        correctAnswerId: 0,
    },
    {
        id: 10,
        text: "Quale paese ha introdotto la prima legge contro lo spreco alimentare nei supermercati?",
        options: ["Italia", "Francia", "Germania", "Svezia"],
        correctAnswerId: 1,
    },



];
