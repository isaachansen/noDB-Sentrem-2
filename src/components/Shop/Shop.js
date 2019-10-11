import React, {Component} from 'react';
import axios from 'axios';
import './Shop.css';

class Shop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
    this.getAllItems = this.getAllItems.bind(this);
  }

  componentDidMount() {
    this.getAllItems();
  }

  getAllItems() {
    axios.get('/api/get_all_items').then(res => {
      this.setState({
        items: res.data
      })
    }).catch(err => console.log(err));
  }
    

    render() {
      const {items} = this.state
  console.log(items);
  const mappedItems = items.map(item => {
    return <div key={item.id}>
      <div className="image-container">
      <img className="image" src={item.clothingImage} alt="clothing for website"/>
      </div>
      <h2 className="brand">{item.brandName}</h2>
      <h3 className="clothing-title">{item.clothingName}</h3>
      <h2 className="price">{item.price}</h2>
      <button className="btn">Add To Cart</button>
    </div>
  })
      return(
        <div className="shop">
       <div className="title-shop">
           <h1 className="title">SHOP - FALL 2019</h1>
           </div>
         <div className="grid item-items">
         {mappedItems}
         </div>
        </div>
        );
    }
}

export default Shop;