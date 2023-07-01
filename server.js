const express = require('express') ;
const dotenv = require('dotenv').config() ;


const app = express() ;
const port = 5000 ;

app.use(express.json()) ;
app.use('/api/home', require('./routes/home')) ;



app.listen(port, () =>{
      console.log('server is running on port 5000');
}) ;