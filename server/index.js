const express = require('express');
const app = express();
app.use(express.json());

const {getAllItems, getItemsById, PushIntoCart, deleteCart, updateQuantity} = require('./controller/dcontroller') 

app.get('/api/get_all_items', getAllItems);
app.post('/api/items/:id', getItemsById);
app.post('/api/push_into_cart', PushIntoCart)
app.put('/api/update_quantity/:id/:change', updateQuantity)
app.delete('/api/delete_from_cart/:id', deleteCart)


const port = 4200;
app.listen(port, () => {
    console.log(`App Listening on ${port}`)
}) 