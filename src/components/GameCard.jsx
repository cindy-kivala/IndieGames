import React from "react";
import { useParams, useLocation } from "react-router-dom";

function GameCard() {
  const { id } = useParams();
  const { state} =useLocation()
  const game = state?.game

  if (!game) return <p>Loading</p>;

  return (
    <div className="gamecard">
      <h2>{game.title}</h2>
      <img src={game.thumbnail} alt={game.title} />
      <p>Genre: {game.genre}</p>
      <p>Platform: {game.platform}</p>
      <p>{game.short_description}</p>
    </div>
  );
}

export default GameCard;
