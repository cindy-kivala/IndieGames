import React from "react";
import GameCard from "../components/GameCard";

function GameList({ games }) {
  const handleAddFavorite = (game) => {
    fetch("http://localhost:3001/favorites", {
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
