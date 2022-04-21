import React, {useEffect} from 'react';
import {useState} from "react";
import ChatCard from "../chatCard/ChatCard";
import data from '../../data.json';



function Chat() {
    const [messages, setMessages] = useState('');

    useEffect(() => {
        setMessages(data);
    }, []);

    return (
        <div className="container">
            {messages.map((item) => {
                return(<ChatCard
                    message={item.message}
                    author={item.username}
                    date={item.date} />)
            })}
        </div>
    );
}

export default Chat;