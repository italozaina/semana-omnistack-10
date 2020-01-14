const express = require('express');

const app = express();

app.use(express.json()); // Entender requisições com JSON no body

// Métodos HTTP: GET, POST, PUT, DELETE

// TIpos de parâmetros:

// Query Params: request.query (Filtros, ordenação, paginação ...) ?search=Diego
// Route Params: request.params ex.: (Identificar um recurso na alteração ou remoção) http://localhost:3333/users/1    <- parametro direto na rota
// Body: request.body (Dados para criação ou alteração de um registro)

app.post('/users', (request, response) => {
    console.log(request.body)
    return response.json({message: 'Hello World'});
});

app.listen(3333);