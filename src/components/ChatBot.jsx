import React, { useState, useEffect, useRef } from 'react';
import Myimg from '../assets/picofme.png';
import Send from '../assets/Send.png';
import ChatBoticon from '../assets/message-bot.png';
import exit from '../assets/exit1.svg';
import refresh from '../assets/refresh1.svg';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBodyRef = useRef(null);

  const myFullname = 'Archa Vivek';
  const myDescription = `I’m Archa Vivek,after completing my secondary education i have given 
                        JEXPO exam and got selected in Siliguri Government College in Computer 
                        Science And Technology(CST)from 2020 to 2023 after this i have given JELET 
                        and got chance in B.tech in Guru Nanak Institute Of Technology in Computer 
                        Science And Engineering from 2023 till 2026. i love to solve DSA problem to
                        increase my problem-solving skills and i have been doing Full Stack Web 
                        Development and create few projects to nourish my development skills. 
                        My hobby is to play basketball, Listening Music's, Traveling, Playing 
                        digital games. ----a passionate web developer with expertise in React,
                        JavaScript, bootstrap, tailwind, Mongodb, Express.js, Node.js,firebase,
                        Git,Figma (for UI design).`;

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ sender: 'bot', text: `Yo, I'm ${myFullname}! What's up?` }]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleRefreshChat = () => {
    setMessages([{ sender: 'bot', text: `Yo, I'm ${myFullname}! What's up?` }]);
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: userInput }];
    setMessages(newMessages);
    setUserInput('');
    setIsTyping(true);

    const prompt = `
      You are Archa Vivek, a CSE student and web developer. Talk like you're chatting with a friend. Use a casual, enthusiastic tone with short sentences. Avoid formal or AI-like replies. Show your tech-savvy side and love for basketball, music, and gaming. Use details from this bio only when relevant: ${myDescription}. 
      Examples of your tone:
      - For skills: "Hey! I code in React and Node.js. Love solving DSA problems too. What's your thing?"
      - For hobbies: "Yo, I’m into basketball, music, and gaming. You play or jam to anything?"
      - For general: "What’s up? Let’s chat!"
      User message: ${userInput}.`;

    try {
      const response = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAbg635LpmnXTdPXOCl_kvlwWNVxtQCqck',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: prompt }],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const botReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Oops, something’s off. Try again?";

      setMessages([...newMessages, { sender: 'bot', text: botReply }]);
      setIsTyping(false);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setMessages([...newMessages, { sender: 'bot', text: "Yo, something broke. Try again?" }]);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-bubble" onClick={toggleChat} aria-label="Open chat">
        <img src={ChatBoticon} alt="Chatbot Icon" />
      </button>

      {isOpen && (
        <div className="chatbot-overlay">
          <div className="chatbot-header">
            <button className="chatbot-close" onClick={toggleChat} aria-label="Close chat">
              <img src={exit} alt="Close Chat" />
            </button>
            <div className="chatbot-header-content">
              <div className="chatbot-profile-pic">
                <img src={Myimg} alt="Profile Picture" />
              </div>
              <span>Chat with Me</span>
            </div>
            <button className="chatbot-refresh" onClick={handleRefreshChat} aria-label="Start new chat">
              <img src={refresh} alt="Refresh Chat" />
            </button>
          </div>
          <div className="chatbot-body" ref={chatBodyRef}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chatbot-message ${
                  message.sender === 'user' ? 'chatbot-message-user' : 'chatbot-message-bot'
                }`}
              >
                <span className="chatbot-message-label">
                  {message.sender === 'user' ? 'You:' : 'Archa:'}
                </span>
                <div className="chatbot-message-content">
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="chatbot-message chatbot-message-bot">
                <span className="chatbot-message-label">Archa:</span>
                <div className="chatbot-message-content typing-indicator">
                  <span>typing</span>
                  <span className="dot dot1">.</span>
                  <span className="dot dot2">.</span>
                  <span className="dot dot3">.</span>
                </div>
              </div>
            )}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Message"
              aria-label="Type your message"
            />
            <button onClick={handleSendMessage} aria-label="Send message">
              <img src={Send} alt="Send Message" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;