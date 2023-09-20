import React from "react";
import { useState, useEffect } from "react";
import { Client } from "podcast-api";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import SideBar from "./components/SideBar";
import Playlist from "./components/Playlist";
import Footer from "./components/Footer";
import APILoadingState from "./components/APILoadingState";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import ErrorPage from "./components/ErrorPage";
import "./App.css";

function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [walkDuration, setWalkDuration] = useState(""); // maybe, we want to set this to 0?
  const [selectedGenre, setSelectedGenre] = useState("");
  const [playlistNameInput, setPlaylistNameInput] = useState("");
  const [landingPage, setLandingPage] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectLessTime, setSelectLessTime] = useState("");

  const handleSubmit = (event) => {
    setSelectLessTime("");
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    const apiKey = import.meta.env.VITE_API_KEY;
    const baseUrl = "https://listen-api.listennotes.com/api/v2";
    const client = Client({ apiKey });
    const newUrl = new URL(baseUrl);
    newUrl.pathname = "/search";

    if (walkDuration > 720) {
      setIsLoading(false);
      setSelectLessTime("Please select less time.");
    }

    // client.fetchPodcastGenres({
    //   top_level_only: 1,

    // }).then((response) => {

    //   console.log(response.data);
    // }).catch((error) => {
    //   console.log(error)
    // });

    client
      .search({
        q: "podcast",
        sort_by_date: 0,
        type: "episode",
        offset: 0,
        len_min: walkDuration - 1,
        len_max: walkDuration,
        genre_ids: selectedGenre,
        published_before: 1580172454000,
        published_after: 0,
        only_in: "title,description",
        language: "English",
        safe_mode: 0,
        unique_podcasts: 0,
        page_size: 10,
      })
      .then((response) => {
        setIsLoading(false);
        if (response.data.results.length === 0) {
          setErrorMessage("Sorry! No podcasts found. Please try again.");
        } else {
          setPodcasts(response.data.results);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setErrorMessage("Error retrieving podcasts. Please try again later.");
      });

    setLandingPage(false);
  };

  useEffect(() => {}, [walkDuration, selectedGenre, handleSubmit]);

  // We want the API call when user clicks on the submit button (maybe a dependency array situation)

  // have our form and in the select we will a useState, that state will update the value and that value will be placed in the query

  // const handleWalkDurationChange = (event) => {
  //   const inputValue = event.target.value;
  //   if (/^\d+$/.test(inputValue) || inputValue === "") {
  //     setWalkDuration(inputValue);
  //   }
  const handleWalkDurationChange = (event) => {
    const newValue = event.target.value;
    if (newValue.startsWith("0")) {
      event.preventDefault();
      console.log("hello");
    } else {
      setWalkDuration(newValue);
    }
  };

  const handleSelectedGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handlePlaylistNameInputChange = (event) => {
    setPlaylistNameInput(event.target.value);
  };
  return (
    <>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <SideBar
                  walkDuration={walkDuration}
                  handleWalkDurationChange={handleWalkDurationChange}
                  selectedGenre={selectedGenre}
                  handleSelectedGenreChange={handleSelectedGenreChange}
                  playlistNameInput={playlistNameInput}
                  handlePlaylistNameInputChange={handlePlaylistNameInputChange}
                  handleSubmit={handleSubmit}
                  errorMessage={errorMessage}
                />
                {landingPage ? (
                  <LandingPage />
                ) : selectLessTime ? (
                  <div className="errorMsg">
                    <i className="fa-solid fa-triangle-exclamation errorIcon"></i>
                    <p>{selectLessTime}</p>
                  </div>
                ) : isLoading ? (
                  <APILoadingState />
                ) : errorMessage ? (
                  <div className="errorMsg">
                    <i className="fa-solid fa-triangle-exclamation errorIcon"></i>
                    <p>{errorMessage}</p>
                  </div>
                ) : (
                  <Playlist
                    podcasts={podcasts}
                    playlistNameInput={playlistNameInput}
                  />
                )}
                <Footer />
              </>
            }
          ></Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
