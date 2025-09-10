
import React, { useState, useCallback } from 'react';

const MESSAGES = ["fuck you Emon", "fuck you"];

const App: React.FC = () => {
  const [message, setMessage] = useState<string>(MESSAGES[0]);

  const handleClick = useCallback(() => {
    setMessage(prevMessage => {
      const remainingMessages = MESSAGES.filter(msg => msg !== prevMessage);
      const nextMessage = remainingMessages[Math.floor(Math.random() * remainingMessages.length)];
      return nextMessage || MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
    });
  }, []);

  return (
    <div
      onClick={handleClick}
      className="min-h-screen bg-black flex items-center justify-center text-white cursor-pointer select-none overflow-hidden"
    >
      <h1
        key={message}
        className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-center p-4 text-red-600 animate-fade-in"
      >
        {message}
      </h1>
    </div>
  );
};

export default App;
