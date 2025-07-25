//User's saved games found here
import React, { useState, useEffect } from 'react';

//set up our state
function FavoriteList() {
  const [favorites, setFavorites] = useState([]);

  // Fetch data from backend when component mounts
  useEffect(() => {
    fetch("http://localhost:3001/favorites")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch");
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setFavorites(data);
        } else {
          console.error("Expected an array of favorites, but got:", data);
          setFavorites([]); // fallback
        }
      })
      .catch((error) => {
        console.error("Oops! Failed to fetch your favorites", error);
        setFavorites([]); // fallback
      });
  }, []);

  // Delete favorite by id
  function handleDelete(id) {
    fetch(`http://localhost:3001/favorites/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const updatedFavorites = favorites.filter((game) => game.id !== id);
        setFavorites(updatedFavorites);
      })
      .catch((error) =>
        console.error("Oops! Failed to delete favorite game", error)
      );
  }

  // If list is empty
  if (favorites.length === 0) {
    return (
      <div className="favorite-list">
        <h2>My Favorite Games</h2>
        <p>No favorite games yet.</p>
      </div>
    );
  }

  // If we have favorites, display them
  return (
    <div className="favorite-list-container">
      <h2>My Favorite Games</h2>
      <div className="favorite-list-grid">
        {favorites.map((game) => (
          <div key={game.id} className="favorite-game-card">
            <img src={game.thumbnail} alt={game.title} />
            <h3>{game.title}</h3>
            <p>{game.genre}</p>
            <p>{game.platform}</p>
            <p>{game.release_date}</p>
            <button onClick={() => handleDelete(game.id)} className="RemoveBtn">
              Remove from Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteList;
