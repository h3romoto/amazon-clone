import React from 'react'
import './Checkout.css'

function Checkout() {
  return (
    <div className='checkout__container'>
      <div className='checkout__left'>
        <div className='checkout__ad'>
          <img 
            src='https://images-na.ssl-images-amazon.com/images/G/01/credit/img21/CBCC/banner-card-art/cbcc_prime_gray_naf-banner._CB627562113_.png'
            alt='' 
          />
        </div>
      </div>
      <div>
        <h3 className='checkout__title'>
          Your Shopping Basket.
        </h3>
        {/* Basket item */}
        {/* Basket item */}
        {/* Basket item */}
        </div>

      <div className='checkout__right'>
        <h2>
          Checkout subtotal will go here
        </h2>
      </div>
    </div>
  )
}

export default Checkout 