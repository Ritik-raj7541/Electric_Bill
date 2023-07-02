const asyncHandler = require('express-async-handler') ;
//it is a logic page

// 1. GET /api/home
const getMaster = asyncHandler(async (req, res) => {
      res.status(200).json({messsage: "hello it is working"}) ;
})

// 2. POST /api/home
const postMaster = asyncHandler(async (req, res) => {
      console.log(req.body);
      const {
            Code,
            Name,
            Dept,
            PrevBalance,
            Location,
            LastReading,
            MeterCharge,
            UnitRate,
            LastDate,
            Allocation,
            LastPaymentDate,
      } = req.body ;
      if(!Code || !Name || !Dept || !PrevBalance || !Location || !LastReading || !MeterCharge || !UnitRate || !LastDate || !Allocation || !LastPaymentDate){
            res.status(400) ;
            throw new Error("All fields are mandatory !") ;
      }
      res.status(201).json({messsage :"new master table added"}) ;
})

module.exports = {getMaster, postMaster} ;