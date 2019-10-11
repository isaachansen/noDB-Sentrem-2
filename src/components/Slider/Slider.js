import React, {Component} from 'react';
import Arrow from '../images/arrow.svg'
import LeftArrow from '../images/arrow-left.svg'
import './Slider.css'

class Slider extends Component {
    render() {
      return (
       <div className="content">
        <img src={LeftArrow} className="arrow-2" alt="arrow-right"/>
        <img src={Arrow} className="arrow-1" alt="arrow-left"/>
      </div>
        );
    }
}

export default Slider;

