const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.static('public'))
require('./routes/routes.js')(app);

app.listen(PORT);