import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useAuth } from "../components/Authentication";

export default function Login() {
  // State for form fields and feedback
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
// Access login function from auth context
  const { login } = useAuth();
// For redirecting user after login
  const navigate = useNavigate();
// To check if redirected from signup page
  const location = useLocation();
  const signupSuccess = location.state?.signupSuccess;

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Attempt login
    const success = await login(email, password); 
    if (success) {
      navigate("/games"); // redirect to games 
    } else {
      setError("Invalid email or password."); // Show error on failure
    }
  };

  return (
    <div className="auth-container">
      <h2>🛸 IndieGamesApp Login</h2>

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
