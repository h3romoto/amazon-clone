import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Checkout from './Checkout'
import Payment from './Payment'
import { useEffect } from 'react';
import { auth } from './firebaseconf'
import { useStateValue } from './StateProvider';

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
        {/* render the Header always */}
        <Routes>
          {/* use HTML fragment for rendering multiple components via the same route */}
          <Route path="/login" element={<><Login /></>} />
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/payment" element={<><Header /><Payment /></>} />
          {/* make sure the home component is at the bottom */}
          <Route path="/" element={<><Header /><Home /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;