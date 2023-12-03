import React from 'react'
import './App.css';
import Hero  from './components/hero'
import NavBar from './components/navbar';
import Footer from './components/footer';
import Sliders from "./components/sliders"



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
      <Footer/>
    </div>
  );
};

export default App;
