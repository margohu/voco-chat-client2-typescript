import React from 'react';
import './App.css';
import Chat from "./components/chat/Chat";
import Heading from "./components/chat/Heading";
import ChatCard from "./components/chatCard/ChatCard";

function App() {
    return (
        <div className="App">
            <Heading/>
            <form>
            <Chat/>


            </form>
        </div>
    );
}

export default App;
