// import necessary hooks and utilities from React and React Router
import { useState } from "react";
import { useAuth } from "../components/Authentication"; // Custom hook for auth context
import { useNavigate, Link } from "react-router-dom";   // Navigation and linking

// define the Signup component
export default function Signup() {
  // Local state for storing form input values and error message
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Access signup function from authentication context
  const { signup } = useAuth();

  // hook to navigate to another route
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Validate input: email must exist, password must be 6+ characters
    if (email && password.length >= 6) {
      // Call signup function
      const success = await signup(email, password);
      
      if (success) {
        // if signup succeeds redirect to login page with success message
        navigate("/login", { state: { signupSuccess: true } });
      } else {
        // if signup fails show an error
        setError("Signup failed. Email may already be in use.");
      }
    } else {
      // if validation fails show an error
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
          onChange={(e) => setEmail(e.target.value)} // Update state on change
          required
        />

       
        <label>Password (min 6 chars):</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update state on change
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
