import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<{ user: string; bot: string }[]>([]);
  const [loading, setLoading] = useState(false);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = message;
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      setChat([...chat, { user: userMessage, bot: data.reply }]);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">🌍 AI Travel Buddy</h1>
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-4 space-y-3">
        {chat.map((c, i) => (
          <div key={i} className="border-b pb-2">
            <p><strong>You:</strong> {c.user}</p>
            <p><strong>AI:</strong> {c.bot}</p>
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage} className="flex mt-4 w-full max-w-lg">
        <input
          className="flex-grow border rounded-l-md px-3 py-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask about your trip..."
        />
        <button
          className="bg-blue-500 text-white px-4 rounded-r-md"
          type="submit"
          disabled={loading}
        >
          {loading ? "..." : "Send"}
        </button>
      </form>
    </div>
  );
}
