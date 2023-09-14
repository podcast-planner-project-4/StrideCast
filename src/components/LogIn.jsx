function LogIn() {
  return (
    <div className="formPage">
      <div className="formContainer">
        <h2>Log in</h2>
        <form>
          <input type="email" id="logInEmail" placeholder="Email:" required></input>
          <div className="passwordContainer">
            <input type="password" id="signUpPassword" className="signUpPassword" placeholder="Password:"></input>
            <i class="fa-regular fa-eye-slash faVisible"></i>
          </div>
          <button type="submit">Log in</button> 
        </form>
        <p>Don't have an account? Sign up here.</p>
      </div>
      <p className="homeLink">Return home</p>
    </div>
  );
}

export default LogIn;
