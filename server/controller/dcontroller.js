const itemsData = require('../data.json')
const cart = []
// const userCart = []


module.exports = {
getAllItems: (req, res, next) => {
    res.status(200).send(itemsData)
},

getItemsById: (req, res, next) => {
    const {id} = req.params;
// console.log(id)
    const index = itemsData.findIndex(element => {
        return element.id === parseInt(id)
    })
// console.log(index)
    if(index !== -1) {
        res.status(200).send(itemsData[index])
    } else {
        res.status(404).send("Data not found")
    }
},

PushIntoCart: (req, res, next) => {
   
    const {id, brandName, clothingName, clothingImage, price, description, quantityInCart} = req.body;
    // console.log(id, brandName, clothingName, clothingImage, price, description, quantityInCart)
      cart.push({id, brandName, clothingName, clothingImage, price, description, quantityInCart});
      res.status(200).send(cart);
    },

// updateQuantity: (req, res, next) => {
//     const {index} = req.params;
//     const {new_quantity} = req.body;
//     console.log("this is the muthafuckin cart", cart)
//     if(new_quantity === cart[index].quantityInCart) {
//         res.status(200).send(cart)
//     }
//     if(index >= 0 && new_quantity >= 0 && new_quantity <= 10) {
//         cart[index].quantityInCart = new_quantity
//         res.status(200).send(cart) 
//     } else {
//         res.status(404).send("Too Many Items")
//     }
// },

updateQuantity: (req, res , next) => {
    const {id} = req.params;
    const index = cart.findIndex(quantity => {
        return quantity.id === parseInt(id);
    });
    if(index !== -1) {
        cart[index].quantityInCart++;
        res.status(200).send(cart)
    } else {
        res.status(404).send("could not update quantity")
    }
    
},
deleteCart: (req, res, next) => {
    const deleteId = req.params.id;
    const itemIndex = cart.findIndex(item => item.id === +deleteId)
    cart.splice(itemIndex, 1);
    res.status(200).send(cart)
},
};