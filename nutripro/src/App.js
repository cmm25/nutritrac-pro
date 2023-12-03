import React from 'react'
import Hero  from './components/hero'
import Search from './components/search'
import NavBar from './components/navbar';
import cardArea from'./components/cardarea';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Search/>
    </div>
  );
}

export default App;
