import React, {Component} from 'react';
import '../header/Header.css'
import { FaShoppingCart } from "react-icons/fa";
class Header extends Component {
    render() {
        return(
        <header>
        <div className="logo">SENTREM</div> 
        <div className="nav">
        <ul>
                <li><a href="#/">home</a></li>
                <li><a href="#/">shop</a></li>
                <li className="scart"><a href="#bottom"><FaShoppingCart /></a></li>
        </ul>
        </div>
      </header>
        )
    }

}

export default Header;