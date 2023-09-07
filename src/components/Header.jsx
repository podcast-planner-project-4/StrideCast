import strideCastLogo from '../assets/strideCastLogo.png';

const Header = () => {

    return (
        <>
        <header>
            <div className="wrapper headerContainer">
                <div className="logoContainer">
                    <div>
                        <img className="logo" src={strideCastLogo}></img>
                    </div>
                    <p class="logoWord">StrideCast</p>
                </div>
                <div className="topNavBtns">
                    <button className="signUpBtn">Sign up</button>
                    <button className="logInBtn">Log in</button>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header;