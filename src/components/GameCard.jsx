function GameCard({game}){
    return(
        <div className="gamecard">
            <h3>{game.title}</h3>
            <img>{game.thumbnail}</img>
            <p>Genre:{game.genre}</p>
            <p>Platform:{game.plartform}</p>
            <p>Description:{game.short_description}</p>

            
        </div>
    )
}
export default GameCard