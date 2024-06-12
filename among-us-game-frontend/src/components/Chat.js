// src/components/Chat.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chat = ({ roomName }) => {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);

  useEffect(() => {
    const ws = new WebSocket(`ws://localhost:8000/ws/chat/${roomName}/`);

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setChatLog((prevChatLog) => [...prevChatLog, message]);
    };

    return () => {
      ws.close();
    };
  }, [roomName]);

  const handleMessageSend = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/chat/${roomName}/`,
        { message }
      );
      console.log(response.data);
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <h2>Chat</h2>
      <div>
        {chatLog.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleMessageSend}>Send</button>
    </div>
  );
};

export default Chat;
