import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import shared layout and page components
import Navbar from "./components/Navbar";
import GameList from "./pages/GameList";
import GameCard from "./components/GameCard"; // assuming GameCard is a component
import FavoriteList from "./pages/FavoriteList";
import AddFavoriteForm from "./pages/AddFavoriteForm";
import Login from "./pages/Login"; // or components/Authentication

function App() {
  return (
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
          <Route path="/game/:id" element={<GameCard />} />
          {/* Add fallback route */}
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </div>
<<<<<<< HEAD
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <h1>PRRROOOJJEECCCTTT11111</h1>

    </>
  )
=======
    </Router>
  );
>>>>>>> 4a54e49568403cc779e2b9d7e313dbf04d671585
}

export default App;
