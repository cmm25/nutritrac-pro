import Fish from'../images/fish.jpg'
import './slide1.css'
function Slider(){
    return(
        <div className="slide" data-aos="fade-right">
            <img src={Fish} alt="" />
            <div>
            <h2>Fish</h2>
            <p>
                A fish allergy can cause various symptoms, from mild, like hives and digestive discomfort, to severe, including anaphylaxis, shortly after consuming fish. Triggered by proteins in fish, even small amounts can pose significant risks, emphasizing the necessity of strict fish avoidance for those with this allergy.
            </p>
        
            </div>
      </div>
    )
}
export default Slider;