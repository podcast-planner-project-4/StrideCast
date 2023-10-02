import React, { useEffect } from "react";
import Podcast from "./Podcast";
import Header from "./Header";
import SideBarLibrary from "./SideBarLibrary";
import Footer from "./Footer";
import LoadingState from "./LoadingState";
import { useState } from "react";
import { getDatabase, ref, update } from "firebase/database";

const Library = ({ userData, authUser }) => {
  const [loading, setLoading] = useState(true);
  const [library, setLibrary] = useState(null);

  const handleDeleteList = () => {
    const database = getDatabase();
    const userUid = authUser.uid;
    const playlistRef = ref(database, `users/${userUid}`);
    update(playlistRef, { playlistName: null, podcasts: null });
  };

  useEffect(() => {
    if (userData && userData.length > 0) {
      setLibrary(true);
    } else {
      setLibrary(false);
    }

    //setting a timer for the loading state to account for the lag in getting user info from database to render on page
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [userData]);

  return (
    <div className="libraryMainContainer">
      <Header authUser={authUser} />
      <SideBarLibrary />
      {loading ? (
        <LoadingState />
      ) : library && userData.length > 0 ? (
        <div className="libraryContainer">
          <div className="libraryContainerHeader">
            <h2>Your Playlist</h2>
            <i
              className="fa-solid fa-trash-can faRemove"
              title="Delete playlist"
              onClick={handleDeleteList}
            ></i>
          </div>
          <ul>
            {userData.map((podcast) => {
              return <Podcast podcast={podcast} />;
            })}
          </ul>
        </div>
      ) : (
        <p className="deletePlaylist">Your library is empty.</p>
      )}

      <Footer />
    </div>
  );
};

export default Library;
