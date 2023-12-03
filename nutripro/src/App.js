import React from 'react'
import './App.css';
import Hero  from './components/hero'
import Search from './components/search'
import NavBar from './components/navbar';
import cardArea from'./components/cardarea';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Search/>
      <Footer/>
    </div>
  );
}

export default App;
