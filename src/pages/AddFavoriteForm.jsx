//Component to allow user to add new favorite games
//Fetches list of favorite games list from local server and adds updates (POST)
//

import { useState } from "react"

function AddFavouriteForm(){
  const [title, setTitle] = useState(null);
  const [genre, setGenre] = useState(null);
  const [thumbnail, setThumbnail] = useState('');

 //function to handle form submission
  const handleSubmit = (e)=> {
  e.preventDefault();
  
  }


  const newGame ={
    title: title,
    genre: genre,
    thumbnail: thumbnail //image url from db.json
 }

 //Add updates (new fav game) to local server
 fetch("http://localhost:3000/favorites", {method: 'POST'})
 .then((res)=>res.json)
 .then((data)=>{onAddFavorite(data)})

    return(
        <Form id="Form">


        </Form>
    )
}


export default AddFavouriteForm