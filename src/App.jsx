import { useState, useEffect } from 'react';
import './App.css'
import { Client } from 'podcast-api';

function App() {
      const [podcasts, setPodcasts] = useState([]);


      useEffect(() => {
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
            len_min: 10,
            len_max: 30,
            genre_ids: '68,82', 
            published_before: 1580172454000,
            published_after: 0,
            only_in: 'title,description',
            language: 'English',
            safe_mode: 0,
            unique_podcasts: 0,
            page_size: 10,
        }).then((response) => {
            const results = response.data.results
            setPodcasts(results);
            console.log(results)
        }).catch((error) => {
            console.log(error);
        });
      }, [])

    return (
      <>
        <label htmlFor="genreChoice">Choose your genre: </label>
        <Select 
        onChange={handleChooseGenre}
        value={selectedGenre}
        options={dishTypeOptions}> 
        </Select>


      </>
    )
}

export default App
