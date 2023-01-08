const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const PORT = 3000;
const connect = require('./db/connect');
const admin = require('./routes/admin');
const enseignant = require('./routes/enseignant');
const etudiant = require('./routes/etudiant');

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(morgan('dev'));
  

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my rest API !' });
});
app.use('/api', admin);
app.use('/api', etudiant);
app.use('/api', enseignant);
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on http://localhost: "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);