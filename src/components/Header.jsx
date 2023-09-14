import strideCastLogo from "../assets/strideCastLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="wrapper headerContainer">
          <div className="logoContainer">
            <div>
              <img className="logo" src={strideCastLogo}></img>
            </div>
            <p className="logoWord">StrideCast</p>
          </div>
          <div className="topNavBtns">
            <button className="signUpBtn">
              <Link to="/signup" className="signUpLink">Sign up</Link>
            </button>
            <button className="logInBtn">
              <Link to="/login" className="logInLink">Log in</Link>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
