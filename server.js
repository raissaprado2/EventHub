const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err));

// Rotas
app.get('/', (req, res) => res.send('API Funcionando'));

// Iniciar o servidor
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));


const eventRoutes = require('./routes/events');
app.use('/api', eventRoutes);
