import strideCastLogo from "../assets/strideCastLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="wrapper headerContainer">
          <Link to="/"><div className="logoContainer">
            <div>
              <img className="logo" src={strideCastLogo}></img>
            </div>
            <p className="logoWord">StrideCast</p>
          </div></Link>
          <div className="topNavBtns">
          <Link to="/signup"className="signUpLink"><button className="signUpBtn">Sign up</button></Link>
          <Link to="/login" className="logInLink"><button className="logInBtn">Log in</button></Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
