import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import GameList from "./pages/GameList";
import GameCard from "./components/GameCard";
import FavoriteList from "./pages/FavoriteList";
import AddFavoriteForm from "./pages/AddFavoriteForm";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { AuthProvider, useAuth } from "./components/Authentication";
import GameDetail from "./pages/GameDetails";

// Split content out so hooks can be used
function AppContent() {
  const { user } = useAuth();
  const location = useLocation();

  const hideNavbarRoutes = ["/", "/signup", "/login"];
  const shouldShowNavbar = user && !hideNavbarRoutes.includes(location.pathname);

  // 🔎 Game and search state
  const [games, setGames] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/games`)
      .then((res) => res.json())
      .then(setGames);
  }, []);

  const handleSearch = (query) => setSearchQuery(query);

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      {shouldShowNavbar && <Navbar onSearch={handleSearch} />}

      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* Pass filtered games to GameList */}
        <Route path="/games" element={<GameList games={filteredGames} />} />
        <Route path="/games/:id" element={<GameDetail />} />

        <Route path="/favorites" element={<FavoriteList />} />
        <Route path="/add-favorite" element={<AddFavoriteForm />} />
        <Route path="/game/:id" element={<GameCard />} />

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
