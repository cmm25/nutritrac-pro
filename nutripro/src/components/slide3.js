import Milk from'../images/milk.jpg'
import './slide1.css'
function Slider3(){
    return(
        <div className="slide" data-aos="fade-right">
            <img src={Milk} alt="" />
            <div>
            <h2>Milk</h2>
            <p>
                Drinking milk has long been associated with healthy bones. This is due to its powerful combination of nutrients, including calcium, phosphorus, potassium, protein and (in grass-fed, full-fat dairy) vitamin K2.
            </p>
            </div>
      </div>
    )
}
export default Slider3;