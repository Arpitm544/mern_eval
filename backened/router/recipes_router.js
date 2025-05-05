const express=require('express')
const { CreateRecipes, AllRecipes, UpdateRecipes, DeleteRecipes, getRecipesById } = require('../controller/recipes_constroller')
const router=express.Router()

router.post('/add',CreateRecipes)
router.get('/all',AllRecipes)
router.get('/:id',getRecipesById)
router.put('/update/:id',UpdateRecipes)
router.delete('/delete/:id',DeleteRecipes)

module.exports=router;
