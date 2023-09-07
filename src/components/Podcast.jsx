const Podcast = ({podcast}) => {

    return (
        <li key={podcast.id} className="podcastContainer">
            <div className="podcastCoverContainer">
                <img className="podcastCover" src={podcast.thumbnail} alt={`${podcast.title_original} cover art`}></img>
            </div>
            <div className="podcastInfoContainer">
                <div className="podcastInfoTop">
                    <div className="podcastInfoTopLeft">
                    <div className="playBtnContainer">
                        <a href={podcast.audio} target="_blank" rel="noreferrer"><i className="fa-solid fa-play playBtn"></i> </a>
                    </div>
                
                        <div>
                            <h3 className="podcastTitle">{podcast.title_original}</h3>
                            <p className="podcastAuthor">{podcast.publisher_original}</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-trash-can trashIcon"></i>
                </div>
                <p className="podcastDescription">{podcast.description_highlighted}</p>
                <p className="podcastLength">{podcast.audio_length_sec}</p>
            </div>
        </li>
    );
}

export default Podcast;