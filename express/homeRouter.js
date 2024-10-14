const express=require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.send('welcome from home ** get');
})

router.get('/vision',(req,res)=>{
    res.send('vesion is: ### ** get');
})

products=[{id:1,name:"product 1"},{id:2,name:"product 2"}]
router.post('/',(req,res)=>{
    // const {id,name} = req.body;
    // res.send(`your id ${id}`);
    console.log(req.body)
    // res.send('welcome from home ** post');
})


module.exports = router