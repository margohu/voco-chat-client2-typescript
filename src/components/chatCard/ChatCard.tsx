import React from 'react';
interface ChatProps {
    message: string;
    author: string;
    date: string;
}

function ChatCard({message, author, date}:ChatProps) {
    return (
        <div>
            <div className ="ipsum">
                <p>
                    {message}
                </p>
                <p>
                    {author}
                </p>
                <p>
                    {date}
                </p>
        </div>
        </div>
    );
}

export default ChatCard;