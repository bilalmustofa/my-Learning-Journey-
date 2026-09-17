// import { Bot } from 'lucide-react';
import ChatMessage from '../ChatMessage/ChatMessage.jsx';
import styles from './MessageList.module.css';

function MessageList({ conversations}) {
  return (
    <>
      <div className={styles.messages}>
        {conversations.length === 0 ? (
         <div className={styles.empty}>What are you working on?</div>
       ) : (
         conversations.map(msg => (
           <ChatMessage key={msg.id} role={msg.role} content={msg.content} />
         ))
       )}
      </div>
    </>
  )
}

export default MessageList
