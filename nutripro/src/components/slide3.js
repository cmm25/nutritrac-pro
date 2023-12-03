import Milk from'../images/milk.jpg'
import './slide1.css'
function Slider3(){
    return(
        <div className="slide" data-aos="fade-right">
            <img src={Milk} alt="" />
            <div>
            <h2>Milk</h2>
            <p>
                Milk allergy can cause symptoms like hives, digestive issues, or even severe anaphylaxis shortly after consuming milk or its derivatives. This immune response is triggered by proteins in milk, such as casein and whey, making strict avoidance crucial for individuals with this allergy.
            </p>
            </div>
      </div>
    )
}
export default Slider3;