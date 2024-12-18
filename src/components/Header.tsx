import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../media/logo_synerj.jpeg';

const Header: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [delayHide, setDelayHide] = useState<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (delayHide) {
      clearTimeout(delayHide);
      setDelayHide(null);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200); // Délai pour éviter une disparition trop rapide
    setDelayHide(timeout);
  };

  useEffect(() => {
    return () => {
      if (delayHide) clearTimeout(delayHide); // Nettoyage du timeout lors du démontage
    };
  }, [delayHide]);

  return (
    <header className="bg-white text-neoery-blue py-3 md:py-4 shadow-md relative z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        {/* Logo / Nom de l'entreprise */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-neoery-blue transition">
            <img
              src={Logo}
              alt="Logo SYNERJ"
              className="h-16 md:h-20 w-auto hover:opacity-90 transition transform hover:scale-105 object-contain"
            />
          </Link>
        </div>
        {/* Navigation principale */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-xl">
            <li>
              <Link to="/" className="hover:text-neoery-orange transition">
                Accueil
              </Link>
            </li>
            {/* Services avec toggle */}
            <li
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/services"
                className="hover:text-neoery-orange transition"
              >
                Services
              </Link>
              {isServicesOpen && (
                <ul
                  className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 mt-2 w-48 text-left border border-gray-200 z-50"
                >
                  <li>
                    <Link
                      to="/consulting"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-neoery-orange transition"
                    >
                      Conseil
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/assistance"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-neoery-orange transition"
                    >
                      Assistance Technique
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/engineering"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-neoery-orange transition"
                    >
                      Ingénierie & AMO
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/contact" className="hover:text-neoery-orange transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-neoery-orange transition">
                À-propos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
