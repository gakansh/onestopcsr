import React, { useState } from 'react';
import './Chatbot.css';
import { OpenAI } from 'openai';


console.log("Rendering Chatbot Component");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY ,
    dangerouslyAllowBrowser: true,
});



console.log("OpenAI Initialized:", openai);

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');

    // Check if the component is rendering
    console.log("Chatbot Component Mounted");

    // Handle user input submission
    const handleSend = async () => {
        if (!userInput) return;

        const newMessages = [...messages, { sender: 'user', text: userInput }];
        setMessages(newMessages);
        setUserInput('');

        try {
            const response = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: userInput }],
                max_tokens: 100,
                temperature: 0.7,
            });

            const botMessage = response.choices[0].message.content.trim();
            setMessages([...newMessages, { sender: 'bot', text: botMessage }]);
        } catch (error) {
            console.error('Error fetching response:', error);
        }
    };

    return (
        <div className="chatbot-container">
            <div className={`chatbot-icon ${isOpen ? 'hidden' : ''}`} onClick={() => setIsOpen(true)}>
                💬
            </div>

            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <h2>OneStop CSR Chatbot</h2>
                        <button className="close-button" onClick={() => setIsOpen(false)}>✖</button>
                    </div>
                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={msg.sender === 'user' ? 'user-message' : 'bot-message'}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="chat-input">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Type your message..."
                        />
                        <button onClick={handleSend}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
