
import Hero from '../components/home/Hero';
import Topcategories from '../components/home/Topcategories';

const Home = () => {
  return (
    <div className="bg-[#020617]">
      {/* Main sections in the requested order */}
      <Hero />
      <Topcategories/>
      
    </div>
  );
};

export default Home;
