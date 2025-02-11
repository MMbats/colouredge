import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: '/images/hero.jpeg',
      logo: '/images/logo.png',
      title: 'Ideas crave permanence',
      stats: [
        { value: '300+', label: 'Products' },
        { value: '24/7', label: 'Support' },
        { value: '100%', label: 'Quality' },
      ],
    },
    {
      image: '/images/mbatsi.jpeg',
      title: 'Ideas crave permanence',
      stats: [
        { value: '300+', label: 'Products' },
        { value: '24/7', label: 'Support' },
        { value: '100%', label: 'Quality' },
      ],
    },

    {
      image: '/images/mbats.jpeg',
      title: 'Ideas crave permanence',
      stats: [
        { value: '300+', label: 'Products' },
        { value: '24/7', label: 'Support' },
        { value: '100%', label: 'Quality' },
      ],
    },

    {
      image: '/images/mbatsis.jpg',
      title: 'Ideas crave permanence',
      stats: [
        { value: '300+', label: 'Products' },
        { value: '24/7', label: 'Support' },
        { value: '100%', label: 'Quality' },
      ],
    },


  ];

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 200,
      easing: 'ease',
      reset: true,
    });

    sr.reveal('.hero-content', {
      interval: 200,
    });

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Parallax effect */}
      <div 
        className={`absolute inset-0 w-full h-full transform scale-110 transition-transform duration-1000`} 
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'brightness(1.2) contrast(1.1) saturate(1.1)',
        }}
      />

      {/* Very light gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/20 to-transparent"></div>

      {/* Hero content */}
      <div className="relative h-screen flex items-center">
        <div className="hero-content w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Logo at the top */}
            <div className="flex justify-center mb-16">
              <img
                src={slides[currentSlide].logo}
                alt=""
                className="h-60 w-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="text-center space-y-12">
              <h1 className="text-6xl lg:text-8xl font-bold">
                <span className="text-stone-800 leading-tight drop-shadow-lg">

                {slides[currentSlide].title}
                </span>
              </h1>

              <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
  to=""
  className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-stone-700 via-gray-800 to-green-900 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-stone-800/20"
>
  <span className="relative z-10 flex items-center justify-center">
    The Impressography
    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
  </span>
  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-stone-700 to-green-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</Link>

                <Link
                  to="/about"
                  className="group px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/20 border border-white/10"
                >
                  Learn More
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10 max-w-xl mx-auto">
                {slides[currentSlide].stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-orange-400 drop-shadow-lg">{stat.value}</div>
                    <div className="text-sm text-white">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent"></div>
    </div>
  );
};

export default Hero;

