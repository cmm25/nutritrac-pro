import Peanuts from'../images/nuts.jpg'
import './slide1.css'
function Slider2(){
    return(
        <div className="slide" data-aos="fade-right">
            <img src={Peanuts} alt="" />
            <div>
            <h2>Peanuts</h2>
            <p>
                The numerous findings showing that peanuts help you manage your weight all fall in line with population studies showing that people who eat peanuts and peanut butter tend to have a lower Body Mass Index (BMI).
            </p>
        
            </div>
      </div>
    )
}
export default Slider2;