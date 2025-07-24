import React from "react";
import GameCard from "../components/GameCard";
import { Link } from "react-router-dom";

function GameList({games}){
    if (!games || games.length === 0) return <p>Loading games...</p>;
    return(
        <div>
            {games.map((game)=>(<div key={game.id}>
                <Link to={`/game/${game.id}`}><h4>{game.title}</h4></Link>
            </div>))}
        </div>
    )
}
export default GameList