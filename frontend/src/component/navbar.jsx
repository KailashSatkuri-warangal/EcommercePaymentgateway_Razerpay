import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-yellow-500">SteelPro</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
          <Link to="/service" className="hover:text-yellow-400 transition">Services</Link>
          <Link to="/payment" className="hover:text-yellow-400 transition">Payment</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;