export const categories = [
  {
    title: "Marketing Prints",
    description: "Professional high-quality custom printing for large and small businesses.",
    products: [
      { title: "Large Format Posters", image: "/products/llarge.jpg", link: "/Large Format Posters" },
      { title: "Brochures", image: "/products/brochures.jpg", link: "/brochures" },
      { title: "Notepads", image: "/products/notepads.jpg", link: "/notepads" },
      { title: "Giveaways", image: "/products/give.jpg", link: "/ Give Aways" },
      { title: "Business Cards", image: "/products/cards.jpg", link: "/ Businesscards" },
      { title: "Flyers", image: "/products/flyers.jpg", link: "/flyers" },
      { title: "Vehicle Branding", image: "/products/vehicle.jpg", link: "/ Vehicle branding" },
      { title: "Wall Branding", image: "/products/rack.jpg", link: "/wall-branding" },
      { title: "Undercanopy Signs", image: "/products/canopy.jpg", link: "/undercanopy" },
      { title: "Road Signs", image: "/products/roadsigns.jpg", link: "/road-signs" },
      { title: "Pylon Signs", image: "/products/pylon.jpg", link: "/pylon-signs" },
      { title: "Envelopes", image: "/products/lopes.jpg", link: "/envelopes" },
      { title: "Club Flyers", image: "/products/club.jpg", link: "/club-flyers" },
      { title: "Office Branding", image: "/products/wall.jpg", link: "/office-branding" },
      { title: "Office Stationery", image: "/products/stationery.jpg", link: "/stationery" },
    ],
  },
  {
    title: "Personalized Office & Home Décor",
    description: "Make your space unique with awesome customized prints & wall art.",
    products: [
      { title: "Large Format Posters", image: "/products/format.jpg", link: "/posters" },
      { title: "Mugs", image: "/products/mugs.jpg", link: "/mugs" },
      { title: "Metal Wall Prints", image: "/products/metal-prints.jpg", link: "/metal-prints" },
      { title: "Mouse Pads", image: "/products/mousepads.jpg", link: "/mousepads" },
      { title: "Framed Prints", image: "/products/framed.jpg", link: "/framed-prints" },
      { title: "Canvas Prints", image: "/products/canvas-prints.jpg", link: "/canvas-prints" },
    ],
  },
  {
    title: "Signs & Banner Displays",
    description: "Attention-grabbing products for any promotion or event.",
    products: [
      { title: "Banners", image: "/products/banners.jpg", link: "/banners" },
      { title: "Flags", image: "/products/flags.jpg", link: "/flags" },
      { title: "3D Signage", image: "/products/3d.jpg", link: "/3d-signage" },
      { title: "Billboards", image: "/products/billboards.jpg", link: "/billboards" },
      { title: "Campaign Materials", image: "/products/campaign.jpg", link: "/campaigns" },
      { title: "Fascia", image: "/products/fascia.jpg", link: "/fascia" },
      { title: "A-Frames", image: "/products/aframe.jpg", link: "/aframe" },
      { title: "Yard Signs", image: "/products/yard.jpg", link: "/yard-signs" },
      { title: "Retractable Banners", image: "/products/retract.jpg", link: "/retractable-banners" },
    ],
  },
  {
    title: "Professional or Personal Apparel",
    description: "Create uniforms, promotional merch, or customize your spring style.",
    products: [
      { title: "Reflectors", image: "/products/reflect.jpg", link: "/reflectors" },
      { title: "Hats", image: "/products/hats.jpg", link: "/hats" },
      { title: "T-shirts", image: "/products/tshirts.jpg", link: "/tshirts" },
      { title: "Polos", image: "/products/polos.jpg", link: "/polos" },
      { title: "Crewnecks", image: "/products/crewnecks.jpg", link: "/crewnecks" },
      { title: "Full Zip Hoodies", image: "/products/zip.jpg", link: "/hoodies" },
    ],
  },
  {
    title: "Exhibitions & Events Management",
    description: "From Concept to Celebration.",
    products: [
      { title: "Event Setup", image: "/products/event-setup.jpg", link: "/event-setup" },
      { title: "Booth Design", image: "/products/booth.jpg", link: "/booth-design" },
      { title: "Stage Branding", image: "/products/stage-branding.jpg", link: "/stage-branding" },
      { title: "Corporate Events", image: "/products/corporate.jpg", link: "/corporate-events" },
      { title: "Trade Shows", image: "/products/trade-shows.jpg", link: "/trade-shows" },
      { title: "Product Launches", image: "/products/product-launch.jpg", link: "/product-launch" },
    ],
  },
  {
    title: "Design - Create - Inspire",
    description: "Check us out on social media for creative ways to design your own products",
    products: [
      {  image: "/products/social-media.jpg", link: "/social-media" },
      {  image: "/products/identity.jpg", link: "/brand-identity" },
      {  image: "/products/concepts.jpg", link: "/creative" },
    ],
  }
];
const CategoriesSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Our Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Card key={category.title} className="shadow-lg rounded-xl overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {category.products.map((product) => (
                  <Link to={product.link} key={product.title} className="block">
                    <div className="relative group">
                      <img src={product.image} alt={product.title} className="w-full h-32 object-cover rounded-lg" />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="text-white font-semibold text-center">{product.title}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};




