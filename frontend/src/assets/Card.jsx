import React from 'react'

const Card = ({ amount, checkoutHandler, img }) => {
  return (
    <div className="card">
      <img src={img} alt="product" style={{ width: 150, height: 150 }} />
      <h2>{amount}</h2>
      <button onClick={() => checkoutHandler(amount)}>Buy Now</button>
    </div>
  )
}

export default Card