import strideCastLogo from "../assets/strideCastLogo.png";
import { Link } from "react-router-dom"

function SignUp() {
  return (
    <div className="formPage">
      <div className="logInLogoContainer">
        <Link to="/">
          <div className="logoContainer">
            <div>
              <img className="logo" src={strideCastLogo}></img>
            </div>
            <p className="logoWord">StrideCast</p>
          </div>
        </Link>
      </div>
      <div className="formContainer">
        <h2>Sign up</h2>
        <form>
          <input type="email" id="signUpEmail" placeholder="Email" required></input>
          <div className="passwordContainer">
            <input type="password" id="signUpPassword" className="signUpPassword" placeholder="Password"></input>
            <i class="fa-regular fa-eye-slash faVisible"></i>
          </div>
          <div className="confirmPasswordContainer">
            <input type="password" id="signUpConfirmPassword" className="signUpConfirmPassword" placeholder="Confirm password"></input>
            <i class="fa-regular fa-eye-slash faVisible"></i>
          </div>
          <button type="submit" className="signUpFormBtn">Create an account</button> 
        </form>
        <p>Already have an account? <Link to="/login" className="linkToLogIn">Log in</Link>.</p>
      </div>
      <p className="homeLink"><Link to="/" className="returnHome">Return home</Link></p>
    </div>
  );
}

export default SignUp;
