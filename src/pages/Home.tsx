import React from 'react';
import { Link } from 'react-router-dom';
import service from "../assets/Synerj.jpeg";
import SecurityCarousel from "../components/SecurityCarousel"
import PartnerLogos from "../components/PartnerLogos"

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
                title: "Gestion des Vulnérabilités",
                description: "Anticipez les menaces avant qu'elles ne frappent : transformez vos failles en remparts de sécurité",
                imageUrl: "https://www.advancia-itsystem.com/images/banniere/104.jpg" // remplacez par votre vraie image
              },
              {
                title: "Sécurité des postes de travail",
                description: "Votre système d'information blindé, sans compromis : la sécurité externalisée qui libère votre potentiel",
                imageUrl: "https://www.cnil.fr/sites/cnil/files/styles/contenu_generique_visuel/public/thumbnails/image/cybersecurite.jpeg" // remplacez par votre vraie image
              },
              {
                title: "Gestion des Comptes à haut privilège",
                description: "Maîtrisez les accès critiques : un bouclier intelligent contre les risques d'intrusion",
                imageUrl: "https://data.ictjournal.ch/187214.png" // remplacez par votre vraie image
              },
              {
                title: "Sécurisation de la Messagerie",
                description: "Vos communications protégées, votre conformité garantie : la messagerie sous haute surveillance",
                imageUrl: "https://info.vadesecure.com/hubfs/featured%20image%20-%204%20Email%20Security%20Tools%20You%20Need%20in%20Your%20Stack.jpeg" // remplacez par votre vraie image
              },
              {
                title: "Sécurisation du trafic réseau",
                description: "Filtrez, bloquez, sécurisez : votre réseau, un territoire infranchissable pour les cybermenaces",
                imageUrl: "https://www.cisco.com/c/dam/assets/swa/img/anchor-info/what-is-network-security-blog-banner-628x353.png" // remplacez par votre vraie image
              },
              {
                title: "Traçabilité des accès aux bases de données",
                description: "Chaque connexion sous contrôle : des experts dédiés pour traquer et prévenir les risques",
                imageUrl: "https://www.datasunrise.com/wp-content/uploads/2024/05/Data-Lineage-1024x585.webp" // remplacez par votre vraie image
              }
            ].map((area, index) => (
              <div
                key={index}
                className="bg-white/10 p-6 rounded-xl border border-white/20 hover:bg-white/20 transition"
              >
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-4">
                  <img src={area.imageUrl} 
                  alt={area.title} 
                  className="w-full h-full object-cover" />
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
        <PartnerLogos />
      </div>
    </div>
  );
};

export default Home;