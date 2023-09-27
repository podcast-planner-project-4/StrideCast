import spotifyLogo from "../assets/spotifyLogo.png";

const Spotify = () => {

    return (

        <div className="spotifyContainer">
            <p>COMING SOON: Save and listen to your playlist on</p>
            <div className="spotifyLogoContainer">
                <img src={spotifyLogo} className="spotifyLogo"></img>
            </div>
            <i className="fa-solid fa-xmark faClose"></i>
        </div>
    );
}

export default Spotify;