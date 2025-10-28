
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex items-center space-x-3">
       <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
         </svg>
       </div>
       <div>
         <h1 className="text-xl font-bold text-gray-800">MediBot AI</h1>
         <p className="text-sm text-gray-500">Your Personal Health Information Assistant</p>
       </div>
    </header>
  );
};

export default Header;
