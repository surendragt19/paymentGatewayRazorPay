const instance = require('../config/razorpayInstace'); 
const crypto = require('crypto');
const dotenv=require('dotenv')
dotenv.config()
const paymentModel=require('../model/paymentModel')
const checkoutController=async (req,res)=>{
    try {
      const {amount}=req.body;
      const options = {
        amount: amount*100,
        currency: "INR",
      };
      const order=await instance.orders.create(options)
      console.log(order)
    res.status(200).json({
      success:true,
      order,
      
    })
    } catch (error) {
      console.log(error)
    }
}

const paymentVarificationController=async(req,res)=>{
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const generatedSignature = crypto
    .createHmac('sha256', process.env.r_keySec)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest('hex');
    console.log("Old Key",razorpay_signature)
    console.log("Genrated Key",generatedSignature)
    const isAuthuticate= generatedSignature === razorpay_signature;

  if(isAuthuticate) {

await paymentModel.create({
    razorpay_order_id, 
    razorpay_payment_id,
    razorpay_signature
    })

    res.status(200).json({ success: true, message: 'Payment signature verified successfully' });
  } else {
    res.status(400).json({ success: false, message: 'Invalid signature' });
  }

}
module.exports={checkoutController,paymentVarificationController}

