// Importování React knihovny
import React from 'react';
// Importování ReactDOM knihovny pro manipulaci s DOM
import ReactDOM from 'react-dom/client';
// Importování hlavní komponenty App
import App from './App.jsx';

// Vytvoření root elementu pro React aplikaci a renderování hlavní komponenty App
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

