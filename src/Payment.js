import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider';

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
          </div>
        </div>
        {/* Review items */}
        <div className='payment__section'>

        </div>
        <div className='payment__section'>

        </div>
        {/* Payment method */}
      </div>
    </div>
  )
}

export default Payment