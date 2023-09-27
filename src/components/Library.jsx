import React from "react";
import Podcast from "./Podcast";
import Header from "./Header";
import SideBarLibrary from "./SideBarLibrary";
import Footer from "./Footer";

const Library = ({ userData, authUser }) => {
  console.log(userData);
  return (
    <div className="libraryMainContainer">
      <Header authUser={authUser} />
      <SideBarLibrary />
      <div className="libraryContainer">
        <div className="libraryContainerHeader">
          <h2>Your Playlist</h2>
          <i
            className="fa-solid fa-trash-can faRemove"
            title="Delete playlist"
          ></i>
        </div>
        <ul>
          {userData.map((podcast) => {
            return <Podcast podcast={podcast} />;
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Library;
