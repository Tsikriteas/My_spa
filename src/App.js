import React from 'react';
import './App.css';
import Header from './components/Header';
import Room from './components/Room';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Room />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;