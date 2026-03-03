import { Chatbot } from 'supersimpledev'
import { useState } from 'react'
import './ChatInput.css';
import dayjs from "dayjs";

export function ChatInput({ chatMessages, setChatMessages, setIsLoading, isLoading}) {
    const [inputText, setInputText] = useState('');

    function saveInputText(event) {
        setInputText(event.target.value);
    }

    async function sendMessage() {
        if (isLoading || inputText.trim() === '') return;

        let time = dayjs().valueOf();
        let timeStamp = dayjs(time).format('h:mma')

        const newChatMessages = [
            ...chatMessages,
            {
                message: inputText,
                sender: 'user',
                timeStamp: timeStamp,
                id: crypto.randomUUID(),
            }
        ]

        setChatMessages(newChatMessages);
        setIsLoading(true);

        const response = await Chatbot.getResponseAsync(inputText);

        time = dayjs().valueOf();
        timeStamp = dayjs(time).format('h:mma')

        setChatMessages([
            ...newChatMessages,
            {
                message: response,
                sender: 'robot',
                timeStamp: timeStamp,
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

    function clearMessages() {
        localStorage.setItem('messages', JSON.stringify([]));
        setChatMessages([]);
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
            <button className="clear-button" onClick={clearMessages}>
                Clear
            </button>
        </div>
    );
}