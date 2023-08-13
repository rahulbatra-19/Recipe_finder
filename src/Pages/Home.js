import React, { useState, useEffect } from "react";
import { API_ID, API_KEY } from "../Utils";
const Home = () => {
  const [input, setInput] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://api.edamam.com/api/recipes/v2?q=chicken&app_key=8a179740e34f332f6312efb0edabc8a4&_cont=CHcVQBtNNQphDmgVQntAEX4BYldtBAYEQ21GBWQaaldyDAQCUXlSB2ZCNl17BgcESmVBAjAaZ1RyUFFUEmAWB2tFMVQiBwUVLnlSVSBMPkd5BgMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D&type=public&app_id=430e8df0'
        );
        const data = await response.json();
        console.log(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  },[]);

  return (
    <div>
      <h1>Recipe Search</h1>
      <input
        type="search"
        placeholder="Search a recipe"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>{/* <Card /> */}</div>
    </div>
  );
};

export default Home;
