import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct({ id, image, title, price, rating }) {
  return (
    <div className='checkoutProduct__container'>
      <img className='checkoutProduct__image' src={image} alt="" />

      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>
          {title}
        </p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className='product__rating'> 
          {Array(rating)
            .fill()
            .map((_, i) => (
            <p>⭐️</p>
          ))}
        </div>
        <button>
          Remove from basket
        </button>
    </div>
  )
}

export default CheckoutProduct