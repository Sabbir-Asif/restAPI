const express = require('express')

const router = express.Router();

// Get 
router.get('/',(req,res,next) =>{
    res.status(200).json(
        {message: 'Hello, I am all contacts Get Route'}
    )
})

module.exports = router;