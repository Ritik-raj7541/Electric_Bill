const express = require('express')  ;
const router = express.Router() ;
const {
      getMaster,
      postMaster
} = require('../controlers/controls') ;

router.get('/', getMaster) ;
router.post('/', postMaster) ;

module.exports = router