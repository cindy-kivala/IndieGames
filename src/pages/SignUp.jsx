import { useState } from "react";
import { useAuth } from "../components/Authentication";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  // State for user inputs and feedback
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
// Get signup function from auth context
  const { signup } = useAuth();
// to redirect after successful signup
  const navigate = useNavigate();
// handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // check password length before signup
    if (email && password.length >= 6) {
      const success = await signup(email, password);
      if (success) {
        // redirect to login page with success state
        navigate("/login", { state: { signupSuccess: true }});
      } else {
        setError("Signup failed. Email may already be in use.");
      }
    } else {
      setError("Password must be at least 6 characters.");
    }
  };

  return (
    <div className="auth-container">
      <h2>🚀 Create Your IndieGames Account</h2>

      <form onSubmit={handleSubmit}>
        
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password (min 6 chars):</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}
