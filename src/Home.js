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
          <Product title='The lean startup'
            price={18.99}
            image='https://m.media-amazon.com/images/I/A1o-1kou5CL._SX3000_.jpg' 
            rating={5}
            />
          <Product />
          <Product />
        </div>

        <div className='home__row'>
          <Product />
          <Product />
          <Product />
        </div>

        <div className='home__row'>
          <Product />
        </div>
      </div>
    </div>
  )
}

export default Home