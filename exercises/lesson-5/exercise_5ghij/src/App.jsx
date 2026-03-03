import {useEffect, useState} from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import { Chatbot } from "supersimpledev";
import './App.css'

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);

    useEffect(() => {
        const messageResponseMap = {
            'Hello chatbot': 'Hallo Du Penis',
            'Waaad uuuuup?': 'Waaaaaaaaaaaz uup',
        };
        Chatbot.addResponses(messageResponseMap);
    }, []);

    useEffect(() => {
        localStorage.setItem('messages', JSON.stringify(chatMessages));
    }, [chatMessages]);

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
