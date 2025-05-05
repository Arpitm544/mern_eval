const mongoose=require('mongoose')
const Schema=mongoose.Schema
const RecipesSchema=new Schema({
    title:{
        type:String,
        require:true
    },
    ingredients:{
        type:String,
        require:true
    },
    steps:{
        type:String,
        require:true
    },
    cookingTime:{
        type:Number,
        require:true
    }
})
const Product=mongoose.model('Recipes',RecipesSchema)
module.exports=Product