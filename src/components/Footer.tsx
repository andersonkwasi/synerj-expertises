import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neoery-black text-white py-8">
      {/* Section Contactez-nous et Liens Sociaux en 2 colonnes */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
        {/* Colonne Contactez-nous */}
        <div className="text-center md:text-left">
          <h4 className="font-bold mb-4 text-base md:text-lg">Contactez-nous</h4>
          <p className="text-base md:text-lg">Email: <a href="mailto:sales@synerj-expertises.com">sales@synerj-expertises.com</a></p>
          <p className="text-base md:text-lg">Téléphone: +225 01 04 04 04 21/22</p>
        </div>

        {/* Colonne Liens Sociaux */}
        <div className="text-center md:text-left">
          <h4 className="font-bold mb-4 text-base md:text-lg">Nos réseaux sociaux</h4>
          <div className="flex justify-center md:justify-start mt-4">
            {/* Liens des réseaux sociaux sur une ligne */}
            <a href="https://www.facebook.com" className="mx-3 text-2xl text-gray-400 hover:text-neoery-green transition-colors">
              <Facebook />
            </a>
            <a href="https://twitter.com" className="mx-3 text-2xl text-gray-400 hover:text-neoery-green transition-colors">
              <Twitter />
            </a>
            <a href="https://www.linkedin.com" className="mx-3 text-2xl text-gray-400 hover:text-neoery-green transition-colors">
              <Linkedin />
            </a>
            <a href="https://www.instagram.com" className="mx-3 text-2xl text-gray-400 hover:text-neoery-green transition-colors">
              <Instagram />
            </a>
          </div>
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
