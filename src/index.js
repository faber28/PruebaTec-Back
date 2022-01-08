const express = require('express');
const routes = require('./routes/index.js');

const app = express();

require('./db/index');

app.use(express.json());
app.use(routes);

app.listen(3000);