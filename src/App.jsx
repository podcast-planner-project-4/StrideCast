import './App.css'
import { Client } from 'podcast-api';

function App() {

    const apiKey = import.meta.env.VITE_API_KEY;
    const baseUrl = "https://listen-api.listennotes.com/api/v2";

    const client = Client({ apiKey });

    const newUrl = new URL(baseUrl);
    newUrl.pathname = '/search';
    console.log(newUrl);

    client.search({
        q: 'podcast',
        sort_by_date: 0,
        type: 'episode',
        offset: 0,
        len_min: 10,
        len_max: 10,
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
        console.log(response.data.results);
    }).catch((error) => {
        console.log(error);
    });

  return (
    <>
    </>
  )
}

export default App
