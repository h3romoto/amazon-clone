import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Checkout from './Checkout'

function App() {
  return (
    // BEM convention
    <Router>
      <div className="app">
        <Routes>
          {/* use HTML fragment for rendering multiple components via the same route */}
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          {/* make sure the home component is at the bottom */}
          <Route path="/" element={<><Header /><Home /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;