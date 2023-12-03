import React from 'react'
import Hero  from './components/hero'
import NavBar from './components/navbar';
import Footer from './components/footer';
import Sliders from "./components/sliders";
import Bmi from "./components/calculator"
import './App.css';


function App() {
 /* const cards = data.map(item => {
    return (
        <Card 
            img={item.coverImg}
            rating={item.description}
            title={item.title}
            
        />
    )
})   */     
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Sliders/>
      <Bmi/>
      <Footer/>
    </div>
  );
};

export default App;
