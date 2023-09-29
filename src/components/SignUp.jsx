import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, AuthErrorCodes } from "firebase/auth";
import { useState } from "react";
import { auth, database } from "../Firebase";
import { set, ref } from "firebase/database";
import Header from "./Header";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const navigate = useNavigate();

  const signUpUser = (e) => {
    e.preventDefault();
    if (password === confirmPassword && password.length >= 6) {
      createUserWithEmailAndPassword(auth, email, password, confirmPassword)
        .then((userCredential) => {
          const userUid = userCredential.user.uid;
          const userRef = ref(database, `users/${userUid}`);
          const userData = {
            email: email,
          };
          set(userRef, userData)
            .then(() => {
              console.log("data successfully saved");
              setPasswordErrorMessage("");
              navigate("/");
            })
            .catch((error) => {
              console.log("Error saving user data:", error);
            });
        })
        .catch((error) => {
          if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
            setPasswordErrorMessage(
              "Email already in use. Please use another email."
            );
          } else {
            console.log("error in creating user", error);
          }
        });
    } else {
      setPasswordErrorMessage(
        "Please check passwords and try again. Passwords must match and contain six or more characters."
      );
    }
  };

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="formPage">
      <Header />
      <div className="formContainer">
        <h2>Sign up</h2>
        <form onSubmit={signUpUser}>
          <input
            type="email"
            id="signUpEmail"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            ></input>
            <i
              className={`fa-regular ${
                passwordVisible ? "fa-eye" : "fa-eye-slash"
              } faVisible`}
              onClick={handlePasswordVisibility}
            ></i>
          </div>
          <div className="confirmPasswordContainer">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              id="signUpConfirmPassword"
              className="signUpConfirmPassword"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            ></input>
            <i
              className={`fa-regular ${
                confirmPasswordVisible ? "fa-eye" : "fa-eye-slash"
              } faVisible`}
              onClick={handleConfirmPasswordVisibility}
            ></i>
          </div>
          {<p className="formErrorMsg">{passwordErrorMessage}</p>}
          <button type="submit" className="signUpFormBtn">
            Create an account
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="linkToLogIn">
            Log in
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

export default SignUp;
