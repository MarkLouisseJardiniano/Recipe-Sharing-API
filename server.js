const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Sample data: store recipes and users in an array
const recipes = require('./data/recipes');
const users = [];


// Routes
app.get('/register', (req, res) => {
    res.json(users);
});

// Register a new user
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Check if the username is already taken
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ message: 'Username already taken' });
    }

    // Create a new user object
    const newUser = {
        id: users.length + 1,
        username,
        password 
    };

    // Add the new user to the array
    users.push(newUser);

    // It will redirect to login
    res.redirect('http://localhost:3000/login');
});


app.get('/login', (req, res) => {
    res.json(users);
});


// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Find user by username
    const user = users.find(user => user.username === username);

    // Check if the user exists
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Check if the password matches
    if (user.password !== password) {
        return res.status(401).json({ message: 'Invalid password' });
    }

    // Return user information
    res.redirect('http://localhost:3000/recipes');
});


// Get all recipes
app.get('/recipes', (req, res) => {
    res.json(recipes);
});

// Get a specific recipe by ID or tags
app.get('/recipes/:query', (req, res) => {
    const query = req.params.query.toLowerCase();
    const recipe = recipes.filter((recipe) => recipe.id === parseInt(query) || recipe.tags.toLowerCase() === (query) || recipe.title.toLowerCase() === query);

    if (!recipe.length) {
        return res.status(404).json({ message: 'This recipe does not exist' });
    }
    res.json(recipe);
});

// Add a new recipe
app.post('/recipes', (req, res) => {
    const { title, ingredients, cookingStep, tags } = req.body;
    const newRecipe = {
        id: recipes.length + 1,
        title: title,
        ingredients: ingredients,
        cookingStep: cookingStep,
        tags: tags
    };
    recipes.push(newRecipe);
    res.status(201).json(newRecipe);
});

// Update a recipe
app.put('/recipes/:id', (req, res) => {
    const id = req.params.id;
    const { title, ingredients, cookingStep, tags } = req.body;

    const index = recipes.findIndex(recipe => recipe.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ message: 'This recipe does not exist' });
    }
    
    recipes[index].title = title;
    recipes[index].ingredients = ingredients;
    recipes[index].cookingStep = cookingStep;
    recipes[index].tags = tags;

    res.json(recipes[index]);
});

// Delete a recipe
app.delete('/recipes/:id', (req, res) => {
    const id = req.params.id;
    const recipeIndex = recipes.findIndex(recipe => recipe.id === parseInt(id));

    if (recipeIndex === -1) {
        return res.status(404).json({ message: 'This recipe does not exist' });
    }
    const deletedRecipe = recipes.splice(recipeIndex, 1);
    res.json(deletedRecipe);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
