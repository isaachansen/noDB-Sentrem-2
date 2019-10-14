import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Slider from './components/Slider/Slider'
import Shop from './components/Shop/Shop'
// import axios from 'axios';

class App extends React.Component {


  render() {
  return (
    <div>
      <Header />
      <Slider />
      <Shop />
    </div>
  );
  }
}

export default App;
