// Create web server

const express = require('express');
const app = express();
const port = 3000;

// Create a route for GET /comments
app.get('/comments', (req, res) => {
  res.send('This is a GET request for /comments');
});

// Create a route for POST /comments
app.post('/comments', (req, res) => {
  res.send('This is a POST request for /comments');
});

// Create a route for PUT /comments
app.put('/comments', (req, res) => {
  res.send('This is a PUT request for /comments');
});

// Create a route for DELETE /comments
app.delete('/comments', (req, res) => {
  res.send('This is a DELETE request for /comments');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// To test the server, run node comments.js in the terminal and visit http://localhost:3000/comments in the browser. 
// You should see the message "This is a GET request for /comments" displayed on the page. 
// You can also test the other routes using tools like Postman or curl.

// In this example, we created a web server using Express and added routes for GET, POST, PUT, and DELETE requests to the /comments path. 
// We used the app.get(), app.post(), app.put(), and app.delete() methods to define routes for different HTTP methods. 
// Each route sends a different response based on the request method. 
// This is a simple example to demonstrate how to create routes for different HTTP methods in Express. 
// In a real-world application, you would typically have more complex logic in your route handlers to handle different types of requests.