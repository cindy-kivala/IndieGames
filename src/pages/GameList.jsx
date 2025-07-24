import React from "react";
import GameCard from "../components/GameCard";

function GameList({games}){
    return(
        <div>
            {games.map((game)=>(<div key={game.id}>
                <Link to={`/game/${game.id}`}><h4>{game.title}</h4></Link>
            </div>))}
        </div>
    )
}
export default GameList