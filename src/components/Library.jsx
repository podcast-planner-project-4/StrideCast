import React, { useEffect } from "react";
import Podcast from "./Podcast";
import Header from "./Header";
import SideBarLibrary from "./SideBarLibrary";
import Footer from "./Footer";
import { useState } from "react";
import { getDatabase, ref, update } from "firebase/database";

const Library = ({ userData, authUser }) => {

  const [library, setLibrary] = useState(null);

  const handleDeleteList = () => {
    const database = getDatabase();
    const userUid = authUser.uid;
    const playlistRef = ref(database, `users/${userUid}`);
    update(playlistRef, { playlistName: null, podcasts: null });
  }
    
  useEffect(()=> {
    if(userData){
    setLibrary(true);
  }
  },[]);
  

  return (
    <div className="libraryMainContainer">
      <Header authUser={authUser} />
      <SideBarLibrary />
      {library && userData ?  (<div className="libraryContainer">
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
      </div>) : <p className="delete">Your Playlist is empty</p>}
      <Footer />
    </div>
  );
};

export default Library;
