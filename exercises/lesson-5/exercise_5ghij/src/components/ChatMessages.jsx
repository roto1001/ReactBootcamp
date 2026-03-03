import { useRef, useEffect } from "react";
import { ChatMessage } from './ChatMessage'
import RobotProfileImage from '../assets/robot.png'
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
                            timeStamp={chatMessage.timeStamp}
                            key={chatMessage.id}
                        />
                );
            })
            }
            {(isLoading) &&
                <div className="chat-message-robot">
                    <img src={RobotProfileImage} className="chat-message-profile" alt="image"/>
                    <img src="https://supersimple.dev/images/loading-spinner.gif" className="loadingSpinner" alt="image"/>
                </div>}
        </div>
    );
}

export default ChatMessages;
