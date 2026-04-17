import React, { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
}; //user -> you, assistant -> AI

function App() {
  const [messages, setMessages] = useState<Message[]>([]); //Stores chat history
  const [input, setInput] = useState(""); //Stores what user is typing in input box
  const [loading, setLoading] = useState(false); //“Thinking...” while AI responds

  const handleSend = async () => {
    if (!input) return;
    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    // const res = await fetch("http://localhost:5000/chat", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ messages: newMessages }),
    // });
    // const data = await res.json();
    const data = {
      reply: "Hi",
    };
    const assistantMessage: Message = {
      role: "assistant",
      content: data.reply,
    };
    setMessages((prev) => [...prev, assistantMessage]);
    setLoading(false);
  };

  return (
    <div className="app-container">
  <h2>AI Interview Assistant</h2>

  <div className="app-chat-area">
    {messages.map((message, i) => (
      <div key={i}>
        <b>{message.role}:</b> {message.content}
      </div>
    ))}
    {loading && <p>Thinking...</p>}
  </div>

  <div className="input-area">
    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Start interview..."
    />
    <button onClick={handleSend}>Send</button>
  </div>
</div>
  );
}

export default App;
