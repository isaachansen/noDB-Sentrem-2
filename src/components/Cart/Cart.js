import React from 'react';
import './Cart.css'
// import Shop from '../Shop/Shop'
// import axios from 'axios'

const Cart = (props) => {
        console.log("PROPS =", props)
        return (
        //     <div className="cart-outline">
        //         <div className="title-cart">
        //    {/* <h1 className="cartName">SHOPPING CART</h1> */}
        //    </div>
        //     </div>
        // )
        <div key={props.id}>
        <div className="image-cart">
          <img
            className="cartIMG"
            src={props.image}
            alt=""
          />
        </div>
        <h2 className="brand-cart">{props.brandName}</h2>
        <h3 className="clothing-title-cart">{props.clothesName}</h3>
        <h2 className="price-cart">{props.price}</h2>

        <h3 className="description-cart">{props.description}</h3>
      </div>
        )
}

export default Cart; 