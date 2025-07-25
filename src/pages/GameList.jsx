import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

function GameList() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/games`)
            .then(res => res.json())
            .then(data => setGames(data));
    }, []);

    return (
        <div className="List">
            <h1>Welcome to IndieGames</h1>
            {games.map((game, index) => (
                <div key={index} className="game-card">
                    <div className="row">
                        <div className="col">
                           
                            <Link to={`/game/${game.id}`}
                                    state={{game}}>
                                <h3>{game.title}</h3>
                                <img width="100" src={game.thumbnail} alt={game.title} />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GameList;
