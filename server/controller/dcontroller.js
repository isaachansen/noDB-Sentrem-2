const itemsData = require('../data.json')
const cart = require('../cart.json')
// const userCart = []

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
    console.log("REQ.BODY =", req.body)
    console.log("TYPE =", typeof req.body)
      cart.push(req.body);
      res.status(200).send(cart);
    },

deleteCart: (req, res, next) => {
    const deleteId = req.params.id;
    const itemIndex = cart.findIndex(item => itemsData.id === deleteId)
    cart.splice(itemIndex, 1);
    res.status(200).send(cart)
},
};