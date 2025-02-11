import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "scrollreveal";
import { categories } from "./Hero";

const MarketingPrints = () => {
  useEffect(() => {
    ScrollReveal().reveal(".product-card", {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      delay: 200,
      easing: "ease",
      reset: true,
    });
  }, []);

  return (
    <div className="bg-gray-900 py-20 flex justify-center">
      <div className="max-w-6xl mx-auto px-10 lg:px-14 text-center">
        {categories.map((category, catIndex) => (
          <div key={catIndex} className="mb-36">
            <h3 className="text-5xl font-medium text-white font-serif mb-6">
              {category.title}
            </h3>
            <p className="text-lg italic text-gray-300 mb-16 font-light max-w-3xl mx-auto">
              {category.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20 justify-center">
              {category.products.map((product, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={product.link}
                    className="product-card group bg-gray-800 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-transform"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2 font-sans">
                        {product.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketingPrints;
