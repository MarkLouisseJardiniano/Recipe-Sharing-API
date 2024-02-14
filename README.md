GroupName:Masarap
member: Mark Louisse Jardiniano
        Julius Murillo
        Ramon Jacob Laugo
        Ian Reniel Rey

Project Name: Recipe Sharing API

Purpose: The project aims to provide an API for managing recipes. It allows users to perform CRUD operations (Create, Read, Update, Delete) on recipes.

Features:
- Retrieve all recipes
- Retrieve a specific recipe by using ID or tags
- Add a new recipe
- Update an existing recipe
- Delete a recipe
- Advance search/Filtering option

Dependencies: Express.js: ^4.17.1

How to Set it Up Locally:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run npm install to install dependencies.
4. Start the server by running 'npm start' or 'node server.js'.
5. The server will start running on port 3000 by default. If you want to specify a different port, set the PORT environment variable.

Using the API Endpoints:
- GET /recipes: Retrieves all recipes.

- GET /recipes/:query: Retrieves a specific recipe by its ID or tags. Replace ':query' with the ID or tags you want to search for.

- POST /recipes: Adds a new recipe. Send a POST request with JSON data containing the recipe details ('title', 'ingredients', 'cookingStep', 'tags') in the request body.

- PUT /recipes/:id: Updates an existing recipe. Send a PUT request to /'recipes/:id' with the ID of the recipe you want to update. Include the updated recipe details in the request body.

- DELETE /recipes/:id: Deletes an existing recipe. Send a DELETE request to '/recipes/:id' with the ID of the recipe you want to delete.


Note: Make sure to replace ':id' and ':query' with the appropriate values when making requests to the API endpoints.
