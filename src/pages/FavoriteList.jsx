//User's saved games founnd here
import React, { useState, useEffect } from 'react';
//consider whether to add css here or wait for collective styling session
//import "./FavoriteList.css"

//set up our state
function FavoriteList() {
    //we want to store the list of fave games
    const [favorites, setFavorites] = useState([]);

    //2. Fetch data from backend when components mond
    //ENSURE BACKEND IS WORKING CORRECTLY
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/favorites`)
           .then((response) => {
            if (!response.ok) throw new Error("Failed to fetch")
             return response.json();
           }) 
           //unwrap
           .then((data) => {
            if (Array.isArray(data)) {
                //if data is an array, set it to favorites
            setFavorites(data);
            }
            else {
                //if data is not an array, log an error
                console.error("Expected an array of favorites, but got:", data);
                setFavorites([]);//our fallback code
            }
           })
           //catch any errors
           .catch((error) => {
            console.error("Ooops! Failed to fetch your favorites", error);
            setFavorites([]); // another fallback code
           });
    }, []);

    //what if we want to delete a favorite?
    //we could add a delete button to each game card
    //and then handle the delete request in the backend
    //HANDLE DELETE REQUEST

    function handleDelete(id) {
        fetch(`${import.meta.env.VITE_API_URL}/favorites/${id}`, {
            method: "DELETE",
        })
        .then(() => {
            //filter out the deleted game from the favorites list + UI
             const updatedFavorites = favorites.filter((game) => game.id !== id);
             setFavorites(updatedFavorites);
        })
        //in case of an error
        .catch((error) => console.error("Oops! Failed to delete fave game", error));
    }

    //What if the list in empty?
    if (favorites.length === 0) {
        return (
            <div className='favorite-list'>
                <h2>
                    My Favorite Games
                </h2>
                <p>
                    No favorite games yet.
                </p>
            </div>
        );
    }

    //If we have favorites, we want to display them
    return (
        <div className='favorite-list'>
            <h2>My Favorite Games</h2>
            <div className="favorite-list-container">
                {favorites.map((game) => (
                        <div key={game.id} className="favorite-game-card">
                            <img src={game.thumbnail}  alt={game.title} />
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

//CONFIRM IF I'LL KEEP PLATFORM AND RELEASE DATE
//FIGURE OUT HOW OIR DISPLAY WILL LOOK
//This component fetches the user's favorite games from the backend and displays them in a list format
//Each game is displayed with its thumbnail, title, genre, platform, and release date
//If there are no favorite games, a message is displayed indicating that there are no favorites yet
//The component uses the useState and useEffect hooks to manage state and side effects respectively
//The useEffect hook fetches the data from the backend when the component mounts and updates the state with the fetched data
//The component also handles any errors that may occur during the fetch operation   