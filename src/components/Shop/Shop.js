import React, { Component } from "react";
import axios from "axios";
import "./Shop.css";
import Cart from "../Cart/Cart";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      cart: []
    };
    this.getAllItems = this.getAllItems.bind(this);
    this.moveIntoCart = this.moveIntoCart.bind(this);
  }

  componentDidMount() {
    this.getAllItems();
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

  moveIntoCart(brandName, clothingName, clothingImage, price, description) {
    // console.log("CART START")
    // console.log("brandName =", brandName)
    // console.log("clothingImage =", clothingImage)
    const cartItems = {
      brandName: brandName,
      clothingName: clothingName,
      clothingImage: clothingImage,
      price: price,
      description: description
    };
    axios.post("/api/push_into_cart", cartItems).then(res => {
      // console.log("this is post response", res.data);
      this.setState({
        cart: res.data
      });
    });
  }

  render() {
    const { items, cart } = this.state;
    const mappedItems = items.map(item => {
      // console.log("ITEM =", item.clothingImage)
      // let test1 = {
      //   brandName: item.brandName,
      //   clothingName: item.clothingName,
      //   clothingImage: item.clothingImage,
      //   price: item.price,
      //   description: item.description
      // };
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
          <button className="btn" onClick={() => this.moveIntoCart(item.brandName, item.clothingName, item.clothingImage, item.price, item.description)}>
            Add To Cart
          </button>
        </div>
      );
    });

    const mappedCart = cart.map(item => {
      console.log("CART =", cart)
      console.log("ITEM =", item)
      return (
        <Cart 
          image={item.clothingImage}
          brandName={item.brandName}
          clothesName={item.clothingName}
          price={item.price}
          description={item.description}
          quantity={item.quantityInCart}
        />
      )
    })
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
