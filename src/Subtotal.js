import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'

function Subtotal() {
  return (
    <div className='subtotal__container'>
      <CurrencyFormat
        renderText={(value) => (
          // <></> is a fragment for rendering multiple components via same route
          <>
            <p className='subtotal_items'>
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className='subtotal__gift'>
              <input type="checkbox" />
                This order contains a gift.
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
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