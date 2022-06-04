import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>The lean startup</p>
        <p className='product__price'>
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className='product__rating'> 
          <p> &#9733; &#9733; &#9733; &#9733;</p>
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