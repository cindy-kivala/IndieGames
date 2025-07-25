import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { AuthProvider, useAuth } from "./components/Authentication";
import Navbar from "./components/Navbar"; // Assuming you have this

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

// Separated out so we can use hooks like useLocation and useAuth
function AppContent() {
  const location = useLocation();
  const { user } = useAuth();

  //paths where we hide the navbar
  const hideNavbarRoutes = ["/login", "/signup", "/"];

  const showNavbar = user && !hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="app">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* Add other authenticated routes here */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
