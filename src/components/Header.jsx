import { Link } from "react-router-dom";
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";
import StrideCast_purple from "../assets/StrideCast_purple.png";

const Header = ({ authUser, setLandingPage }) => {
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        setLandingPage(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <header>
        <div className="wrapper headerContainer">
          <Link
            to="/"
            className="logoLink"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div className="logoContainer">
              <div>
                <img className="logo" src={StrideCast_purple}></img>
              </div>
              <p className="logoWord">StrideCast</p>
            </div>
          </Link>
          {authUser ? (
            <div className="logOutContainer">
              <Link
                to="/library"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <div className="yourPlaylistContainer">
                  <i className="fa-solid fa-thumbtack faYourLibrary"></i>
                  <p>YOUR LIBRARY</p>
                </div>
              </Link>
              <div className="logOutUserContainer">
                <i className="fa-solid fa-user faUser"></i>
                <p>{`Welcome, ${authUser.email}`}</p>
                <button className="logOutBtn" onClick={signOutUser}>
                  Log out
                </button>
              </div>
            </div>
          ) : (
            <div className="topNavBtns">
              <Link to="/signup" className="signUpLink">
                <button className="signUpBtn">Sign up</button>
              </Link>
              <Link to="/login" className="logInLink">
                <button className="logInBtn">Log in</button>
              </Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
