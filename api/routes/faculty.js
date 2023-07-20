const express = require('express')
const router = express.Router();

router.get('/',(req , res)=>{
    res.status(200).json({
        msg:'this is faculty get request shaikh Juned'
    })
})

router.post('/',(req , res)=>{
    res.status(200).json({
        msg:'this is faculty post request'
    })
})





module.exports = router;