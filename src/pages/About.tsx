import React from 'react';
import { 
  CheckCircle, 
  Star, 
  Handshake, 
  Hand, 
  Shield, 
  Award,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const certifications = [
    {
      icon: Shield,
      title: "ISO 27001",
      category: "Sécurité de l'Information",
      description: "Garantit la sécurité de vos informations et de vos données stratégiques.",
      features: [
        "Gestion des risques",
        "Protection des données",
        "Continuité d'activité"
      ]
    },
    {
      icon: Award,
      title: "CMMI Niveau 3",
      category: "Excellence Opérationnelle",
      description: "Assure la qualité et l'efficacité dans les processus de développement.",
      features: [
        "Processus standardisés",
        "Amélioration continue",
        "Qualité garantie"
      ]
    },
    {
      icon: Star,
      title: "Microsoft Gold Partner",
      category: "Expertise Technologique",
      description: "Une reconnaissance de notre expertise avec les technologies Microsoft.",
      features: [
        "Cloud Azure",
        "Solutions Enterprise",
        "Support Premium"
      ]
    }
  ];

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
          liées aux métiers de l'informatique, avec des valeurs propres à la vision du fondateur.
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
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 rounded-3xl p-12 backdrop-blur-lg"
        >
          <h2 className="text-4xl font-bold text-center mb-4 text-neoery-orange">
            Nos Certifications
          </h2>
          <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
            Des certifications reconnues qui garantissent notre expertise et notre engagement envers l'excellence.
          </p>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white/10 rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center mb-4">
                    <cert.icon size={32} className="text-neoery-orange mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold">{cert.title}</h3>
                      <p className="text-white/60 text-sm">{cert.category}</p>
                    </div>
                  </div>
                  <p className="text-white/80">{cert.description}</p>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold mb-4 text-neoery-green">Avantages clés :</h4>
                  <ul className="space-y-3">
                    {cert.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-white/70">
                        <CheckCircle2 size={16} className="text-neoery-green mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;