const express = require('express');
const routes = require('./routes/index.js');
const cors = require('cors');

const app = express();
app.use(cors());

require('./db/index');

app.use(express.json());
app.use(routes);

app.listen(5000);