//Component to allow user to add new favorite games
//Fetches list of favorite games list from local server and adds updates (POST)

import { useState, useEffect } from "react"



function AddFavouriteForm(){
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [thumbnail, setThumbnail] = useState("");

 //function to handle form submission
  const handleSubmit = (e)=> {
  e.preventDefault();

  const newGame ={
    title: title,
    genre: genre,
    thumbnail: thumbnail //image url from db.json
     }

     //Add updates (new fav game) to local server
      fetch(`{import.meta.env.VITE_APP_URL}/favorites`, {
      method:"POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newGame)
     })
     .then((res)=>res.json())
     .then((data)=>setFavorite(data)) //

    setTitle("");
    setGenre("");
    setThumbnail("");
    };

 

 
    return(
        <form id="Form" onSubmit={handleSubmit}>
          
          <input //title
          type="text"
          id="game-title"
          value={title}
          placeholder="Enter Game Title"
           onChange={((e)=> setTitle(e.target.value))}   
          />

          <input //genre
          type="text"
          id="game-genre"
          value={genre}
          placeholder="Enter Game Genre"
          onChange={(e) => setGenre(e.target.value)}
           />

           

           <button type="submit">Add Game To Favorites</button>
          
          


        </form>
    )
}


export default AddFavouriteForm;