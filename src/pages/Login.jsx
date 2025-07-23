import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useAuth } from "../components/Authentication";

export default function Login() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const location = useLocation();
  const signupSuccess = location.state?.signupSuccess;

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
    <div className="auth-container">
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
        {signupSuccess && <p style={{ color: "green" }}>Signup successful! Please log in.</p>}

        <button type="submit">Login</button>
      </form>

      <p>
        Don’t have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}
