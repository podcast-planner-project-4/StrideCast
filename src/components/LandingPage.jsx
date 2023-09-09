import strideCastLogo from '../assets/strideCastLogo.png';

const LandingPage = () => {

    return (
        <div className="landingPageContainer">
            <img className="landingPageImg" src={strideCastLogo}></img>
            <h1 className='welcome'>Welcome to StrideCast</h1>
            <p className="info">Calvin what should we put here? Probs want something catchy and informative about the product.</p>
        </div>
    )
}

export default LandingPage;