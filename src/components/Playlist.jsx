import Podcast from "./Podcast";

const Playlist = ({podcasts, podcast}) => {

    return (
         <div className="playlistContainer">
            <div className="playlistHeader">
                <h2>Top Picks</h2>
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