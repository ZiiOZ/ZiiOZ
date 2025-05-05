import { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const BASE = import.meta.env.VITE_API_BASE_URL;
    fetch(`${BASE}/api/hello`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error("API fetch failed:", err);
        setMessage("Error connecting to backend.");
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>✅ ZiiOZ Frontend is Working!</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}
