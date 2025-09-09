import { useEffect, useState } from "react";
import api from "./api.js";

function App() {
  const [message, setMessage] = useState("");
   useEffect(() => {
    const handlebackend = async () => {
      try {
        const res = await api.get("/api/hello");
        setMessage(res.data.message); // ✅ axios response inside `data`
      } catch (error) {
        console.error("Error:", error);
      }
    };

    handlebackend();
  }, []); // ✅ runs only once when component mounts

  return (
    <div>
      <h1>React Frontend</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;
