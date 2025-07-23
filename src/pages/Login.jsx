import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/Authentication";

export default function Login() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const success = await login(email, password); 
    if (success) {
      navigate("/games"); 
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login to IndieGamesApp ⚔️</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
