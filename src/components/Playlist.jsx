const Playlist = ({podcasts}) => {

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
            <li key={podcast.id} className="podcastContainer">
                <div className="podcastCoverContainer">
                    /*thumbnail goes here*/
                </div>
                <div className="podcastInfoContainer">
                    <div className="podcastInfoTop">
                        <div className="podcastInfoTopLeft">
                        <div className="playBtnContainer">
                            <i className="fa-solid fa-play playBtn"></i>
                        </div>
                   
                            <div>
                                <h3 className="podcastTitle">{podcast.title_original}</h3>
                                /*podcast author*/
                            </div>
                        </div>
                        <i className="fa-solid fa-trash-can trashIcon"></i>
                    </div>
                    /*podcast podcast description*/
                    /*podcast podcast length*/
                </div>
                
            </li>)
            })}
            {console.log(podcasts)}
        </ul>
        </div>
    )
}

export default Playlist;