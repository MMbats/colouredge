import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


// Import pages
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <Toaster /> 
      <Navbar />
      <Routes>
        {/* Wrap all pages inside MainLayout */}
        
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
    
    {/* Redirect unknown routes to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
