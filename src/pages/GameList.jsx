import React from "react";
import GameCard from "../components/GameCard";

function GameList({ games }) {
  const API_URL = import.meta.env.VITE_API_URL;
  const handleAddFavorite = (game) => {
    fetch(`${API_URL}/favorites`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(game),
    });
  };

  return (
    <div className="games-grid">
      {games.length === 0 ? (
        <p>No games found.</p>
      ) : (
        games.map((game) => (
          <GameCard key={game.id} game={game} onAddFavorite={handleAddFavorite} />
        ))
      )}
    </div>
  );
}

export default GameList;
