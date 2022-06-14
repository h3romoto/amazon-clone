import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='checkoutProduct__container'>
      <div className='checkoutProductImage__cointainer'>
        <img className='checkoutProduct__image' src={image} alt="" 
        />
      </div>

      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>
          {title}
        </p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkouProduct__rating'> 
          {Array(rating)
            .fill()
            .map((_, i) => (
            <p>⭐️</p>
          ))}
        </div>
        <button> Remove from basket </button>
      </div>
    </div>
  )
}

export default CheckoutProduct