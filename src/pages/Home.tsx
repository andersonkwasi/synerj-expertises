import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import service from "../assets/Synerj.jpeg";

// Images placeholders - vous devrez remplacer par vos vraies images
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

const Home: React.FC = () => {
  return (
    <div>
      {/* Nouveau Carrousel de Sécurité en plein écran */}
      <SecurityCarousel />

      <div className="bg-gradient-to-br from-neoery-blue to-neoery-black text-white">
        {/* Section après le carrousel */}
        <section className="container mx-auto px-4 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Avec <strong>SYNERJ</strong>, alliez innovation et sécurité pour bâtir des solutions numériques robustes, fiables et adaptées à vos défis technologiques.
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              <strong>SYNERJ</strong> vous propose des solutions informatiques sur mesure qui propulsent votre entreprise à l'avant-garde de l'innovation numérique.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/services"
                className="bg-neoery-orange px-6 py-3 rounded-lg hover:bg-opacity-90 transition font-semibold"
              >
                Découvrir nos Solutions
              </Link>
              <Link
                to="/contact"
                className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-neoery-black transition"
              >
                Nous Contacter
              </Link>
            </div>
          </div>

          {/* Visualisation technique */}
          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="rounded-lg overflow-hidden">
                <img src={service} alt="Architecture Moderne" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Section Expertise */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            Notre Expertise Technologique
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "CyberSOC / CSIRT",
                description: "Surveillance et réponse aux incidents de sécurité",
                imageUrl: "https://via.placeholder.com/150" // remplacez par votre vraie image
              },
              {
                title: "Managed Security Service Provider",
                description: "Externalisation de la sécurité de votre système d'information",
                imageUrl: "https://via.placeholder.com/150" // remplacez par votre vraie image
              },
              {
                title: "Sécurité Offensive",
                description: "Évaluation proactive de la sécurité de vos systèmes",
                imageUrl: "https://via.placeholder.com/150" // remplacez par votre vraie image
              },
              {
                title: "Gouvernance, risque et conformité",
                description: "Définition de politiques de sécurité et de conformité",
                imageUrl: "https://via.placeholder.com/150" // remplacez par votre vraie image
              },
              {
                title: "Cyberdefense",
                description: "Protection contre les menaces cyber avancées",
                imageUrl: "https://via.placeholder.com/150" // remplacez par votre vraie image
              },
              {
                title: "Mise à disposition de ressources expertes",
                description: "Équipes dédiées pour accompagner vos projets de sécurité",
                imageUrl: "https://via.placeholder.com/150" // remplacez par votre vraie image
              }
            ].map((area, index) => (
              <div
                key={index}
                className="bg-white/10 p-6 rounded-xl border border-white/20 hover:bg-white/20 transition"
              >
                <div className="rounded-lg overflow-hidden mb-4">
                  <img src={area.imageUrl} alt={area.title} className="w-full h-auto" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3">{area.title}</h3>
                <p className="text-white/70">{area.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section Appel à l'Action */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="bg-neoery-orange/20 p-12 rounded-2xl">
            <h2 className="text-4xl font-bold mb-6">
              Prêt à Propulser Votre Transformation Digitale ?
            </h2>
            <p className="text-xl mb-8 text-white/80">
              Discutons de la façon dont SYNERJ peut vous aider à atteindre vos objectifs technologiques.
            </p>
            <Link
              to="/contact"
              className="bg-neoery-blue px-8 py-4 rounded-lg text-white font-semibold hover:bg-opacity-90 transition"
            >
              Commencer Maintenant
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;