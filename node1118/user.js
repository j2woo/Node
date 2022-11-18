
const express = require('express');

const router =express.Router();

router.get('/',(req,res)=>{
    res.send('Hello User');
});
router.get('/register',(req,res)=>{
    res.send('유저레지스터');
});
module.exports=router;