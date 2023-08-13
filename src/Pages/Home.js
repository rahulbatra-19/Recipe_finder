import React, { useState, useEffect } from "react";
// import { getData } from "../api";
import Card from "../Components/Card";
import { API } from "../Utils";
import { customFetch } from "../api";
const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("potato");
  useEffect(() => {
    const getData = () => {
      return customFetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API.APP_ID}&app_key=${API.APP_KEY}`,
        {
          method: "GET",
        }
      );
    };
    const fetchData = async () => {
      const response = await getData();
      if (response.success) {
        setData(response.data.hits);
      console.log("response", response.data.hits);
      }
    };
    fetchData();
  }, [query]);

  const updateRecipe = (e) => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div>
      <h1>Recipe Search</h1>
      <form onSubmit={updateRecipe}>
        <input
        type="search"
        placeholder="Search a recipe"
        value={search}
          onChange={(e) => {
            console.log(search);
            setSearch(e.target.value)
          }}
        />
        <button type="submit">Search</button>
      </form>
      
      <div>
        {data.map((recipe) => (
          <Card name={recipe.recipe.label} img={recipe.recipe.image} url={recipe.recipe.url} />
        ))}
      </div>
    </div>
  );
};

export default Home;
