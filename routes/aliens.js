const express = require('express')
const router = express.Router()
const User = require('../models/user')


router.get('/', async(req,res) => {
    try{
           const aliens = await User.find()
           res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const user = await User.findById(req.params.id)
           res.json(user)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const user = new User({
        name: req.body.name,
        password: req.body.password,
        role: req.body.role
    })

    try{
        const a1 =  await user.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const user = await User.findById(req.params.id) 
        user.sub = req.body.sub
        const a1 = await user.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router