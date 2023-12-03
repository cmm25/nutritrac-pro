import Fish from'../images/fish.jpg'
import './slide1.css'
function Slider(){
    return(
        <div className="slide" data-aos="fade-right">
            <img src={Fish} alt="" />
            <div>
            <h2>Fish</h2>
            <p>
            Fish is a great source of protein and omega-3 fatty acids, which are essential for good health. According to the American Heart Association, you should eat at least two servings of fish each week.
            </p>
        
            </div>
      </div>
    )
}
export default Slider;