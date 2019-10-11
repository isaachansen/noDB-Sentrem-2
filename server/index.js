const express = require('express');
const app = express();
app.use(express.json());

const {getAllItems, getItemsById} = require('./controller/dcontroller') 

app.get('/api/get_all_items', getAllItems);
app.get('/api/items/:id', getItemsById);

const port = 4200;
app.listen(port, () => {
    console.log(`App Listening on ${port}`)
}) 