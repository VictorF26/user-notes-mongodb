const express = require('express')
const cors = require('cors')
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(cors()); //permite cambiar info entre dos servidores
app.use(express.json()); // entiende formato json

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));

module.exports = app;