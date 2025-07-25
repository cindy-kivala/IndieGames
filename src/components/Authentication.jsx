import { createContext, useContext, useState } from "react";

// Create auth context
export const AuthContext = createContext();

// Provider component that wraps the app and provides auth values
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);   // Current user object
  const [token, setToken] = useState(null); // Simulated token

  // check if email and password match in JSON server
  const login = async (email, password) => {
    try {
      const cleanedEmail = email.trim().toLowerCase(); // Sanitize email
      const res = await fetch(`http://localhost:3001/users?email=${cleanedEmail}`);
      const users = await res.json();
      const user = users[0]; // Check if user exists

      if (user && user.password === password) {
        setUser(user);                 // Set user state
        setToken("mock-token");        // Set mock token
        localStorage.setItem("token", "mock-token"); // Save token to localStorage
        localStorage.setItem("user", JSON.stringify(user)); // Save user

        return true; // Login successful
      }

      return false; // Login failed
    } catch (err) {
      console.error("Login error:", err.message);
      return false;
    }
  };

  // create new user if email is not taken
  const signup = async (email, password) => {
    try {
      const cleanedEmail = email.trim().toLowerCase();

      // Check if user already exists
      const res = await fetch(`http://localhost:3001/users?email=${cleanedEmail}`);
      const data = await res.json();
      if (data.length > 0) return false; // Email already in use

      // Create new user
      const response = await fetch(`http://localhost:3001/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: cleanedEmail, password }),
      });

      if (!response.ok) throw new Error("Signup failed");

      const newUser = await response.json();
      setUser(newUser); // Set the new user
      return true;
    } catch (err) {
      console.error("Signup error:", err);
      return false;
    }
  };

  // clear user and token from state and storage
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  // Provide values to components that consume this context
  return (
    <AuthContext.Provider value={{ user, token, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook to use the auth context
export function useAuth() {
  return useContext(AuthContext);
}
