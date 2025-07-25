import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import GameList from "./pages/GameList";
import GameCard from "./components/GameCard";
import FavoriteList from "./pages/FavoriteList";
import AddFavoriteForm from "./pages/AddFavoriteForm";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { AuthProvider, useAuth } from "./components/Authentication";

// Split content out so hooks can be used
function AppContent() {
  const { user } = useAuth();
  const location = useLocation();

  // define routes where the navbar should not be shown
  const hideNavbarRoutes = ["/", "/signup", "/login"];
  const shouldShowNavbar = user && !hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="app">
      {shouldShowNavbar && <Navbar />}

      <Routes>
       
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/games" element={<GameList />} />
        <Route path="/favorites" element={<FavoriteList />} />
        <Route path="/add" element={<AddFavoriteForm />} />
        <Route path="/game/:id" element={<GameCard />} />

        {/* Catch-all route */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
