const express = require('express');

const app = express();

// Métodos HTTP: GET, POST, PUT, DELETE

// TIpos de parâmetros:

// Query Params: req.query (Filtros, ordenação, paginação ...)
// Route Params:
// Body

app.get('/users', (request, response) => {
    console.log(request.query)
    return response.json({message: 'Hello World'});
});

app.listen(3333);