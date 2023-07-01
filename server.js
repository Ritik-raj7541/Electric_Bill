const express = require('express') ;
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config() ;


const app = express() ;
const port = 5000 ;

app.use(express.json()) ;
app.use('/api/home', require('./routes/home')) ;
app.use(errorHandler) ;



app.listen(port, () =>{
      console.log('server is running on port 5000');
}) ;