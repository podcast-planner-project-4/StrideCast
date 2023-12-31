import { useState, useEffect } from "react";
import { Client } from "podcast-api";

const LandingPage = () => {
  const [topPodcasts, setTopPodcasts] = useState([]);

  //best podcasts API call

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const baseUrl = "https://listen-api.listennotes.com/api/v2";
    const client = Client({ apiKey });
    const newUrl = new URL(baseUrl);
    newUrl.pathname = "/search";

    client
      .fetchBestPodcasts({
        genre_id: "",
        region: "us",
        sort: "listen_score",
        safe_mode: 0,
      })
      .then((response) => {
        setTopPodcasts(response.data.podcasts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="landingPageContainer">
      <h2>Top Podcasts</h2>
      <ul>
        {topPodcasts.map((podcast) => {
          return (
            <li key={podcast.id} className="bestPodcastContainer">
              <div className="bestPodcastImgContainer">
                <img src={podcast.thumbnail} alt={podcast.title}></img>
                <a href={podcast.website} target="_blank">
                  <i
                    className="fa-solid fa-link faBestLink"
                    title="Visit website"
                  ></i>
                </a>
              </div>
              <p>{podcast.title}</p>
              <p className="bestPodcastAuthor">{podcast.publisher}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LandingPage;
