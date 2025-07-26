import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddFavouriteForm() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [platform, setPlatform] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newGame = { title, genre, platform };
    const API_URL = import.meta.env.VITE_API_URL;

    fetch(`${API_URL}/favorites`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGame),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add favorite");
        return res.json();
      })
      .then(() => {
        setTitle("");
        setGenre("");
        setPlatform("");
        navigate("/favorites");
      })
      .catch((err) => {
        console.error("Fetch failed:", err);
      });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Add A New Favorite Game</h1>

      <input
        type="text"
        id="game-title"
        value={title}
        placeholder="Enter Game Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        id="game-genre"
        value={genre}
        placeholder="Enter Game Genre"
        onChange={(e) => setGenre(e.target.value)}
      />

      <input
        type="text"
        id="gaming-platform"
        value={platform}
        placeholder="Enter platform e.g PC"
        onChange={(e) => setPlatform(e.target.value)}
      />

      {/* ✅ Add button */}
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
}

export default AddFavouriteForm;
