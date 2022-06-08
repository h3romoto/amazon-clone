import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    // BEM convention
    <Router>
      <div className="app">
        <Routes>
          {/* use HTML fragment for rendering multiple components via the same route */}
          <Route path="/" element={<><Header /><Home /></>} />
          <Route path="/checkout" element={<><Header /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;