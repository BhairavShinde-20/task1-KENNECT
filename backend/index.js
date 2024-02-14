// index.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./Routes/routes');
const cors = require('cors'); 


const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/super_smart_appointment_system', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
