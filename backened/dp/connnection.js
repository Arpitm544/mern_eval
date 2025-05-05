const mongoose=require('mongoose')

let mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/mernevalution'
console.log(process.env.MONGO_URL)
mongoose.connect(mongoUrl)
.then(() => {
    console.log("conected to MondoDB")
}).catch((err) => {
    console.log(err)
});