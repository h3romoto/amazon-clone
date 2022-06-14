import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Checkout from './Checkout'

function App() {
  return (
    // BEM convention
    <Router>
      <div className="app">
        {/* render the Header always */}
        <Routes>
          {/* use HTML fragment for rendering multiple components via the same route */}
          <Route path="/login" element={<><Login /></>} />
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          {/* make sure the home component is at the bottom */}
          <Route path="/" element={<><Header /><Home /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;