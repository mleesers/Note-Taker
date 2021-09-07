const express = require('express');
const path = require('path');
const apiroute = require('./Develop/routes/apiroute.js');
const htmlroute = require('./Develop/routes/htmlroute.js');

const PORT = process.env.port || 3001;

const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/api', apiroute);
app.use('/', htmlroute);





app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
