import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Calendar, Clock, MapPin, Gamepad2, Phone, Mail } from 'lucide-react';

// Navigation Component
const NavBar = ({ isSidebarVisible, onMenuClick }) => (
  <motion.div
    className={`fixed top-0 left-0 h-full bg-gray-800 text-white p-4 z-50 overflow-hidden transition-all duration-300 ${
      isSidebarVisible ? 'w-64' : 'w-0'
    }`}
    initial={{ opacity: 0, x: '-100%' }}
    animate={{ opacity: isSidebarVisible ? 1 : 0, x: isSidebarVisible ? 0 : '-100%' }}
    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    style={{
      boxShadow: isSidebarVisible ? '2px 0 5px rgba(0,0,0,0.5)' : 'none',
      backdropFilter: 'blur(4px)',
    }}
  >
    <button
      className="text-white text-2xl mb-8 bg-transparent border-none"
      onClick={onMenuClick}
      style={{ backdropFilter: 'none' }}
    >
      &times;
    </button>
    <h1 className="text-xl font-bold mb-8">GAMEBLITZ'24</h1>
    <div className="space-y-4">
      <Link to="/" className="block hover:underline" onClick={onMenuClick}>
        Home
      </Link>
      <Link to="/problem-statements" className="block hover:underline" onClick={onMenuClick}>
        Problem Statements
      </Link>
      <Link to="/contact" className="block hover:underline" onClick={onMenuClick}>
        Contact
      </Link>
    </div>
  </motion.div>
);

// Home Page Component
const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans relative overflow-hidden">
      <div
        className="fixed inset-0"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/home_bg.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      />
      <div className="relative z-10">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-screen flex items-center justify-center text-center"
        >
          <div>
            <h1 className="text-6xl font-extrabold mb-4">GAMEBLITZ'24</h1>
            <p className="text-2xl mb-8">Unleash Your Game Development Skills!</p>
            <Link
              to="/problem-statements"
              className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold hover:bg-purple-100 transition duration-300"
            >
              View Problem Statements
            </Link>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: scrollY > 300 ? 1 : 0, y: scrollY > 300 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen flex items-center justify-center bg-gray-800 bg-opacity-75"
        >
          <div className="max-w-4xl mx-auto p-6 rounded-lg">
            <h2 className="text-4xl font-bold mb-8">Event Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <Calendar className="mr-4" size={24} />
                <span>Date: 15.09.24</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-4" size={24} />
                <span>Time: 9 A.M. - 1 P.M.</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-4" size={24} />
                <span>Venue: VIT Chennai</span>
              </div>
              <div className="flex items-center">
                <Gamepad2 className="mr-4" size={24} />
                <span>Bring Unity pre-installed</span>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-2xl font-bold mb-4">Registration Fee: Rs. 200</p>
              <a
                href="https://chennaievents.vit.ac.in/technovit/mainDashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold hover:bg-purple-100 transition duration-300"
              >
                Register Now
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

// Problem Statements Page Component
const ProblemStatements = () => {
  const problemStatements = [
    "Create a 2D platformer game with unique mechanics",
    "Design a puzzle game using Unity's physics engine",
    "Develop a multiplayer racing game with power-ups",
    "Build a strategy game with AI opponents",
    "\"Outrun Your Shadow\": Develop a platformer where your shadow follows your exact movements but starts lagging behind.",
    "\"Break the Loop\": Create a game where the player is stuck in a time loop, reliving the same level repeatedly.",
    "\"The Floor is Lava... and Ice\": Make a platformer where the floor alternates between dangerous lava and slippery ice.",
    "\"Mind the Gap\": Build a game where entire chunks of the world randomly disappear and reappear.",
    "\"Shape of Things\": Create a game where the player must shapeshift between solid, liquid, and gas forms.",
    "\"Sound is Your Weapon\": Develop a game where players can't see enemies but must use sound to detect their locations.",
    "\"Pixel Jumper\": Make a platformer where the player's character changes size at random intervals.",
    "\"Illusion of Control\": Build a game where the controls seem to reverse or randomize periodically.",
    "\"Light vs. Darkness\": Create a game where the player has a limited source of light in a pitch-black environment.",
    "\"Magnetized Madness\": Develop a game where the player has two magnetic poles that attract or repel everything in the environment.",
    "\"The Last Safe Zone\": Make a survival game where the player must constantly move toward shrinking safe zones on the map.",
    "\"Reality Bender\": Design a game where the player can toggle between two dimensions—one normal and one distorted."
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans p-8">
      <h1 className="text-4xl font-bold mb-8">Problem Statements</h1>
      <ul className="space-y-4">
        {problemStatements.map((statement, index) => (
          <motion.li 
            key={index} 
            className="flex items-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ChevronRight className="mr-2 mt-1 flex-shrink-0" />
            <span>{statement}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

// Contact Page Component
const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans p-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Faculty Coordinators:</h2>
          <p className="flex items-center mb-2">
            <Phone className="mr-2" />
            Dr R.Rathna: <a href="tel:+919443573477">9443573477</a>
          </p>
          <p className="flex items-center mb-2">
            <Mail className="mr-2" />
            <a href="mailto:rathna.r@vit.ac.in">rathna.r@vit.ac.in</a>
          </p>
          <p className="flex items-center mb-2">
            <Phone className="mr-2" />
            Dr Anubha Pearline: <a href="tel:+919994031215">9994031215</a>
          </p>
          <p className="flex items-center">
            <Mail className="mr-2" />
            <a href="mailto:anubhapearline.s@vit.ac.in">anubhapearline.s@vit.ac.in</a>
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Student Coordinators:</h2>
          <p className="flex items-center mb-2">
            <Phone className="mr-2" />
            Sehastrajit: <a href="tel:+918438218913">8438218913</a>
          </p>
          <p className="flex items-center">
            <Mail className="mr-2" />
            <a href="mailto:sehasrtajit@gmail.com">sehastrajit@gmail.com</a>
          </p>
          <p className="flex items-center mb-2">
            <Phone className="mr-2" />
            Krishna Rochani: <a href="tel:+916354359179">6354359179</a>
          </p>
          <p className="flex items-center">
            <Mail className="mr-2" />
            <a href="mailto:sehasrtajit@gmail.com">sehastrajit@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

// App Component
const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleMenuClick = () => setIsSidebarVisible(prev => !prev);

  return (
    <Router>
      <div className="relative">
        <NavBar isSidebarVisible={isSidebarVisible} onMenuClick={handleMenuClick} />
        <div className="relative">
          <button
            className={`fixed top-4 left-4 z-40 text-white p-2 rounded-full ${
              isSidebarVisible ? 'opacity-0' : 'opacity-100'
            } transition-opacity duration-300`}
            onClick={handleMenuClick}
            style={{ backdropFilter: 'blur(8px)' }}
          >
            <div
              className={`w-6 h-0.5 bg-white mb-1 transition-transform ${
                isSidebarVisible ? 'rotate-45 translate-y-1' : ''
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-white mb-1 transition-opacity ${
                isSidebarVisible ? 'opacity-0' : ''
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-white transition-transform ${
                isSidebarVisible ? '-rotate-45 -translate-y-1' : ''
              }`}
            />
          </button>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/problem-statements" element={<ProblemStatements />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;