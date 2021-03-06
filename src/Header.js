import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider'
import { auth } from './firebaseconf'

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <div className='header'>
      <Link to="/">
        <img
          className='header__logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
        />
      </Link>

      <div className='header__search'>
        <input 
          className='header__searchInput' type='text'
        />
        <SearchIcon className='header__searchIcon'
        />
      </div>

      <div className='header__nav'>
        <div onClick={handleAuthentication} className='header__options'>
          <span 
            className='header__optionLineOne'>
            Hello {user?.email}
          </span>
          <Link to={!user && "/login"} className="signIn__link">
            <span 
              className='header__optionLineTwo'>
              {user ? 'Sign Out': 'Sign In'}
            </span>
          </Link>
        </div>

        <Link to="/orders" className='ordersAnd__returns'>
          <div className='header__options'>
          <span 
              className='header__optionLineOne'>
              Returns
            </span>
            <span 
              className='header__optionLineTwo'>
              & Orders
            </span>
          </div>
        </Link>
        
        <div className='header__options'>
          <span 
            className='header__optionLineOne'>
            Your
          </span>
          <span 
            className='header__optionLineTwo'>
            Prime
          </span>
        </div>
        <Link to="/checkout">
          <div className='header__optionBasket'>
            <ShoppingBasketIcon />
            <span className='header__optionLineTwo header__basketCount'>
              {/* "?" is optional chaining */}
              { basket?.length }
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header