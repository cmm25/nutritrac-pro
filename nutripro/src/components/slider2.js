import Peanuts from'../images/nuts.jpg'
import './slide1.css'
function Slider2(){
    return(
        <div className="slide" data-aos="fade-right">
            <img src={Peanuts} alt="" />
            <div>
            <h2>Peanuts</h2>
            <p>
             Peanuts are a common allergy across the world, 1 in 200 adults on average have one. Peanut allergies can cause hives and swelling of the skin, and shortness of breath, and are sometimes so severe that any contact with peanuts may set off the symptoms.
            </p>
        
            </div>
      </div>
    )
}
export default Slider2;