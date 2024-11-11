const express=require('express')
const router=express.Router()
const {checkoutController,paymentVarificationController}=require('../controller/payment.controller')

router.post('/checkout',checkoutController)
router.post('/paymentVarification',paymentVarificationController)
module.exports=router