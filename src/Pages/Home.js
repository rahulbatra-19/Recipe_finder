import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import { API } from "../Utils";
import { customFetch } from "../api";
import styles from '../styles/home.module.css';
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
          className={styles.search}
          type="search"
          placeholder="Search a recipe"
          value={search}
          onChange={(e) => {
            console.log(search);
            setSearch(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>

      <div>
        <ol className={styles.list}>
          {data.map((recipe) => (
            <li>
              <Card
                name={recipe.recipe.label}
                img={recipe.recipe.image}
                url={recipe.recipe.url}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Home;
