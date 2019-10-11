import React, { Component } from "react";
import axios from "axios";
// import Cart from "../Cart/Cart";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }

  // componentDidMount() {
  //     this.
  // }

  moveIntoCart(item) {
    console.log(item, "this is the item");
    const cartItems = {
      test: "TEST"
    };
    axios.post("/api/push_into_cart", cartItems).then(res => {
      console.log("this is post response", res.data);
      this.setState({
        cart: res.data
      });
    });
  }

  render() {
    const { item, cart } = this.state;
    const mappedCart = item.map(element => {
      console.log("Shopping Cart", cart);
      console.log("this is element id", element.id);
      return (
        <div key={element.id}>
          <div>{item.clothingImage}</div>
          <div>{item.brandName}</div>
          <div>{item.clothingName}</div>
          <div>{item.price}</div>
          <div>{item.description}</div>
          <div>{item.quantity}</div>
        </div>
      );
    });
    return <div>{mappedCart}</div>;
  }
}

// render() {
// const {item, cart} = this.state;
// const mappedCart = item.map((element) => {
//   console.log('Shopping Cart', cart)
//   console.log("this is element id", element.id)
//   return (
//     <div key={element.id}>
//         <div>{item.clothingImage}</div>
//         <div>{item.brandName}</div>
//         <div>{item.clothingName}</div>
//         <div>{item.price}</div>
//         <div>{item.description}</div>
//         <div>{item.quantity}</div>
//     </div>
//   );
// })
//     return (
//         <div>
//             {mappedCart}
//         </div>
//     )
//     }
