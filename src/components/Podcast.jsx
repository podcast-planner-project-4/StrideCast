const Podcast = ({ podcast }) => {

  const maxLength = 200;
  const trimmedDesc =
    podcast.description_original.length > maxLength
      ? podcast.description_original.substring(0, maxLength) + "..."
      : podcast.description_original;

  return (
    <li key={podcast.id} className="podcastContainer">
      <div className="podcastCoverContainer">
        <img
          className="podcastCover"
          src={podcast.thumbnail}
          alt={`${podcast.title_original} cover art`}
        ></img>
      </div>
      <div className="podcastInfoContainer">
        <div className="podcastInfoTop">
          <div className="podcastInfoTopLeft">
            <div>
              <h3 className="podcastTitle">{podcast.title_original}</h3>
              <p className="podcastAuthor">{podcast.publisher_original}</p>
            </div>
          </div>
          <i className="fa-solid fa-bars faDragIcon"></i>
        </div>
        <p className="podcastDescription">{trimmedDesc}</p>
        <audio controls>
          <source src={podcast.audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </li>
  );
};

export default Podcast;
