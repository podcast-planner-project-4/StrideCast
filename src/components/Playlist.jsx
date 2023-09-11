import Podcast from "./Podcast";

const Playlist = ({podcasts}) => {

    return (
         <div className="playlistContainer">
            <div className="playlistHeader">
                <div className="playlistNameShuffle">
                <h2>Top picks</h2>
                    <button className="faShuffleBtn">
                        <i className="fa-solid fa-shuffle faShuffleIcon"></i>
                    </button>
                </div>
                <div className="savePlaylistContainer">
                    <p>Save playlist</p>
                    <i className="fa-regular fa-heart favouriteIcon"></i>
                </div>
            </div>  
            <ul>
                {podcasts.map((podcast) => {
                    return(
                        <Podcast podcast={podcast}/>
                    )
                    })}
                {console.log(podcasts)}
            </ul>
        </div>
    )
}

export default Playlist;