import React from 'react'
import './App.css';
import Hero  from './components/hero'
import Search from './components/search'
import NavBar from './components/navbar';
import CardArea from'./components/cardarea';
import Footer from './components/footer';
import Card from './components/card'
import data from "./data"
import Sliders from "./components/sliders"


function App() {
  const cards = data.map(item => {
    return (
        <Card 
            img={item.coverImg}
            rating={item.description}
            title={item.title}
            
        />
    )
})        
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Search/>
      <CardArea/>
      <section className="cards-list">
        {cards}
      </section> 
      <Sliders/>
      <Footer/>
    </div>
  );
}

export default App;
