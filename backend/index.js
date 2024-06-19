// Importování potřebných knihoven
const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

// Inicializace aplikace Express
const app = express();

// Middleware pro parsování JSON těla požadavků
app.use(express.json());
// Middleware pro povolení Cross-Origin Resource Sharing (CORS)
app.use(cors({ origin: true }));

// Definice endpointu pro autentizaci
app.post("/authenticate", async (req, res) => {
    // Získání uživatelského jména z těla požadavku
    const { username } = req.body;

    try {
        // Odeslání PUT požadavku na API Chat Engine pro vytvoření nebo aktualizaci uživatele
        const r = await axios.put(
            'https://api.chatengine.io/users/', // URL API Chat Engine
            {
                username: username, // Uživatelské jméno
                secret: username,   // Tajný klíč (používá se stejné jako uživatelské jméno)
                first_name: username // Jméno (používá se stejné jako uživatelské jméno)
            },
            {
                headers: { "private-key": "779954d8-012e-403e-a544-a3ea98020ef4" } // Privátní klíč pro přístup k API
            }
        );

        // Pokud je požadavek úspěšný, vrátí se stavová kódová odpověď a data z API
        return res.status(r.status).json(r.data);
    } catch (e) {
        // Pokud dojde k chybě, vrátí se stavová kódová odpověď a data chyby
        return res.status(e.response.status).json(e.response.data);
    }
});

// Spuštění serveru na portu 3001
app.listen(3001);
