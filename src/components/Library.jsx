import React from "react";
import Podcast from "./Podcast";

const Library = ({ userData }) => {

  console.log(userData);
  return (
      <div className="libraryContainer">
        <h2>Your Playlist</h2>
        <ul>
          {userData.map((podcast) => {
              return <Podcast podcast={podcast} />
          })}
        </ul>
      </div>
  );
};

export default Library;