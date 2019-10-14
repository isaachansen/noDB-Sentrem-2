import React, { Component } from "react";
import axios from "axios";
import "./Shop.css";
import Cart from "../Cart/Cart";
// import Quantity from "../Quantity/Quantity"


class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      cart: []
    };
    this.getAllItems = this.getAllItems.bind(this);
    this.moveIntoCart = this.moveIntoCart.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
    // this.updateQuantity = this.updateQuantity.bind(this);
  }

  componentDidMount() {
    this.getAllItems();
    this.moveIntoCart();
    this.deleteFromCart();
  }

  getAllItems() {
    axios
      .get("/api/get_all_items")
      .then(res => {
        this.setState({
          items: res.data
        });
      })
      .catch(err => console.log(err));
  }

  moveIntoCart(brandName, clothingName, clothingImage, price, description, quantityInCart, id) {
    const cartItems = {
      id,
      brandName: brandName,
      clothingName: clothingName,
      clothingImage: clothingImage,
      price: price,
      description: description,
      quantityInCart: quantityInCart
    };
    console.log("Cart items", cartItems)
    axios.post("/api/push_into_cart", cartItems).then(res => {
      // console.log("this is post response", res.data);
      this.setState({
        cart: res.data
      });
    });
  }

  deleteFromCart(id) {
    axios.delete(`/api/delete_from_cart/${id}`).then(res => {
      this.setState({
        cart: res.data
      })
    }
    )}

    removeFromCart(index) {
      let copiedCart = [...this.state.cart];
      copiedCart.splice(index, 1);
      console.log(copiedCart)
      this.setState({
        cart: copiedCart
      })
    
    }

  //   updateQuantity(index) {
  //     const newQuantity = {
  //         new_quantity: this.state.quantity
  //     }
  //     axios.put(`/api/update_quantity/${index}`, newQuantity).then(res => {
  //         this.setState({
  //             cart: res.data
  //         })
  //     })
  // }

  // updateQuantity(id) {
  //   const newQuantity = {
  //           new_quantity: this.state.quantity
  //         }

  //   axios.put(`/api/update_quantity/${id}`).then(res => {
  //     this.props.newQuantity(res.data);
  //   })
  // }

  render() {
    const { items, cart } = this.state;
    const mappedItems = items.map(item => {
      return (
        <div key={item.id}>
          <div className="image-container">
            <img
              className="image"
              src={item.clothingImage}
              alt="clothing for website"
            />
          </div>
          <h2 className="brand">{item.brandName}</h2>
          <h3 className="clothing-title">{item.clothingName}</h3>
          <h2 className="price">{item.price}</h2>
          <button className="btn" onClick={() => this.moveIntoCart(item.brandName, item.clothingName, item.clothingImage, item.price, item.description, item.quantityInCart, item.id)}>
            ADD TO CART
          </button>
        </div>
      );
    });

    const mappedCart = cart.map((item, index) => {
      return (
        <div>
        <Cart 
          image={item.clothingImage}
          brandName={item.brandName}
          clothesName={item.clothingName}
          price={item.price}
          description={item.description}
          quantity={item.quantityInCart}
          // index={index}
          // deleteFromCart={this.deleteFromCart}
        />
        <button className="btn-delete" onClick={() => {this.deleteFromCart(item.id)}}>
          REMOVE
        </button>
        {/* <button className="btn-delete" onClick={() => this.updateQuantity(index)}>
          UPDATE QUANTITY
        </button> */}
        </div>
        
      )
    })
    console.log(this.state.cart)
    return (
      <div className="shop">
        <div className="title-shop">
          <h1 className="title">SHOP - FALL 2019</h1>
        </div>
        <div className="grid item-items">{mappedItems}</div>
        <div>
          <h1 className="cartName">SHOPPING CART</h1>
        </div>
        <div className="CartMaster">
          {mappedCart}
        </div>
      </div>
    );
  }
}

export default Shop;
