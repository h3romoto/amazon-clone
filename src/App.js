import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login'
import Orders from './Orders';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Checkout from './Checkout'
import Payment from './Payment'
import { useEffect } from 'react';
import { auth } from './firebaseconf'
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  'pk_test_51LCiWcFdRVVKiVDJeisyPrCYRvsYuBqqiJIKM4ovd4mMZODp9yXLU9Rq6QBy2CwYvu888mebMe01xTda9TWSB8QI00TcxW6CWA'
   );

function App() {
  const [ {}, dispatch] = useStateValue();

  // Listener
  useEffect(() => {
    // Runs only once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>> ", authUser)

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })      
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    // BEM convention
    <Router>
      <div className="app">
        <Routes>  
          {/* use HTML fragment for rendering multiple components via the same route */}
          <Route 
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            } 
          />
          <Route 
            path="/login" 
            element={
              <>
                <Login />
              </>
            } 
          />
          <Route 
            path="/checkout" 
            element={
              <>
                <Header />
                <Checkout />
              </>
            } 
          />
          <Route 
            path="/payment" 
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            } 
          />
          {/* make sure the home component is at the bottom */}
          <Route 
            path="/" 
            element={
              <>
                <Header />
                <Home />
              </>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;