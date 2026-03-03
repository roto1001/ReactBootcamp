import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import './App.css'

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [chatMessages, setChatMessages] = useState([]);

    return (
        <div className="app-container">
            <div className="welcomeMessage">{(chatMessages.length === 0) ?
                "Welcome to the chatbot project! Send a message using the textbox below." : ""}</div>
            <ChatMessages
                chatMessages={chatMessages}
                isLoading={isLoading}
            />
            <ChatInput
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
                setIsLoading={setIsLoading}
                isLoading={isLoading}
            />
        </div>
    );
}

export default App
