import Podcast from "./Podcast";
import { Link } from "react-router-dom";

const Playlist = ({ podcasts, playlistNameInput }) => {
  return (
    <div className="playlistContainer">
      <div className="playlistHeader">
        <div className="playlistNameShuffle">
          <h2>{playlistNameInput}</h2>
          <button className="faShuffleBtn">
            <i className="fa-solid fa-shuffle faShuffleIcon"></i>
          </button>
        </div>
        <div className="savePlaylistContainer">
          <Link to="/signup">
            <i className="fa-regular fa-heart favouriteIcon"></i>
          </Link>
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
