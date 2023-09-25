import StrideCast_purple from '../assets/StrideCast_purple.png'
const LandingPage = () => {

    return (
        <div className="landingPageContainer">
            <img src={StrideCast_purple} className="landingPageImg"></img>
            <h1 className='welcome'>Welcome to StrideCast</h1>
            <p className="info">[PROJECT IN DEVELOPMENT...]</p>
        </div>
    )
}

export default LandingPage;