import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='checkout__container'>
      <div className='checkout__left'>
        <div className='checkout__ad'>
          <img 
            src='https://images-na.ssl-images-amazon.com/images/G/01/credit/img21/CBCC/banner-card-art/cbcc_prime_gray_naf-banner._CB627562113_.png'
            alt='' 
          />
        </div>
        <div>
          <h3 className='checkout__title'>
            <h4>{user?.email}</h4>
            Your Shopping Basket.
          </h3> 
          {basket.map( item => (
            <CheckoutProduct 
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            /> 
          ))}

          {/* CheckoutProduct */}
        </div>
      </div>

      <div className='checkout__right'>
          <Subtotal />
      </div>
    </div>
    
  )
}

export default Checkout 