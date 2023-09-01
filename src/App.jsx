import React from 'react';
import { useState, useEffect } from 'react';
import './App.css'
import { Client } from 'podcast-api';

function App() {

      const [podcasts, setPodcasts] = useState ([]);
      const [walkDuration, setWalkDuration] = useState (0); // maybe, we want to set this to 0?

    useEffect( () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const baseUrl = "https://listen-api.listennotes.com/api/v2";

      const client = Client({ apiKey });

      const newUrl = new URL(baseUrl);
      newUrl.pathname = '/search';

      client.search({
          q: 'podcast',
          sort_by_date: 0,
          type: 'episode',
          offset: 0,
          len_min: walkDuration,
          len_max: walkDuration + 5,
          genre_ids: '68,82', 
          published_before: 1580172454000,
          published_after: 0,
          only_in: 'title,description',
          language: 'English',
          safe_mode: 0,
          unique_podcasts: 0,
          page_size: 10,
      }).then((response) => {
          console.log(response.data);
          setPodcasts(response.data.results);
      }).catch((error) => {
          console.log(error);
      });
    },[] ) // We want the API call when user clicks on the submit button
      
    // have our form and in the select we will a useState, that state will update the value and that value will be placed in the query
      const handleWalkDurationChange = (event) => {
        setWalkDuration(event.target.value);
      }

    return (
      <>
      <label htmlFor='walkTime'>How long is your walk?</label>
       {/* make it so the user cannot put a negative number */}
      <input type='number' id='walkTime' value={walkDuration} onChange={()=>{handleWalkDurationChange}}>

      </input>
      <ul>
        {podcasts.map((podcast) => {
          return(
          <li key={podcast.id}>
            <h3>{podcast.title_original}</h3>
          </li>)
        })}
        {console.log(podcasts)}
      </ul>
      </>
    )
}

export default App