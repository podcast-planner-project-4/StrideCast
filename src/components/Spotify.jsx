import spotifyLogo from "../assets/spotifyLogo.png";
import { useState } from "react";
import React from "react";

const Spotify = () => {
  const [spotifyNotice, setSpotifyNotice] = useState(true);
  const handleHideSpotify = () => {
    setSpotifyNotice(!spotifyNotice);
  };

  return (
    <div className={`spotifyContainer ${spotifyNotice ? "" : "hidden"}`}>
      <p>COMING SOON: Save and listen to your playlist on</p>
      <div className="spotifyLogoContainer">
        <img src={spotifyLogo} className="spotifyLogo"></img>
      </div>
      <i
        className="fa-solid fa-xmark faClose"
        onClick={handleHideSpotify}
        title="Close"
      ></i>
    </div>
  );
};

export default Spotify;
