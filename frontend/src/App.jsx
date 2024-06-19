// Importování useState hooku z Reactu
import { useState } from "react";

// Importování stylů
import "./App.css";

// Importování komponent AuthPage a ChatsPage
import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

// Hlavní komponenta App
function App() {
    // Definice stavu 'user' s výchozí hodnotou undefined
    const [user, setUser] = useState(undefined);

    // Pokud uživatel není přihlášen (user je undefined), zobrazí se AuthPage
    if (!user) {
        return <AuthPage onAuth={(user) => setUser(user)} />;
    } 
    // Pokud uživatel je přihlášen (user je definován), zobrazí se ChatsPage
    else {
        return <ChatsPage user={user} />;
    }
}

// Export hlavní komponenty App jako výchozí export
export default App;
