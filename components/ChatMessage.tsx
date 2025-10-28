
import React from 'react';
import { ChatMessage as ChatMessageType } from '../types';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  const bubbleClasses = isUser
    ? 'bg-blue-500 text-white self-end rounded-br-none'
    : 'bg-white text-gray-800 self-start rounded-bl-none';
  const containerClasses = isUser ? 'justify-end' : 'justify-start';

  // Basic markdown to HTML conversion for bold and newlines
  const formatText = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br />');
  };

  return (
    <div className={`flex ${containerClasses}`}>
      <div className={`rounded-xl p-4 max-w-lg lg:max-w-2xl shadow-md ${bubbleClasses}`}>
        <p className="text-sm" dangerouslySetInnerHTML={{ __html: formatText(message.text) }} />
      </div>
    </div>
  );
};

export default ChatMessage;
