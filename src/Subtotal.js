import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  const basketTotalValue = (basket) => {
    var basketTotal = 0; 

    basket.forEach(basket => {
        for (let key in basket) {
          if (key === "price"){
            basketTotal += parseInt(`${basket[key]}`);
            console.log(`${basket[key]}`);
          }
        }
    });

    console.log("Basket total: ", basketTotal)

    dispatch ({
      basketTotal: basketTotal,
    })
  }

  return (
    <div className='subtotal__container'>
      <CurrencyFormat
        renderText={(value) => (
          // <></> is a fragment for rendering multiple components via same route
          <>
            <p className='subtotal_items'>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type="checkbox" />
                This order contains a gift.
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button className='proceedTo__checkout'>
        Proceed to checkout 
      </button>
    </div>
  );
}

export default Subtotal;