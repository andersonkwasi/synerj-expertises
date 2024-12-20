import React from 'react';
import { 
  CheckCircle, 
  Star, 
  Handshake, 
  Hand
} from 'lucide-react';
import { motion } from 'framer-motion';
import NosCertifications from '../components/Certifications';

const About: React.FC = () => {

  return (
    <div className="bg-gradient-to-br from-neoery-blue to-neoery-black text-white min-h-screen">
      {/* Section Héroïque */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.h1 
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Qui Sommes-Nous ?
        </motion.h1>
        <motion.p 
          className="text-xl text-white/80 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Née d'une synergie d'expériences et d'expertises, <strong>SYNERJ</strong> est une SS2I spécialisée dans l'accompagnement des entreprises à adresser les défis et problématiques
          liées aux métiers de l'informatique, avec des valeurs propres alignées sur notre vision.
        </motion.p>
      </section>

      {/* Mission et Vision */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Notre Mission</h2>
            <p className="text-white/70 leading-relaxed">
              Chez <strong>SYNERJ</strong>, nous croyons que la technologie doit être un levier de croissance stratégique pour les entreprises.
              Notre mission est de fournir aux entreprises des solutions sur mesure avec pour objectif de les accompagner à faire face à leurs défis et challenges.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white/10 p-8 rounded-xl border border-white/20 backdrop-blur-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-4 text-neoery-green">Notre Vision</h3>
            <p className="text-white/70 leading-relaxed">
              Être le partenaire de confiance pour les entreprises qui recherchent des solutions informatiques innovantes, sécurisées et adaptées à leur environnement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Nos Valeurs</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { title: "RÉACTIVITÉ", icon: CheckCircle },
            { title: "PROXIMITÉ", icon: Handshake },
            { title: "RESPECT DES ENGAGEMENTS", icon: Hand },
            { title: "QUALITÉ", icon: Star }
          ].map((value, index) => (
            <motion.div
              key={index}
              className="bg-white/10 p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="text-4xl mb-4 text-yellow-500">
                <value.icon size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications - Section Redessinée */} 
      <NosCertifications />
    </div>
  );
};

export default About;