# IndieGames Hub

**IndieGames Hub** is a full-stack React application that allows users to browse, search, and favorite free indie games. The frontend is built using React and Vite, while the backend is powered by a custom `json-server` REST API. The project is deployed using Netlify (frontend) and Render (backend).

### Links
> Live Demo: [indiegames-db.netlify.app](https://indiegames-db.netlify.app/)  
> Backend API: [json-server-indiegames-backend.onrender.com](https://json-server-indiegames-backend.onrender.com/)  
> Frontend Repo: [GitHub - IndieGames (Frontend)](https://github.com/cindy-kivala/IndieGames)  
> Backend Repo: [GitHub - json-server-indiegames-backend](https://github.com/cindy-kivala/Json-server-IndieGames-Backend)


## Table of Contents

- [Overview](#overview)
- [MVP (Minimum Viable Product)](#mvp-minimum-viable-product)
- [Features](#features)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [Backend Repository](#backend-repository)
- [Merging Workflow](#merging-workflow)
- [Deployment](#deployment)
  - [Frontend: Netlify](#frontend-netlify)
  - [Backend: Render](#backend-render)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [License](#license)



## Overview

**IndieGames Hub** offers users a platform to explore free-to-play indie games using the FreeToGame API as a data source. Users can view game cards, search/filter games by genre, and manage a personalized list of favorite games through a custom backend.


## MVP (Minimum Viable Product)

1. Fetch and display a list of indie games from the FreeToGame API.
2. Render each game using a reusable `GameCard` component.
3. Allow users to add and remove games from a list of favorites.
4. Persist favorites using a `json-server` backend.
5. Route users between pages using React Router (e.g., Home, Game List, Favorites).
6. Deploy both frontend and backend for public access.


## Features

- Interactive game list with responsive cards
- Add/remove games to/from favorites
- Favorites stored on a custom backend (not just localStorage)
- Live search and genre filter
- Clean layout with reusable components (`GameList`, `GameCard`, `FavoriteList`)
- Deployed full-stack with Netlify and Render


## Installation

### 1. Clone the frontend repo:

- git clone git.github.com/cindy-kivala/IndieGames.git
- cd IndieGames
- npm install

### 2. Clone the backend repo:

- git clone git.github.com/cindy-kivala/Json-server-IndieGames-Backend.git
- cd Json-server-IndieGames-Backend
- npm install

### Running Locally
- Start the backend (in indiegames-backend folder):

- npx json-server --watch db.json --port 3001

- The backend will run at:
http://localhost:3001

- Start the frontend (in indiegames-frontend folder):

-  npm run dev

- The app will run at:
http://localhost:5173

- Make sure to set your API base URL in a .env file:

- VITE_API_URL=http://localhost:3001

### Backend Repository

- The backend code and json-server setup are located in a separate repository:

- Json-server-IndieGames-Backend Repo

### Merging Workflow

- To ensure smooth collaboration across branches:

- Pull the latest main branch:

    git checkout main
    git pull origin main

- Create a new feature branch:

    git checkout -b feature/branch-name

- After coding:

   git add .
   git commit -m "Feature: Description"
   git push origin feature/branch-name

- Open a Pull Request and request review before merging.

### Deployment
- Frontend: Netlify
- Push frontend to GitHub.
- Connect the repo to Netlify.

### Set build settings:

- Build command: npm run build

- Publish directory: dist

- Set environment variable:

    VITE_API_URL=https://your-render-backend-url

### Live example:
- Frontend: https://indiegames-hub.netlify.app

- Backend: Render

- Push backend repo to GitHub.

- Create a new Web Service on Render.

### Set start command:

json-server --watch db.json --port 10000

- Set the service port to 10000.

- Enable CORS if needed.

- Live example:
- Backend: https://indiegames-backend.onrender.com/favorites

### API Endpoints
- Method	Endpoint	Description
- GET	/favorites	Fetch all favorites
- POST	/favorites	Add a favorite game
- DELETE	/favorites/:id	Remove a favorite game

### Technologies Used
- React

- Vite

- React Router

- FreeToGame API

- JSON Server

- Netlify (frontend hosting)

- Render (backend hosting)

- HTML5, CSS3, JavaScript (ES6+)

### License
This project is licensed under the (https://opensource.org/licenses/MIT).

### Authors
- Cindy Kivala
- Ian Njunge
- Morris Karia
- Paul Kipkemboi
- Ryan Wahinya
- Samuel Karanja

