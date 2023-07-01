//it is a logic page

// 1. GET /api/home
const getHome =(req, res) => {
      res.status(200).json({messsage: "hello it is working"}) ;
}

// 2. POST /api/home
const postHome = (req, res) => {
      console.log(req.body);
      const {name, roll} = req.body ;
      if(!name || !roll){
            res.status(400) ;
            throw new Error("All fields are mandatory !") ;
      }
      res.status(201).json({messsage :"new user created"}) ;
}

module.exports = {getHome, postHome} ;