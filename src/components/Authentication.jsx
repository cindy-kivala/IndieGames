import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  
const login = async (email, password) => {
  try {
    const res = await fetch(`http://localhost:3001/users?email=${email}`);
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


  
    const signup = async (email, password) => {
    try {
      const res = await fetch(`http://localhost:3001/users?email=${email}`);
      const data = await res.json();

      if (data.length > 0) {
        
        return false;
      }

      const response = await fetch(`http://localhost:3001/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Signup failed");

      const newUser = await response.json();
      setUser(newUser);
      return true;
    } catch (err) {
      console.error("Signup error:", err);
      return false;
    }
  };

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

export function useAuth() {
  return useContext(AuthContext);
}
