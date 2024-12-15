import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../media/SYNERJ.png';

const Header: React.FC = () => {
  return (
    <header className="bg-white text-neoery-blue py-3 md:py-4 shadow-md">
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
              <Link
                to="/"
                className="hover:text-neoery-orange transition"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/Services"
                className="hover:text-neoery-orange transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/partners"
                className="hover:text-neoery-orange transition"
              >
                Partenaires
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-neoery-orange transition"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-neoery-orange transition"
              >
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
