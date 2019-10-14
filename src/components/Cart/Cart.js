import React from 'react';
import './Cart.css'
// import Quantity from '../Quantity/Quantity'
// import Shop from '../Shop/Shop'
// import axios from 'axios'


const Cart = (props) =>  {
        console.log("PROPS =", props)
        return (
        <div key={props.id}>
        <div className="cart-item">
          <img
            className="cartIMG"
            src={props.image}
            alt=""
          />
          <span className='quantity'>
            {/* <Quantity index={props.index}/> */}
          <button className='decrement'>-</button>
        <h2 className="quantity-cart">{props.quantity}</h2>
          <button className='increment'>+</button>
          </span>
        <h2 className="brand-cart">{props.brandName}</h2>
        <h3 className="clothing-title-cart">{props.clothesName}</h3>
        <h2 className="price-cart">{props.price}</h2>
        <h3 className="description-cart">{props.description}</h3>
        <div>
        </div>
        </div>
      </div>
    )
}

export default Cart; 