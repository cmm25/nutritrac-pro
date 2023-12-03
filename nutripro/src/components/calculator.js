import { useState } from 'react';
import './calc.css';
function Bmi(){
    const[weight, setWeight]= useState(0);
    const [height,setHeight] =useState(0) ;
    const [bmi, setBmi] = useState('')
    const [message, setMessage] = useState('')
    
    let calculateBmi=(event)=>{
        event.preventDefault()
    
    if (weight === 0 || height === 0) {
        alert('Please enter a valid weight and height')
      } else {
        let bmi = (weight / (height * height) * 703)
        setBmi(bmi.toFixed(1))
      }
    }

        if(bmi<25){
            setMessage("Your are underweight")
        }else if(bmi>=25 && bmi < 30 ){
            setMessage("You are within a healthy range")
        }else{
            setMessage("You are overweight")
        }
    

    let imgSrc;

    if (bmi < 1) {
    imgSrc = null
    } else {
    if(bmi < 25) {
        imgSrc = require('../images/underweight.png')
    } else if (bmi >= 25 && bmi < 30) {
        imgSrc = require('../images/healthy.png')
    } else {
        imgSrc = require('../images/overweight.png')
    }
}
    let reload=()=>{
        window.location.reload();
    }
    return(
        <div className="bmi-section">
          <div className='container'>
            <h2 className='center'>BMI Calculator</h2>
            <form onSubmit={calculateBmi}>
              <div>
                <label>Weight (lbs)</label>
                <input value={weight} onChange={(e) => setWeight(e.target.value)} />
              </div>
              <div>
                <label>Height (in)</label>
                <input value={height} onChange={(event) => setHeight(event.target.value)} />
              </div>
              <div>
                <button className='btn' type='submit'>Submit</button>
                <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
              </div>
            </form>
    
            <div className='center'>
              <h3>Your BMI is: {bmi}</h3>
              <p>{message}</p>
            </div>
    
            <div className='img-container'>
              <img src={imgSrc} alt=''></img>
            </div>
          </div>
      </div>


    );
}
export default Bmi;