const mongosse=require("mongoose")

const connectDB=mongosse.connect('mongodb://localhost:27017/payment')
.then(()=>{
    console.log("DB Connect")
})
.catch((e)=>{
    console.log("Conncetion Faild")
})
module.exports=connectDB