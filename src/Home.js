import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' 
          src='https://m.media-amazon.com/images/I/A1o-1kou5CL._SX3000_.jpg' alt='' 
        />

        <div className='home__row'>
          <Product 
            id='4903850'
            title='The lean startup'
            price={18.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg' 
            rating={4}
            />
          <Product 
            id='4903851'
            title='SANSUI ES40V1FA, 40 inch 1080p FHD Smart LED Android TV with Google Assistant(Voice Control), Screen Share, HDMI, USB(2022 Model-Android 11 OS)'
            price={233.99}
            image='https://m.media-amazon.com/images/I/71aiOe2eN8L._AC_UY436_FMwebp_QL65_.jpg'
            rating={4}
          />
          <Product 
            id='4903852'
            title='Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)'
            price={299.00}
            image='https://m.media-amazon.com/images/I/61-PblYntsL._AC_SX679_.jpg'
            rating={5}
          />
        </div>

        <div className='home__row'>
        {/* <Product 
            id='4903853'
            title='Echo Dot (4th gen) with clock | Smart bedside speaker with Bluetooth and Alexa | Glacier White'
            price={49.99}
            image='https://m.media-amazon.com/images/I/51MzOVciT3L._AC_UY436_FMwebp_QL65_.jpg'
            rating={5}
          /> */}
          {/* <Product 
            id='4903854'
            title='Funko POP! Marvel: Black Panther Movie - Black Panther (Styles May Vary) Collectible Figure Grey, 2.5 x 2.5 Inch'
            price={13.00}
            image='https://m.media-amazon.com/images/I/51kOiW9P1-L._AC_SY879_.jpg'
            rating={5}
          /> */}
          {/* <Product 
            id='4903855'
            title=''
            price={}
            image=''
            rating={}
          /> */}
        </div>

        <div className='home__row'>
        {/* <Product 
            id='4903856'
            title=''
            price={}
            image=''
            rating={}
          /> */}
        </div>
      </div>
    </div>
  )
}

export default Home