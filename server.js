// mkdir myApi
// cd myApi
// npm init -y
// npm install express
// to run at the end: node server.js
// server.js

const express = require('express');
const app = express();

const PORT = 3000;

let items = [];

app.use(express.json());

// Get all items
app.get('/items', (req, res) => {
    res.json(items);
});

// Add a new item
app.post('/items', (req, res) => {
    const item = req.body.name;
    items.push(item);
    res.json({ message: "Item added", item });
});

// Update an item
app.put('/items/:id', (req, res) => {
    const id = req.params.id;
    const newItem = req.body.name;
    items[id] = newItem;
    res.json({ message: "Item updated", item: newItem });
});

// Delete an item
app.delete('/items/:id', (req, res) => {
    const id = req.params.id;
    const deletedItem = items.splice(id, 1);
    res.json({ message: "Item deleted", item: deletedItem });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
