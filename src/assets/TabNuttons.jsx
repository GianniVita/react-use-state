import React from 'react';
import '../index.css'; // Importa gli stili globali

export default function TabButton({ title, isActive, onClick, customStyle }) {
    // Aggiungiamo la classe 'active' se la scheda è quella selezionata
    const buttonClass = `tab-button ${isActive ? 'active' : ''}`;

    // Se isActive è vero, l'attributo style sarà unito a customStyle, altrimenti è solo customStyle
    // Questo permette di usare gli stili personalizzati solo per il bottone attivo (o in generale)
    const finalStyle = isActive
        ? { ...customStyle, opacity: 1, fontWeight: 'bold' }
        : customStyle;

    return (
        <button
            className={buttonClass}
            onClick={onClick}
            style={finalStyle} // Applica lo stile
        >
            {title}
        </button>
    );
}