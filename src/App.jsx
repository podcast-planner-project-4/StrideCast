import "./App.css";
import PodcastApiClient from "podcast-api";
import { Client } from "podcast-api";
import { useState, useEffect } from "react";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = "https://listen-api.listennotes.com/api/v2";

  const client = Client({ apiKey });

  const newUrl = new URL(baseUrl);
  newUrl.pathname = "/search";

  client
    .search({
      q: "podcast",
      sort_by_date: 0,
      type: "episode",
      offset: 0,
      len_min: 10,
      len_max: 30,
      genre_ids: "68,82",
      published_before: 1580172454000,
      published_after: 0,
      only_in: "title,description",
      language: "English",
      safe_mode: 0,
      unique_podcasts: 0,
      page_size: 10,
    })
    .then((response) => {
      console.log(response.data.genre_ids);
      setPodcasts(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <p>
        {podcasts.map((podcast) => {
          <li></li>;
        })}
      </p>
    </>
  );
}

export default App;
