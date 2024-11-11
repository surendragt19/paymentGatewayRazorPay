import React from 'react';
import Card from './Card';
import axios from 'axios';

const Home = () => {
  const checkoutHandler = async (amount) => {
    try {
        const {data:{key}}=await axios.get("http://localhost:3000/api/getKey")
      const { data:{order} } = await axios.post("http://localhost:3000/api/checkout", {
        amount,
      });
      const options = {
        key: key, // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Surendra",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "http://localhost:3000/api/paymentVarification/",
        prefill: {
            name: "Gaurav Kumar",
            email: "gaurav.kumar@example.com",
            contact: "9000090000"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#3399cc"
        }
    };
    var rzp1 = new window.Razorpay(options);
        rzp1.open();
    } catch (error) {
      console.error("Error in checkout:", error);
    }
  };

  return (
    <div className="home">
      <Card
        amount={5000}
        checkoutHandler={(amount) => checkoutHandler(amount)}
        img="https://images.golinks.io/blog/wp-content/uploads/2023/08/28145505/Blog-Header%402x-3-768x414.png"
      />
      <Card
        amount={4000}
        checkoutHandler={(amount) => checkoutHandler(amount)}
        img="https://images.golinks.io/blog/wp-content/uploads/2023/08/28145505/Blog-Header%402x-3-768x414.png"
      />
      <Card
        amount={8000}
        checkoutHandler={(amount) => checkoutHandler(amount)}
        img="https://images.golinks.io/blog/wp-content/uploads/2023/08/28145505/Blog-Header%402x-3-768x414.png"
      />
       <Card
        amount={200}
        checkoutHandler={(amount) => checkoutHandler(amount)}
        img="https://images.golinks.io/blog/wp-content/uploads/2023/08/28145505/Blog-Header%402x-3-768x414.png"
      />
    </div>
    
  );

};

export default Home;
