import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../media/SYNERJ.png';

// Composant Footer avec informations de contact et liens
const Footer: React.FC = () => {
  return (
    <footer className="bg-neoery-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0 gap-y-6">
        {/* Colonne Entreprise */}
        <div>
          <img
            src={Logo}
            alt="Logo SYNERJ"
            className="h-8 md:h-10 w-auto hover:opacity-80 transition object-contain"
          />
          <p className='text-base md:text-lg'>Intégrateur de solutions informatiques</p>
        </div>

        {/* Colonne Liens rapides */}
        <div>
          <h4 className="font-bold mb-4 text-base md:text-lg">Liens Rapides</h4>
          <ul className="space-y-3 text-base md:text-lg">
            <li><Link to="/" className="hover:text-neoery-blue">Accueil</Link></li>
            <li><Link to="/services" className="hover:text-neoery-blue">Services</Link></li>
            <li><Link to="/partners" className="hover:text-neoery-green">Partenaires</Link></li>
            <li><Link to="/contact" className="hover:text-neoery-orange">Contact</Link></li>
          </ul>
        </div>

        {/* Colonne Coordonnées */}
        <div>
          <h4 className="font-bold mb-4 text-base md:text-lg">Contactez-nous</h4>
          <p className='text-base md:text-lg'>Email: contact@synerj.com</p>
          <p className='text-base md:text-lg'>Téléphone: +225 01 03 13 13 00</p>
        </div>
      </div>

      {/* Mention légale */}
      <div className="text-center mt-8 pt-4 border-t border-gray-700 text-base md:text-lg">
        <p>&copy; 2024 SYNERJ EXPERTISES. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;