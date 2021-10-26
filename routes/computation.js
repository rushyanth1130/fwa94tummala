var express=require('express')

var router=express.Router();

router.get('/',(req,res)=>{
    let randNumber=Math.floor(Math.random()*1000)
    let arg=req.query.arg1
    console.log(arg)
    res.render('computation',{
        ans1:`cos applied to ${randNumber} is ${Math.cos(randNumber)}`,
        ans2:` cos applied to ${arg} is ${Math.cos(arg)}`
    })
})

module.exports=router