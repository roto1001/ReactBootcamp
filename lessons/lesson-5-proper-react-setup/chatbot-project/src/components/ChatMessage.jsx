import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import './ChatMessage.css'

export function ChatMessage(props) {
    const { message, sender, isLoading } = props;
    return (
        <>
            {(isLoading) &&
                <div className="chat-message-robot">
                    <img src={RobotProfileImage} className="chat-message-profile" alt="image"/>
                    <img src="https://supersimple.dev/images/loading-spinner.gif" className="loadingSpinner" alt="image"/>
                </div>
            }

            <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}>
                {(sender === 'robot') &&
                    <img src={RobotProfileImage} className="chat-message-profile"  alt="image"/>
                }

                <div className="chat-message-text">
                    {message}
                </div>

                {(sender === 'user') &&
                    (<img src={UserProfileImage} className="chat-message-profile" />
                    )}
            </div>
        </>
    );
}