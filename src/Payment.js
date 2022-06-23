import React, {useState} from 'react'
import './Payment.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';
import CheckoutProduct from './CheckoutProduct'
import { Link } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';


function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceed] = useState(false);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = e => {

  }

  const handleChange = e => {
    
  }

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout (
            <Link to='/checkout'>
              {basket?.length} items
            </Link>
          )
        </h1>

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
        
        {/* Payment method */}
        <div className='payment__section'>
          <div className='payment_title'>
            <h3>Payment method</h3>
          </div>
          <div className='payment__details'>
              {/* Stripe will go here */}
              <form onSubmit={handleSubmit}>
                  <CardElement onChange={handleChange}/>
                  <div className='payment__priceContainer'>
                    <CurrencyFormat
                      renderText={(value) => (
                        <h3>Order total: {value} </h3>
                      )}
                      decimalScale={2}
                      value={getBasketTotal(basket)}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                    <button disabled={processing || disabled || succeeded}>
                      <span>
                        { processing? <p>Processing</p> : "Buy Now"}
                        </span>
                    </button>
                  </div>
                  {/* Errors */}
                  { error && <div>{error}</div>}
              </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Payment