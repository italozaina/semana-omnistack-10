const express = require('express');

const app = express();

// Métodos HTTP: GET, POST, PUT, DELETE

// TIpos de parâmetros:

// Query Params: request.query (Filtros, ordenação, paginação ...) ?search=Diego
// Route Params: request.params ex.: (Identificar um recurso na alteração ou remoção) http://localhost:3333/users/1    <- parametro direto na rota
// Body

app.delete('/users/:id', (request, response) => {
    console.log(request.params)
    return response.json({message: 'Hello World'});
});

app.listen(3333);