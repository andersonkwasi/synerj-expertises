import React from 'react';
import profile from "../media/profile.jpg"
import { Shield, Rocket, Trophy } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-neoery-blue to-neoery-black text-white">
      {/* Section Héroïque */}

      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Qui Sommes-Nous ?</h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          <strong>SYNERJ</strong> est une entreprise innovante spécialisée dans l'intégration de solutions informatiques sur mesure,
          avec un engagement inébranlable envers la sécurité et l'excellence.
        </p>
      </section>

      {/* Mission et Vision */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Notre Mission</h2>
            <p className="text-white/70 leading-relaxed">
              Chez <strong></strong> SYNERJ, nous croyons que la technologie doit être un levier de croissance, jamais un frein.
              Notre mission est de fournir des solutions fiables et sécurisées qui transforment vos défis technologiques
              en opportunités stratégiques.
            </p>
          </div>
          <div className="bg-white/10 p-8 rounded-xl border border-white/20">
            <h3 className="text-xl font-bold mb-4 text-neoery-green">Notre Vision</h3>
            <p className="text-white/70 leading-relaxed">
              Être le partenaire de confiance pour les entreprises qui recherchent des solutions informatiques innovantes
              et sécurisées, en devenant un acteur clé de la transformation numérique.
            </p>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Nos Valeurs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Sécurité Avant Tout",
              description: "Dans un monde numérique en constante évolution, nous plaçons la cybersécurité au cœur de chaque solution. Votre tranquillité d'esprit est notre engagement",
              icon: Shield,
            },
            {
              title: "Innovation Permanente",
              description: "Nous ne suivons pas les tendances, nous les créons. Notre approche proactive garantit que vous restez toujours un temps d'avance.",
              icon: Rocket,
            },
            {
              title: "Excellence et Fiabilité",
              description: "Chaque projet est une promesse. Nos solutions ne sont pas simplement des outils, mais des partenaires stratégiques de votre croissance.",
              icon: Trophy,
            },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-white/10 p-6 rounded-xl border border-white/20 hover:bg-white/20 transition"
            >
              <div className="text-4xl mb-4 text-neoery-green">
                <value.icon size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-white/70">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Équipe */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Notre Équipe</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              picture: profile,
              name: "Paul Henri BOURON",
              role: "CEO",
              description: "Visionnaire avec une expertise en sécurité informatique et en stratégie commerciale.",
            },
            {

              picture: profile,
              name: "Michael Konan",
              role: "Commercial",
              description: "Expert commercial, adapte vos budgets à vos projets.",
            },
            {
              picture: profile,
              name: "Anderson Kwsy",
              role: "Avant-Vente",
              description: "Passionné par la Téchnologie, Vous accompagne dans l'intégration de vos solutions.",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white/10 p-6 rounded-xl border border-white/20 text-center"
            >
              <img src={member.picture} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-neoery-green mb-2">{member.role}</p>
              <p className="text-white/70 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
