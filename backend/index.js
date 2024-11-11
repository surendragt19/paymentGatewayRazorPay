const express = require('express')
const dotenv=require('dotenv')
const Razorpay=require('razorpay')
const cors=require('cors')
dotenv.config()
const paymentRouter=require('./routes/payement.route')
const connectDB=require('./config/db')
const app = express()


const port = process.env.port || 5000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api',paymentRouter)

app.get('/api/getKey',(req,res)=>{
    res.status(200).json({
       key:process.env.r_keyId,
      })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
