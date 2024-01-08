const express = require('express')
const router = express.Router()

const Goal = require('../models/goalModel')

// which is a request we wanna listen for 
// get - read 
router.get('/',async (req,res) => {
    // this are endpoints
    // console.log(req.body) OR
    //  if(!req.body.text){
    //     res.json({message: 'please add a text field'})
    // }

   
    res.json({name:'goals'})
})

// post - create
router.post('/',(req,res) => {
    res.json({surname:'Set goal'})
})

//  put - uptade
// :id - is param
router.put('/:id', (req,res) => {
    res.json({message:`Uptade goal ${req.params.id}`})
})

router.delete('/:id', (req,res) => {
    res.json({message:`Delete goals ${req.params.id}`})
})

module.exports = router