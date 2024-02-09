const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Storage for drinks
let drinks = [
    { id: 1, name: 'Coca-Cola', type: 'Soda', volume: '355ml' },
    { id: 2, name: 'Pepsi', type: 'Soda', volume: '355ml' },
];

// GET all drinks
app.get('/drinks', (req, res) => {
    res.status(200).json(drinks);
});

// GET a single drink by id
app.get('/drinks/:id', (req, res) => {
    const { id } = req.params;
    const drink = drinks.find(d => d.id === parseInt(id));

    if (!drink) {
        return res.status(404).send('Drink not found');
    }

    res.status(200).json(drink);
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
