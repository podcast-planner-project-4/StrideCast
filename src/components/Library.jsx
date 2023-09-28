import React, { useEffect } from "react";
import Podcast from "./Podcast";
import Header from "./Header";
import SideBarLibrary from "./SideBarLibrary";
import Footer from "./Footer";
import APILoadingState from "./APILoadingState";
import { useState } from "react";
import { getDatabase, ref, update } from "firebase/database";

const Library = ({ userData, authUser }) => {
  const [loading, setLoading] = useState(false)
  const [library, setLibrary] = useState(null);

  const handleDeleteList = () => {
    const database = getDatabase();
    const userUid = authUser.uid;
    const playlistRef = ref(database, `users/${userUid}`);
    update(playlistRef, { playlistName: null, podcasts: null });
  }
    
  useEffect(()=> {
    setLoading(true)
    if(userData && userData.length > 0){
    setLibrary(true);
    } else { 
      setLibrary(false);
    }

    setTimeout(() => {
      setLoading(false)
    }, 1000)
  },[userData]);
  
  console.log(userData)

  return (
    <div className="libraryMainContainer">
      <Header authUser={authUser} />
      <SideBarLibrary />
      { loading ? <APILoadingState/> 
      : 
        library && userData.length > 0 ?  (<div className="libraryContainer">
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
      </div>) : <p className="delete">Your Playlist is empty</p>
      
      }
      
      <Footer />
    </div>
  );
};

export default Library;
