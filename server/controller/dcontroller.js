const itemsData = require('../data.json')
const cart = require('../cart.json')


module.exports = {
getAllItems: (req, res, next) => {
    res.status(200).send(itemsData)
},

getItemsById: (req, res, next) => {
    const {id} = req.params;
console.log(id)
    const index = itemsData.findIndex(element => {
        return element.id === parseInt(id)
    })
console.log(index)
    if(index !== -1) {
        res.status(200).send(itemsData[index])
    } else {
        res.status(404).send("Data not found")
    }
},

PushIntoCart: (req, res, next) => {
    const {id} = req.body;
      const index = itemsData.findIndex(element => {
        return element.id === parseInt(id)
    })

      const addItemToCart = itemsData[index]
      
      cart.push(addItemToCart);
      res.status(200).send(cart);
      console.log(cart)
    },


}