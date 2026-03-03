import { Chatbot } from 'supersimpledev'
import { useState } from 'react'
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages, setIsLoading, isLoading}) {
    const [inputText, setInputText] = useState('');

    function saveInputText(event) {
        setInputText(event.target.value);
    }

    async function sendMessage() {
        if (isLoading || inputText.trim() === '') return;

        const newChatMessages = [
            ...chatMessages,
            {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID(),
            }
        ]

        setChatMessages(newChatMessages);
        setIsLoading(true);

        const response = await Chatbot.getResponseAsync(inputText);
        setChatMessages([
            ...newChatMessages,
            {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID(),
            }
        ]);

        setInputText('');
        setIsLoading(false);
    }

    function eventKeyPressed(event) {
        event.key === 'Enter' && sendMessage();
        event.key === 'Escape' && setInputText('');
    }

    return (
        <div className="input-container">
            <input
                placeholder="Send a message to Chatbot"
                size="30"
                onChange={saveInputText}
                value={inputText}
                onKeyDown={eventKeyPressed}
                className="chat-input"
            />
            <button className="send-button" onClick={sendMessage} disabled={isLoading || inputText.trim() === ''}>
                Send
            </button>
        </div>
    );
}