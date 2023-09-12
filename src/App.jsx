import React from 'react';
import { useState, useEffect } from 'react';
import { Client } from 'podcast-api';
import Header from './components/Header';
import LandingPage from './components/LandingPage'
import ApiLoadingState from './components/ApiLoadingState';
import SideBar from './components/SideBar';
import Playlist from './components/Playlist';
import Footer from './components/Footer';
import './App.css'

function App() {

      const [podcasts, setPodcasts] = useState ([]);
      const [walkDuration, setWalkDuration] = useState (0); // maybe, we want to set this to 0?
      const [selectedGenre, setSelectedGenre] = useState('');
      const [playlistNameInput, setPlaylistNameInput] = useState('');
      const [landingPage, setLandingPage] = useState(true);
      const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event) => { 
      event.preventDefault();

      setIsLoading(true);

      const apiKey = import.meta.env.VITE_API_KEY;
      const baseUrl = "https://listen-api.listennotes.com/api/v2";

      const client = Client({ apiKey });

      const newUrl = new URL(baseUrl);
      newUrl.pathname = '/search';

      // client.fetchPodcastGenres({
      //   top_level_only: 1,
 
      // }).then((response) => {
        
      //   console.log(response.data);
      // }).catch((error) => {
      //   console.log(error)
      // });
    

      client.search({
          q: 'podcast',
          sort_by_date: 0,
          type: 'episode',
          offset: 0,
          len_min: walkDuration,
          len_max: walkDuration + 5,
          genre_ids: selectedGenre, 
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
          setIsLoading(false);
      }).catch((error) => {
          console.log(error);
          setIsLoading(false);
      });

      setLandingPage(false);
    }

    useEffect( () => { 
      
    },[walkDuration, selectedGenre, handleSubmit] )
      
     // We want the API call when user clicks on the submit button (maybe a dependency array situation)
      
    // have our form and in the select we will a useState, that state will update the value and that value will be placed in the query
    
    
    const handleWalkDurationChange = (event) => {
      setWalkDuration(event.target.value);
    }

    const handleSelectedGenreChange = (event) => { 
      setSelectedGenre(event.target.value);
      
    }

    const handlePlaylistNameInputChange = (event) => { 
      setPlaylistNameInput(event.target.value)
    }


  
    return (
      <>
        <div className="App">
            <Header />
            <SideBar 
              walkDuration={walkDuration} 
              handleWalkDurationChange={handleWalkDurationChange}
              selectedGenre={selectedGenre}
              handleSelectedGenreChange={handleSelectedGenreChange}
              playlistNameInput={playlistNameInput}
              handlePlaylistNameInputChange={handlePlaylistNameInputChange}
              handleSubmit={handleSubmit}
            />
            {
              landingPage ? <LandingPage /> : 
              isLoading ? <ApiLoadingState /> :
              <Playlist podcasts={podcasts}/>
            }

            <Footer />
      </div>
      </>
    )
}

export default App;