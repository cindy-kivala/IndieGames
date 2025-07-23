//Component to allow user to add new favorite games
//Fetches list of favorite games list from local server and adds updates (POST)
//

import { useState } from "react"

function AddFavouriteForm(){
  const [title, setTitle] = useState(null);
  const [genre, setGenre] = useState(null);
  const [image, setImage] = useState('');

  const newGame ={
    title: title,
    genre: genre,
    thumbnail: thumbnail //image url from db.json
 }

    return(
        <Form >

        </Form>
    )
}