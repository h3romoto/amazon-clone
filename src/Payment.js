import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct'
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className='payment'>
      <div className='paymnent_container'>
        {/* Delivery address */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>
              { user?.email }
            </p>
            <p>1500 St. Olaf Avenue</p>
            <p>MN, USA, 55057</p>
          </div>
        </div>
        {/* Review items */}
        <div className='payment__section'>
          <div className='payment_title'>
            <h3>Review items and delivery</h3>
            <div className='payment__items'>
              {basket.map(item => (
                // re-use checkout component
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>
        </div>
        <div className='payment__section'>

        </div>
        {/* Payment method */}
      </div>
    </div>
  )
}

export default Payment