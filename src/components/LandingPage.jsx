import strideCastLogo from '../assets/strideCastLogo.png';

const LandingPage = () => {

    return (
        <div className="landingPageContainer">
            <img className="landingPageImg" src={strideCastLogo}></img>
            <h1 className='welcome'>Welcome to StrideCast</h1>
            <p className="info">[PROJECT IN DEVELOPMENT...OMG WHAT IS HAPPENING]</p>
        </div>
    )
}

export default LandingPage;