import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";
import Service from "./component/Service.jsx";
import Payment from "./component/payment.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="p-4 bg-gray-800 text-white">
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/about" className="mr-4">About</Link>
          <Link to="/service" className="mr-4">Service</Link>
          <Link to="/payment">Payment</Link>
        </nav>

        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
