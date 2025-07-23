import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import shared layout and page components
import Navbar from "./components/Navbar";
import GameList from "./pages/GameList";
import GameCard from "./components/GameCard"; // assuming GameCard is a component
import FavoriteList from "./pages/FavoriteList";
import AddFavoriteForm from "./pages/AddFavoriteForm";
import Login from "./pages/Login"; // or components/Authentication
import { AuthProvider } from "./components/Authentication";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          {/* Always visible */}
          <Navbar />

          {/* Route-based rendering */}
          <Routes>
            <Route path="/" element={<GameList />} />
            <Route path="/favorites" element={<FavoriteList />} />
            <Route path="/add" element={<AddFavoriteForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} /> {/* optional */}
            <Route path="/game/:id" element={<GameCard />} />
            <Route path="*" element={<h2>404 - Page Not Found</h2>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
