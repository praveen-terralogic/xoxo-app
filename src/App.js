import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage/Homepage'
import Cart from './Pages/Cart/Cart'

function App() {
  return (
    <div className="xoxo-app">
      
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/cart" element={<Cart />} />
      </Routes>
       <Footer />
      </Router>
      
    </div>
  );
}

export default App;
