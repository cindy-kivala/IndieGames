//Component to allow user to add new favorite games
//Fetches list of favorite games list from local server and adds updates (POST)


import { useState } from "react"
import FavoriteList from "./FavoriteList"

function AddFavouriteForm(){
  const [title, setTitle] = useState(null);
  const [genre, setGenre] = useState(null);
  const [thumbnail, setThumbnail] = useState('');

 //function to handle form submission
  const handleSubmit = (e)=> {
  e.preventDefault();

  const newGame ={
    title: title,
    genre: genre,
    thumbnail: thumbnail //image url from db.json
     }

  
  //Add updates (new fav game) to local server
  

 

 }

 

 setTitle("");
 setGenre("");
 setThumbnail("");

    return(
        <form id="Form" onSubmit={handleSubmit}>
          <input //title
          type="text"
          value={title}
          placeholder="Enter Game Title"
           onChange={((e)=> setTitle(e.target.value))}   
          />

          <input //genre
          type="text"
          value={genre}
          placeholder="Enter Game Genre"
          />
          
          


        </form>
    )
}


export default AddFavouriteForm