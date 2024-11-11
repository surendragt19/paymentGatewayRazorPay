const Razorpay = require('razorpay');
const dotenv = require('dotenv');
dotenv.config();

const instance = new Razorpay({
    key_id: process.env.r_keyId,
    key_secret: process.env.r_keySec,
});

module.exports = instance;
