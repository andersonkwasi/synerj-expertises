import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Importez motion pour les animations
import service from "../assets/Synerj.jpeg";
import SecurityCarousel from "../components/SecurityCarousel";
import PartnerLogos from "../components/PartnerLogos";


const Home: React.FC = () => {
  return (
    <div>
      {/* Nouveau Carrousel de Sécurité en plein écran */}
      <SecurityCarousel />

      <div className="bg-gradient-to-br from-neoery-blue to-neoery-black text-white">
        {/* Section après le carrousel */}
        <section className="container mx-auto px-4 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-2xl md:text-5xl font-bold leading-tight">
              Avec <strong>SYNERJ</strong>, alliez innovation et sécurité pour bâtir des solutions numériques robustes, fiables et adaptées à vos défis technologiques.
            </h1>
  
            <div className="flex space-x-4">
              <Link
                to="/services"
                className="bg-neoery-orange px-6 py-3 rounded-lg hover:bg-opacity-90 transition font-semibold"
              >
                Découvrir nos poles de services
              </Link>
              <Link
                to="/contact"
                className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-neoery-black transition"
              >
                Nous Contacter
              </Link>
            </div>
          </motion.div>

          {/* Visualisation technique */}
          <motion.div
            className="relative"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="rounded-lg overflow-hidden">
                <img src={service} alt="Architecture Moderne" className="w-full h-auto" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section Expertise */}
        <section className="container mx-auto px-4 py-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Notre Expertise Technologique
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              title: "Conseils, Audit et Optimisation",
              imageUrl: "https://assets-global.website-files.com/62976fe97a37b922a46d6609/6425631fa838bd4853017334_7.png",
              pageUrl: "/consulting"
            },
            {
              title: "Assistance Technique Maintenance et Support",
              imageUrl: "https://i1.moyens.net/io/images/2022/02/Limportance-des-services-informatiques.jpg",
              pageUrl: "/assistance"
            },
            {
              title: "Ingénieurie et AMO",
              imageUrl: "https://th.bing.com/th/id/OIP.PshIiN9l_cGVjzHqirXQXAHaD3?rs=1&pid=ImgDetMain",
              pageUrl: "/engineering"
            },
            {
              title: "Conception, Integration et Opération",
              imageUrl: "https://img.freepik.com/vector-premium/dibujo-fabrica-cielo-azul-fondo-nubes_1108514-68450.jpg",
              pageUrl: "/conceptions"
            },
            {
              title: "Services Managés XAAS",
              imageUrl: "https://www.acecloudhosting.com/wp-content/uploads/2022/12/saas.jpg",
              pageUrl: "/servicesXaas"
            },
            {
              title: "Formation, Transfert de Compétences et Certification",
              imageUrl: "https://www.espritcoaching.fr/wp-content/uploads/formations_entreprise2.jpg",
              pageUrl: "/certificationFormation"
            }
            ].map((area, index) => (
              <motion.div
                key={index}
                className="bg-white/10 p-6 rounded-xl border border-white/20 hover:bg-white/20 transition transform hover:scale-105 hover:shadow-lg duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 1 }}
              >
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-4">
                  <Link to={area.pageUrl as string}>
                    <img src={area.imageUrl} alt={area.title} className="w-full h-full object-cover" />
                  </Link>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3">{area.title}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section Appel à l'Action */}
        <section className="container mx-auto px-4 py-16 text-center">
          <motion.div
            className="bg-gradient-to-br from-neoery-orange/20 to-neoery-blue/30 p-12 rounded-2xl shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Prêt à Propulser Votre Transformation Digitale ?
            </h2>
            <Link
              to="/contact"
              className="bg-neoery-blue px-8 py-4 rounded-lg text-white font-semibold hover:bg-opacity-90 transition transform hover:scale-105"
            >
              Commencer Maintenant
            </Link>
          </motion.div>
        </section>
        <PartnerLogos />
      </div>
    </div>
  );
};

export default Home;
