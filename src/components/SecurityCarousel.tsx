import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const securityImages = [
    {
      title: 'Protection des Endpoints',
      description: 'Sécurisation avancée de tous vos points d\'accès réseau',
      imageUrl: 'https://www.watchguard.com/sites/default/files/watchguard-endpoint-hdr.png'
    },
    {
      title: 'Protection des Données',
      description: 'Stratégies robustes de chiffrement et de confidentialité',
      imageUrl: 'https://af2a.com/wp-content/uploads/2023/12/Protection-des-donnees_Petit.png'
    },
    {
      title: 'Contrôle d\'accès reseau',
      description: 'Contrôlez l\'accès aux applications et aux ressources auxquelles les utilisateurs souhaitent accéder',
      imageUrl: 'https://www.titanhq.fr/wp-content/uploads/2021/04/controle-acces-internet-entreprise-1-1024x679.jpg'
    }
  ];

const SecurityCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        (prevSlide + 1) % securityImages.length
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence>
        {securityImages.map((slide, index) => (
          currentSlide === index && (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.imageUrl})`,
                  filter: 'brightness(0.6)'
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl max-w-2xl">
                  {slide.description}
                </p>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {securityImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`
              w-4 h-4 rounded-full transition-all duration-300
              ${currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default SecurityCarousel;
