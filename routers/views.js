const express = require('express')
const router = express.Router()
const path = require('path')
const hours=(new Date().getHours())
const days=(new Date().getDay())
console.log(days)
console.log(hours)
//Middleware
const condition = (req, res, next)=> {
if (hours>9 && hours<18 && [1,2,3,4,5].find(element => element === days)) 
{
         console.log('we are opened')
         next();
    }

    else {console.log('we are closed');

    }
}

router.get('/',condition,(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','home.html'))
})
router.get('/Contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','Contact.html'))
})
router.get('/Services',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','Services.html'))
})

module.exports=router