import { useRef, useEffect } from "react";
import { ChatMessage } from './ChatMessage'
import './ChatMessages.css'

function ChatMessages({ chatMessages, isLoading }) {

    const chatMessagesRef = useRef(null);

    useEffect(() => {
        const containerElem = chatMessagesRef.current;
        if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
        }
    }, [chatMessages]);

    return (
        <div
            className="chat-messages-container"
            ref={chatMessagesRef}
        >
            {chatMessages.map((chatMessage) => {
                return (
                    <ChatMessage
                        sender={chatMessage.sender}
                        message={chatMessage.message}
                        key = {chatMessage.id}
                        isLoading={isLoading}
                    />
                );
            })
            }
        </div>
    );
}

export default ChatMessages;