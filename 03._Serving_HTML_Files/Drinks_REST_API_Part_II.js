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

// Post Drinks

app.post('/drinks/create', (req, res) => {
    const { name, type, volume } = req.body;
    if (!name || !type || !volume) {
        return res.status(400).send('Missing drink data');
    }
    const newId = drinks.length > 0 ? Math.max(...drinks.map(d => d.id)) + 1 : 1;
    const newDrink = { id: newId, name, type, volume };
    drinks.push(newDrink);
    res.status(201).json(newDrink);
});

// Put Drinks

app.put('/updatedDrinks/:id', (req, res) => {
    const { id } = req.params;
    const { name, type, volume } = req.body;
    const drinkIndex = drinks.findIndex(d => d.id === parseInt(id));
    
    if (drinkIndex === -1) {
        return res.status(404).send('Drink not found');
    }
    
    const updatedDrink = { id: parseInt(id), name, type, volume };
    drinks[drinkIndex] = updatedDrink;
    res.status(200).json(updatedDrink);
});

// Delete Drinks

app.delete('/delectedDrinks/:id', (req, res) => {
    const { id } = req.params;
    const drinkIndex = drinks.findIndex(d => d.id === parseInt(id));
    
    if (drinkIndex === -1) {
        return res.status(404).send('Drink not found');
    }
    
    drinks = drinks.filter(d => d.id !== parseInt(id));
    res.status(204).send(); // No content to send back
});
