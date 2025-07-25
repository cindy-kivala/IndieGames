import React from "react";
import { useLocation } from "react-router-dom";

function GameDetail() {
  const { state } = useLocation();
  const game = state?.game;

  if (!game) return <p>Loading...</p>;

  return (
    <div className="game-detail">
      <h2>{game.title}</h2>
      <img src={game.thumbnail} alt={game.title} />
      <p>Genre: {game.genre}</p>
      <p>Platform: {game.platform}</p>
      <p>Rating: {game.rating}</p>
    </div>
  );
}

export default GameDetail;
