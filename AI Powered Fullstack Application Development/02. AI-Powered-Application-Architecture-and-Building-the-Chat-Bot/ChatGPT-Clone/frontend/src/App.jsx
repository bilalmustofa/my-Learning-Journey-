import { useState, useEffect, useRef } from "react";
import "./App.css";
import Sidebar from "./components/SideBar/Sidebar.jsx";
import ChatHeader from "./components/ChatHeader/ChatHeader.jsx";
import MessageList from "./components/MessageList/MessageList.jsx";
import axios from "axios";
import ChatInput from "./components/ChatInput/ChatInput.jsx";

function App() {
  const API_BASE_URL = "http://localhost:3000/api";

  const [conversations, setConversations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // scroll to bottom function
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
      scrollToBottom();
    }, [conversations, isLoading]);
  
  
  // Get Request
  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const { data } = await axios.get(`${API_BASE_URL}/chat/conversations`);
        console.log(data.data)
        setConversations(data.data)
      } catch (error) {
        console.error("Error fetching conversations:", error);
      }
    };
    fetchConversations();
  }, []);

  // post Request
   const handleSendMessage = async (question) => {
    if(!question.trim()) {
      return;
    }

    const tempUserMessage = {
      id: Date.now(),
      role: 'user',
      content: question,
    };
    setConversations(prev => [...prev, tempUserMessage]);
    
    try {
      setIsLoading(true);
      const { data } = await axios.post(`${API_BASE_URL}/chat/conversations`, {
            question: question.trim(),
        });
        setConversations(prev => [...prev, data?.data?.assistantConversation]);
      } catch (error) {
          console.error('Error posting conversation:', error);
   } finally {
      setIsLoading(false);
   }
   }
  return (
    <>
      <div className="app">
        <Sidebar />

        <main className="chat">
          <ChatHeader />

          <MessageList conversations={conversations} isLoading={isLoading} messagesEndRef={messagesEndRef}/>

          <ChatInput handleSendMessage= {handleSendMessage}/>
        </main>
      </div>
    </>
  );
}

export default App;
