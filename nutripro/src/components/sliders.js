import Slider from './slide1'
import Slider2 from './slider2'
import Slider3 from './slide3'
import './sliding.css'
function Sliders(){
    return(
        <div className="slider-container">
            <h1 id='section1'>Spotlight</h1>
            <Slider/>
            <Slider2/>
            <Slider3/>

        </div>
    )
}
export default Sliders;