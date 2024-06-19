// Import potřebných komponent a hooků z knihovny 'react-chat-engine-advanced'
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

// Komponenta ChatsPage
const ChatsPage = (props) => {
    // Použití hooku useMultiChatLogic k inicializaci logiky chatu
    const chatProps = useMultiChatLogic(
        '568f630c-8e13-4709-b23a-1e352c5c0b37', // Projektový ID pro chat
        props.user.username, // Uživatelské jméno uživatele
        props.user.secret // Heslo nebo tajný klíč uživatele
    );

    // JSX pro vykreslení chatovací stránky
    return (
        <div style={{ height: '100vh' }}> {/* Kontejner s výškou 100% výšky obrazovky */}
            <MultiChatSocket {...chatProps} /> {/* Socket pro připojení k chatu */}
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} /> {/* Okno chatu s výškou 100% kontejneru */}
        </div>
    )
}

// Export komponenty ChatsPage jako výchozí export
export default ChatsPage
