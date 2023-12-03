import "./hero.css"
import BannerImage from "../images/home-banner-image.png";
function Hero(){
    return(
        <div className="banner-container">
            <div className="home-text-section">
                <h1 className="primary-heading">
                  Your Recommended Meal plans
                </h1>
                <p className="primary-text">
                    Healthy foods per your given diagnosis.
                </p>
            </div>  
            <div className="home-image-section">
             <img src={BannerImage} alt="" />
            </div>
        </div>
    )
}
export default Hero