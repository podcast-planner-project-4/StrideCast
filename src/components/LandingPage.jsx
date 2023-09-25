import strideCast_purple from '../assets/strideCast_purple.png';

const LandingPage = () => {

    return (
        <div className="landingPageContainer">
            <img className="landingPageImg" src={strideCast_purple}></img>
            <h1 className='welcome'>Welcome to StrideCast</h1>
            <p className="info">[PROJECT IN DEVELOPMENT...]</p>
        </div>
    )
}

export default LandingPage;