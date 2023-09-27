import { useState } from "react";
import Podcast from "./Podcast";
import { Link } from "react-router-dom";
import { ref, getDatabase, update } from "firebase/database";

const Playlist = ({ podcasts, playlistNameInput, authUser }) => {

  const [favourited, setFavourited] = useState('');

  const handleFavourite = () => {
    setFavourited(!favourited)
    if (authUser){
      const userUid = authUser.uid;
      console.log(userUid)
      const database = getDatabase();
      const userRef = ref(database, `users/${userUid}/`);
      if(!favourited){
        update(userRef, { playlistName: playlistNameInput , podcasts } )
      }  else {
        update(userRef, { playlistName: null, podcasts: null })
    }
  }
}

  return (
    <div className="playlistContainer">
      <div className="playlistHeader">
        <div className="playlistNameShuffle">
          <h2>{playlistNameInput}</h2>
          <button className="faShuffleBtn" >
            <i className="fa-solid fa-shuffle faShuffleIcon" title="Shuffle playlist"></i>
          </button>
        </div>
        <div className="savePlaylistContainer">
          {authUser ? 
            (<i className={`${favourited ? 'fa-solid' : 'fa-regular'} fa-heart favouriteIcon`} title={favourited ? 'Remove from library' : 'Add to library'}
            onClick={handleFavourite}>
            </i> )
            :
            (<Link to="/signup" className="savePlaylistLink">
              <i className="fa-regular fa-heart favouriteIcon"></i>
            </Link>)
          }
        </div>
      </div>
      <ul>
        {podcasts.map((podcast) => {
          return <Podcast podcast={podcast} />;
        })}
        {console.log(podcasts)}
      </ul>
    </div>
  );
};

export default Playlist;
