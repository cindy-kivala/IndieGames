import {useParams} from "react-router-dom"
function GameCard({games}){
    const {id}= useParams()
    if (!games || games.length === 0) return <p>Loading...</p>;
    const game=games.find((g)=>g.id ===parseInt(id));
    if(!game) return <p>Game not found!</p>
    return(
        <div className="gamecard">
            <h3>{game.title}</h3>
            <img src={game.thumbnail} alt={game.title} />
            <p>Genre:{game.genre}</p>
            <p>Platform:{game.platform}</p>
            <p>Description:{game.short_description}</p>
        </div>
    )
}
export default GameCard