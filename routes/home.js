const express = require('express')  ;
const router = express.Router() ;
const {
      getHome,
      postHome
} = require('../controlers/controls') ;

router.get('/', getHome) ;
router.post('/', postHome) ;

module.exports = router