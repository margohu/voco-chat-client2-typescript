import React, { useEffect } from 'react';
import './App.css';
import Chats from "./components/chat/Chat";
import { disconnectSocket, connectToServer } from './socket-service';

function App() {
    useEffect(() => {
        connectToServer()
        .then((message:any) => {
            console.log(message);
        });
        return () => {
            disconnectSocket();
        }
    }, []);

    return (
        <div class="chat-conteiner">
            <Chat />
        <div/>
        <div className="btn-container">
            <input placeholder="Autor"/>
            <input placeholder="Sõnum"/>
            <input placeholder="Saada"/>
            <button className='buttonSend'>Saada</button>
        </div>
    </div>
    );
}

export default App;
