import strideCastLogo from "../assets/strideCastLogo.png";
import { Link } from "react-router-dom";
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = ({authUser, setLandingPage}) => {

  const navigate = useNavigate();

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        setLandingPage(true)
      })
      .catch((error) => console.log(error));
  };

  const handleRefresh = () => {
    navigate.push("/yourPlaylist");
  };

  return (
    <>
      <header>
        <div className="wrapper headerContainer">
          <Link to="/" className="logoLink" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <div className="logoContainer">
              <div>
                <img className="logo" src={strideCastLogo}></img>
              </div>
              <p className="logoWord">StrideCast</p>
            </div>
          </Link>
          {authUser ? 
            ( <div className="logOutContainer">
                <div className="yourPlaylistContainer">
                  <i class="fa-solid fa-headphones-simple faYourPlaylist"></i>                 
                   <Link to="/yourPlaylist" className="yourPlaylistLink" style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={handleRefresh}><p>YOUR PLAYLIST</p></Link>
                </div>
                <div className="logOutUserContainer">
                <i className="fa-solid fa-user faUser"></i>
                <p>{`Welcome, ${authUser.email}`}</p>
                <button className="logOutBtn" onClick={signOutUser}>Log out</button>
                </div>
              </div>
            ):(
              <div className="topNavBtns">
                <Link to="/signup"className="signUpLink">
                  <button className="signUpBtn">Sign up</button>
                </Link>
                <Link to="/login" className="logInLink">
                  <button className="logInBtn">Log in</button>
                </Link>
              </div>
            )
          }
        </div>
      </header>
    </>
  );
};

export default Header;