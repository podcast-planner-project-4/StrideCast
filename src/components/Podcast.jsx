import React from "react";
import DOMPurify from "dompurify";

const Podcast = ({ podcast }) => {
  const maxLength = 175;
  const trimmedDesc =
    podcast.description_original.length > maxLength
      ? podcast.description_original.substring(0, maxLength) + "..."
      : podcast.description_original;
  const sanitizedTrimmedDesc = DOMPurify.sanitize(trimmedDesc);

  return (
    <li key={podcast.id} className="podcastContainer">
      <div className="podcastCoverContainer">
        <img
          className="podcastCover"
          src={podcast.thumbnail}
          alt={`${podcast.title_original} cover art`}
        ></img>
        <a href={podcast.link} target="_blank">
          <i className="fa-solid fa-link podcastLink" title="Visit website"></i>
        </a>
      </div>
      <div className="podcastInfoContainer">
        <div className="podcastInfoTop">
          <div>
            <h3 className="podcastTitle">{podcast.title_original}</h3>
            <div className="podcastAuthorContainer">
              <i className="fa-solid fa-podcast faPodcast"></i>
              <p className="podcastAuthor">{podcast.publisher_original}</p>
            </div>
          </div>
        </div>
        <p
          className="podcastDescription"
          dangerouslySetInnerHTML={{ __html: sanitizedTrimmedDesc }}
        ></p>

        <audio controls>
          <source src={podcast.audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </li>
  );
};

export default Podcast;
