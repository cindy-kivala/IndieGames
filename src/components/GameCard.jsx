import React from "react";

function GameCard({ game, onAddFavorite }) {
  const handleAdd = () => {
    onAddFavorite(game);
  };

  return (
    <div className="game-card">
      <img src={game.thumbnail} alt={game.title} className="game-image" />
      <h3>{game.title}</h3>
      <p>{game.genre}</p>

      <button onClick={handleAdd} className="add-button">
        ⭐ Add to Favorites
      </button>
    </div>
  );
}

export default GameCard;
