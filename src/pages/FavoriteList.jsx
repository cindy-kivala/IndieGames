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
    useEffect(function() {
        fetch("http://localhost:3001/favorites")
           .then(function (response) {
             return response.json();
           }) 
           //unwrap
           .then(function (data) {
            setFavorites(data);
           })
           //catch any errors
           .catch(function (error) {
            console.error("Ooops! Failed to fetch your favorites", error);
           });
    }, []);

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
}