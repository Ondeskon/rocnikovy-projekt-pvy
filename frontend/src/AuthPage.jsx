import axios from 'axios'

// Komponenta AuthPage
const AuthPage = (props) => {
    // Funkce, která se spustí při odeslání formuláře
    const onSubmit = (e) => {
        // Zabrání standardnímu chování formuláře (např. obnovení stránky)
        e.preventDefault();
        // Získání hodnoty z prvního input prvku ve formuláři
        const { value } = e.target[0];
        
        // Odeslání POST požadavku na server s uživatelským jménem
        axios.post(
            'http://localhost:3001/authenticate', // URL serveru
            { username: value } // Data odeslaná na server
        )
        // Pokud je požadavek úspěšný, zavolej funkci onAuth s odpovědí ze serveru a uživatelským jménem
        .then(r => props.onAuth({ ...r.data, secret: value }))
        // Pokud dojde k chybě, vypiš ji do konzole
        .catch(e => console.log('error', e))
    };

    // JSX pro vykreslení formuláře
    return (
        <div className="background">
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">Welcome 👋</div>
                <div className="form-subtitle">Set a username to get started</div>
                <div className="auth">
                    <div className="auth-label">Username</div>
                    <input className="auth-input" name="username" />
                    <button className="auth-button" type="submit">
                        Enter
                    </button>
                </div>
            </form>
        </div>
    );
};

// Export komponenty AuthPage jako výchozí export
export default AuthPage;
