const itemsData = require('../data.json')
const cart = require('../cart.json')

module.exports = {
getAllItems: (req, res, next) => {
    res.status(200).send(itemsData)
},

getItemsById: (req, res, next) => {
    const {id} = req.params;

    const index = itemsData.findIndex(element => {
        return element.id === parseInt(id)
    })

    if(index !== -1) {
        res.status(200).send(itemsData[index])
    } else {
        res.status(404).send("Data not found")
    }
},

PushIntoCart: (req, res, next) => {
     const {item} = req.body
}







}