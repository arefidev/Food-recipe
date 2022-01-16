import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import "./index.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')

  const APP_ID = "ebce0412";
  const APP_KEY = "16103ffa703d76748382a86cea0cd4ca";

  const getItems = async () => {
    const res = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await res.json();
    setRecipes(data.hits);
    
  };

  useEffect(() => {
    getItems();
  }, [query]);

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const getQuery = (event) => {
    event.preventDefault()
    setQuery(search)
    setSearch('')
  }


  return (
    <div className="App">
      <form action="" className="form" onSubmit={getQuery}>
        <input className="text-input" value={search} onChange={handleSearch} type="text" />
        <button className="btn-form">search</button>
      </form>
      <div className="main">
      {recipes.map((recipe) => (
        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
           />
      ))}
      </div>
    </div>
  );
}

export default App;
