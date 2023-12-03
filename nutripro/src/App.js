import React from 'react'
import Hero  from './components/hero'

import NavBar from './components/navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
    </div>
  );
}

export default App;
