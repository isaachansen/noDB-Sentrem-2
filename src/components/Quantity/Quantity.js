import React, {Component} from 'react';
// import axios from 'axios';


export default class Quantity extends Component {
    constructor(props) {
        super();
        this.state = { 
            quantity: 0
        }
        // this.updateQuantity = this.updateQuantity.bind(this);
        this.increment = this.increment.bind(this); 
        this.decrement = this.decrement.bind(this);
    }

// updateQuantity(index) {
//     const newQuantity = {
//         new_quantity: this.state.quantity
//     }
//     axios.put(`/api/update_quantity/${index}`, newQuantity).then(res => {
//         this.setState({
//             quantity: res.data
//         })
//     })
// }

increment() {
    this.setState({
      quantity: this.state.quantity + 1
    })
  }

decrement() {
    this.setState({
        quantity: this.state.quantity - 1
    })
}


    render() {
        // const {index} = this.props;
        const {quantity} = this.state;
        return(
            <div>
                <button onClick={this.decrement}>-</button>
                <div onChange={element => this.setState({
                    quantity: element.target.value
                })
            }>{quantity}</div>
                <button className="increment" onClick={this.increment}>+</button>
            </div>
        );
    }
}