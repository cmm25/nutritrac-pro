import "./hero.css"
import {Link} from 'react-scroll';
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
                <button className=" hero-button">
                <Link  to="bmi" 
                spy={true} 
                smooth={true} 
                offset={-55} 
                duration={500} >BMI CALCULATOR</Link>
                    
                </button>
            </div>  
            
            <div className="home-image-section">
             <img src={BannerImage} alt="" className="img-hero" />
            </div>
        </div>
    )
}
export default Hero