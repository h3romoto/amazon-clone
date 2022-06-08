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
        {/* render the Header always */}
        <Header />
        <Routes>
          {/* use HTML fragment for rendering multiple components via the same route */}
          <Route path="/checkout" element={<><Checkout /></>} />
          {/* make sure the home component is at the bottom */}
          <Route path="/" element={<><Home /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;