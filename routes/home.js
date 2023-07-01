const express = require('express')  ;
const router = express.Router() ;


router.get('/', (req, res) =>{
      console.log('hello everyone');
      res.status(200).json({messsage: "hello it is working"}) ;
}) ;

module.exports = router