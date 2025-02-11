import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Import layout
import MainLayout from "./components/layout/MainLayout";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        {/* MainLayout wraps around the routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
