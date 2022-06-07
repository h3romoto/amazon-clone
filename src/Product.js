import React from 'react'
import './Product.css'

//use props for different products
function Product({ title, image, price, rating}) {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'> 
          {Array(rating)
            .fill()
            .map((_, i) => (
            <p>⭐️</p>
          ))}
        </div>
      </div>
      <img src='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg' alt='' />

      <button className='addTo__bucket'>
        Add to bucket
      </button>
    </div>
  )
}

export default Product