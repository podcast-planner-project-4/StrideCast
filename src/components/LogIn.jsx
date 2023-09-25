import strideCast_purple from "../assets/strideCast_purple.png";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { useState } from "react";

function LogIn() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setLoginError("Invalid email or password. Please try again.");
      });
  };

  return (
    <div className="formPage">
      <div className="logInLogoContainer">
        <Link
          to="/"
          className="logoLink"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <div className="logoContainer">
            <div>
              <img className="logo" src={strideCast_purple}></img>
            </div>
            <p className="logoWord">StrideCast</p>
          </div>
        </Link>
      </div>
      <div className="formContainer">
        <h2>Log in</h2>
        <form onSubmit={loginUser}>
          <input
            type="email"
            id="logInEmail"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
          <div className="passwordContainer">
            <input
              type={passwordVisible ? "text" : "password"}
              id="signUpPassword"
              className="signUpPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <i
              className={`fa-regular ${
                passwordVisible ? "fa-eye" : "fa-eye-slash"
              } faVisible`}
              onClick={togglePassword}
            ></i>
          </div>
          {<p className="formErrorMsg">{loginError}</p>}
          <button type="submit" className="logInFormBtn">
            Log in
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="linkToSignUp">
            {" "}
            Sign up now
          </Link>
          .
        </p>
      </div>
      <p className="homeLink">
        <Link to="/" className="returnHome">
          Return home
        </Link>
      </p>
    </div>
  );
}

export default LogIn;
