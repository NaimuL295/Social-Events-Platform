import { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function ChatSection() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatLog, loading]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = { sender: "user", text: message };
    setChatLog((prev) => [...prev, userMessage]);
    setMessage("");
    setLoading(true);

    
    try {
      const response = await axios.post("https://social-events-platform-server-site.vercel.app/chat", { message });
      const aiMessage = { sender: "ai", text: response.data.reply };
      setChatLog((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage = { sender: "ai", text: "Error contacting server." };
      setChatLog((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };
return (
  <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-[90%] sm:w-80 z-50 font-sans">
    {/* Toggle Button */}
    <button
      onClick={() => setOpen(!open)}
      className="flex items-center justify-center space-x-2 p-3 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl bg-green-500 text-white w-full sm:w-auto"
    >
      <span className="font-semibold">{open ? "Close" : "Chat"}</span>
    </button>

    {/* Chat Box */}
    {open && (
      <div className="bg-gray-900 text-gray-100 shadow-2xl rounded-xl flex flex-col p-4 mt-2 w-full sm:w-80">
        {/* Messages */}
        <div className="h-64 overflow-y-auto flex flex-col space-y-3 pb-2">
          {chatLog.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-[75%] break-words ${
                msg.sender === "user"
                  ? "self-end bg-green-700 text-white"
                  : "self-start bg-gray-800 text-gray-100"
              } shadow-sm`}
            >
              {msg.text}
            </div>
          ))}
          {loading && (
            <div className="text-gray-400 italic self-start animate-pulse">...</div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="flex space-x-2 mt-3">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border border-gray-700 bg-gray-800 text-gray-100 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200"
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-green-700 hover:bg-green-600 text-white p-3 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
          >
            Send
          </button>
        </div>
      </div>
    )}
  </div>
);



}
