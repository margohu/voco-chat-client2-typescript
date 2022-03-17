import React from 'react';
import ChatCard from "../chatCard/ChatCard";
import data from '../../data.json';



function Chat() {
    return (
        <div className="container">
            {data.map((item) => {
                return(<ChatCard
                    message={item.message}
                    author={item.username}
                    date={item.date} />)
            })}
        </div>
    );
}

export default Chat;