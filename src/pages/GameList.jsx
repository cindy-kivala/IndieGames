import React from "react";
import GameCard from "../components/GameCard";

function GameList({games}){
    return(
        <div>
            {games.map((game)=>(<GameCard key={game.id} game={game}/>))}
        </div>
    )
}
export default GameList