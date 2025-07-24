import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import GameCard from "./components/GameCard";
import { AuthProvider } from "./components/Authentication";

import GameList from "./pages/GameList";
import FavoriteList from "./pages/FavoriteList";
import AddFavoriteForm from "./pages/AddFavoriteForm";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (

    <AuthProvider>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<GameList />} />
            <Route path="/favorites" element={<FavoriteList />} />
            <Route path="/add" element={<AddFavoriteForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/game/:id" element={<GameCard />} />
            <Route path="*" element={<h2>404 - Page Not Found</h2>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>

  );
}

export default App;