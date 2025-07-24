import React ,{useState,useEffect}from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import shared layout and page components
// import Navbar from "./components/Navbar";
import GameList from "./pages/GameList";
import GameCard from "./components/GameCard"; // assuming GameCard is a component
// import FavoriteList from "./pages/FavoriteList";
// import AddFavoriteForm from "./pages/AddFavoriteForm";
// import Login from "./pages/Login"; // or components/Authentication

function App() {
  const [games,setGames]=useState([])
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/games`)
    .then((r)=>r.json())
    .then((data)=>{
      // console.log("fetched games:",data)
      setGames(data)})
  },[])
  //  console.log("Games:", games);
  return (
    <>
    <Router>
       <div className="app">
         {/* Always visible */}
        
         {/* <Navbar />  */}

         {/* Route-based rendering */}
         <Routes>
           <Route path="/" element={<GameList games={games}/>} />  
           {/* <Route path="/favorites" element={<FavoriteList />} />
           <Route path="/add" element={<AddFavoriteForm />} />
           <Route path="/login" element={<Login />} /> */}
           <Route path="/game/:id" element={<GameCard  games={games}/>}/>
           {/* Add fallback route */}
           <Route path="*" element={<h2>404 - Page Not Found</h2>} />
         </Routes>
       </div>
     </Router>
    </>
  );
}

export default App;
