import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

const readStoredLanguage = () => {
    try {
        return localStorage.getItem('language');
    } catch {
        return null;
    }
};

// First visit: follow the browser language (Spanish speakers get ES, everyone else EN)
const initialLanguage = () =>
    readStoredLanguage() || (navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en');

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(initialLanguage);

    useEffect(() => {
        document.documentElement.lang = language;
        try {
            localStorage.setItem('language', language);
        } catch {
            // storage unavailable (private mode): the choice just isn't remembered
        }
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
