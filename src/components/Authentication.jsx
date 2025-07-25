import { createContext, useContext, useState, useEffect } from "react";

// Create auth context
export const AuthContext = createContext();

// Provider component that wraps the app and provides auth values
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);   // Current user object
  const [token, setToken] = useState(null); // Simulated token

  // Load user from localStorage on app start
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  // Login: check if email and password match in JSON server
  const login = async (email, password) => {
    try {
      const cleanedEmail = email.trim().toLowerCase();
      const res = await fetch(`http://localhost:3001/users?email=${cleanedEmail}`);
      const users = await res.json();
      const user = users[0];

      if (user && user.password === password) {
        setUser(user);
        setToken("mock-token");
        localStorage.setItem("token", "mock-token");
        localStorage.setItem("user", JSON.stringify(user));
        return true;
      }

      return false;
    } catch (err) {
      console.error("Login error:", err.message);
      return false;
    }
  };

  // Signup: create new user if email is not taken
  const signup = async (email, password) => {
    try {
      const cleanedEmail = email.trim().toLowerCase();

      // Check if user already exists
      const res = await fetch(`http://localhost:3001/users?email=${cleanedEmail}`);
      const data = await res.json();
      if (data.length > 0) return false;

      // Create new user
      const response = await fetch(`http://localhost:3001/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: cleanedEmail, password }),
      });

      if (!response.ok) throw new Error("Signup failed");

      await response.json(); // Don't setUser here
      return true;
    } catch (err) {
      console.error("Signup error:", err);
      return false;
    }
  };

  // Logout: clear user and token from state and localStorage
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

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
