import strideCastLogo from "../assets/strideCastLogo.png";
import { Link } from 'react-router-dom'

function LogIn() {
  return (
    <div className="formPage">
      <div className="logInLogoContainer">
        <Link to="/"><div className="logoContainer">
            <div>
              <img className="logo" src={strideCastLogo}></img>
            </div>
            <p className="logoWord">StrideCast</p>
        </div></Link>
      </div>
      <div className="formContainer">
        <h2>Log in</h2>
        <form>
          <input type="email" id="logInEmail" placeholder="Email:" required></input>
          <div className="passwordContainer">
            <input type="password" id="signUpPassword" className="signUpPassword" placeholder="Password:"></input>
            <i class="fa-regular fa-eye-slash faVisible"></i>
          </div>
          <button type="submit" className="logInFormBtn">Log in</button>
        </form>
        <p>Don't have an account? <Link to="/signup"> Sign up here.</Link></p>
      </div>
      <p className="homeLink"><Link to="/">Return home</Link></p>
    </div>
  );
}

export default LogIn;
