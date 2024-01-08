require('dotenv').config();

const express = require('express'); 
const mongoose = require('mongoose'); 
const uri = process.env.ATLAS_URI; 
const port = process.env.PORT; 

mongoose.connect(uri);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error) 
})

database.once('connected', () => {
  console.log('Database Connected');
})

const app = express(); 
app.use(express.json()); 

const routes = require('./routes/routes');
app.use('/api', routes);

app.listen(port, () => {
  console.log(`listening on ${port}`)
})





