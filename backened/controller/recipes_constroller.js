const Product=require('../model/recipes_model')

const CreateRecipes=async(req,res)=>{
    try{
    const {title,ingredinents,steps,cookingTime}=req.body

    const newProduct=new Product({
        title,
        ingredinents,
        steps,
        cookingTime
    })
    const savedProduct=await newProduct.save()
    res.json({success:true,data:savedProduct})
}
catch(err){
    console.log("Erros is ",err)
}
}
const AllRecipes=async(req,res)=>{
    const result=await Product.find()

    res.json({data:result})
}
const getRecipesById=async(req,res)=>{
    const id=req.params.id
   
    const result=await Product.findById(id)
   
    if(!result)
    {
        return res.status(404).json({ message: "Product not found" });
    }
    res.json({success:true,data:result})
}

const UpdateRecipes=async(req,res)=>{

    const id=req.params.id
    const result=await Product.findByIdAndUpdate(id,req.body,{new:true})
    if(!result)
    {
        return res.status(404).json({ message: "Product not found" });
    }
    res.json({success:true,data:result})
}

const DeleteRecipes=async(req,res)=>{
    const id=req.params.id

    const result=await Product.findByIdAndDelete(id,{new:true})

    if(!result)
    {
        return res.status(404).json({ message: "Product not found" });
    }
    res.json({success:true,data:result})
}
module.exports={CreateRecipes,AllRecipes,UpdateRecipes,DeleteRecipes,getRecipesById}