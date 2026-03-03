import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/profile-1.jpg'
import './ChatMessage.css'

export function ChatMessage(props) {
    const { message, sender, timeStamp } = props;

    return (
        <>
            <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}>
                {(sender === 'robot') &&
                    <img src={RobotProfileImage} className="chat-message-profile"  alt="image"/>
                }

                <div className="chat-message-text">
                    {message}<br />
                    <div className="chat-message-time">{timeStamp}</div>
                </div>

                {(sender === 'user') &&
                    (<img src={UserProfileImage} className="chat-message-profile" />
                    )}

            </div>
        </>
    );
}