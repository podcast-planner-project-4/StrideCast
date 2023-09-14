function SignUp() {
  return (
    <div className="formPage">
      <div className="formContainer">
        <h2>Sign up</h2>
        <form>
          <input type="email" id="signUpEmail" placeholder="Email:" required></input>
          <div className="passwordContainer">
            <input type="password" id="signUpPassword" className="signUpPassword" placeholder="Password:"></input>
            <i class="fa-regular fa-eye-slash faVisible"></i>
          </div>
          <div className="confirmPasswordContainer">
            <input type="password" id="signUpConfirmPassword" className="signUpConfirmPassword" placeholder="Confirm password:"></input>
            <i class="fa-regular fa-eye-slash faVisible"></i>
          </div>
          <button type="submit">Create an account</button> 
        </form>
        <p>Already have an account? Log in.</p>
      </div>
      <p className="homeLink">Return home</p>
    </div>
  );
}

export default SignUp;
