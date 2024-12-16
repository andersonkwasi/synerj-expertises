import React from 'react';
import { CheckCircle, Star, Handshake, Hand, Shield, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-neoery-blue to-neoery-black text-white">
      {/* Section Héroïque */}

      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Qui Sommes-Nous ?</h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
        Née d'une synergie d'expériences et d'expertises,<strong> SYNERJ</strong> est une SS2I spécialisée dans l'accompagnement des entreprises à adresser les défis et problématiques 
        liées aux métiers de l'informatique, avec des valeurs propres à la vision du fondateur.
        </p>
      </section>

      {/* Mission et Vision */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Notre Mission</h2>
            <p className="text-white/70 leading-relaxed">
              Chez <strong>SYNERJ</strong>, Nous croyons que la technologie doit être un levier de croissance stratégique pour les entreprises.
              Notre mission est de fournir aux entreprises des solutions sur mesure avec pour objectif de les accompagner à faire face à leurs défis et challenges.
            </p>
          </div>
          <div className="bg-white/10 p-8 rounded-xl border border-white/20">
            <h3 className="text-xl font-bold mb-4 text-neoery-green">Notre Vision</h3>
            <p className="text-white/70 leading-relaxed">
              Être le partenaire de confiance pour les entreprises qui recherchent des solutions informatiques innovantes, sécurisées et adapté à leur environnement.
            </p>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Nos Valeurs</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              title: "RÉACTIVITÉ",
              icon: CheckCircle,
            },
            {
              title: "PROXIMITÉ",
              icon: Handshake,
            },
            {
              title: "RESPECT DES ENGAGEMENTS",
              icon: Hand,
            },
            {
              title: "QUALITÉ",
              icon: Star,
            },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-white/10 p-6 rounded-xl border border-white/20 hover:bg-white/20 transition"
            >
              <div className="text-4xl mb-4 text-yellow-500">
                <value.icon size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
            </div>
          ))}
        </div>
      </section>
{/* Nos Certifications */}
<section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Nos Certifications</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[ 
            {
              icon: Shield,
              title: "Certification ISO 27001",
              description: "Assure la sécurité de vos informations et de vos données.",
            },
            {
              icon: Award,
              title: "Certification CMMI",
              description: "Garantie de la qualité dans les processus de développement.",
            },
            {
              icon: Star,
              title: "Partenaire Microsoft Gold",
              description: "Un partenariat de confiance avec l'un des leaders mondiaux de la technologie.",
            },
          ].map((certification, index) => (
            <div
              key={index}
              className="bg-white/10 p-6 rounded-xl border border-white/20 text-center hover:bg-white/20 transition transform hover:scale-105 duration-300 ease-in-out"
            >
              <div className="text-4xl mb-4 text-yellow-500">
                <certification.icon size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{certification.title}</h3>
              <p className="text-white/70 text-sm">{certification.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
