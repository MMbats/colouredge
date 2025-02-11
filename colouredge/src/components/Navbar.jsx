
import { Link } from 'react-router-dom';
import { ShoppingCart, User  } from 'lucide-react';

const Navbar = () => {
  return (
    <>
      {/* Main navbar */}
      <div className="bg-[#1e293b] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Navigation */}
            <div className="flex items-center space-x-8">
              <button className="text-white hover:text-orange-400 px-3 py-2 text-md font-medium transition-colors duration-300">
                Print Must-Haves
              </button>
              <Link
                to="/products"
                className="text-white hover:text-orange-400 px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                Products
              </Link>
              <Link
                to="/faq"
                className="text-white hover:text-orange-400 px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                FAQ
              </Link>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;