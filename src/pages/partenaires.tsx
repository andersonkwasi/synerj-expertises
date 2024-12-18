// src/pages/Partners.tsx
import React from 'react';
import { Link } from 'react-router-dom';

// Interface pour les partenaires
interface Partner {
  name: string;
  logo: string;
  description: string;
  technologies: string[];
}

const Partners: React.FC = () => {
  // Liste des partenaires technologiques
  const partners: Partner[] = [
    {
      name: "Morphisec",
      logo: "https://www.morphisec.com/hubfs/Morphisec-Logo.svg",
      description: "Morphisec offre des solutions de protection des endpoints (terminaux) contre les menaces avancées telles que les attaques zero-day, les ransomwares et les logiciels malveillants.",
      technologies: ["Protection des endpoints", "Protection contre les ransomwares", "Détection et prévention des menaces avancées (APT)"]
    },
    {
      name: "WALLIX",
      logo: "https://www.wallix.com/wp-content/uploads/2023/06/wallx_2023_OK062023_blanc_OK.svg",
      description: "Renforcez la sécurité de vos comptes à haute privillège, la gestion des identités et des accès.",
      technologies: ["Gestion des identités et des accès", "Gestion des sessions privilégiées", "Protection des accès à distance"]
    },
    {
      name: "Mailinblack",
      logo: "https://www.mailinblack.com/wp-content/uploads/2024/03/logomailinblackfr1.webp",
      description: "Protégez votre organisation du cyber-risque humain. Nos solutions sont conçues pour sécuriser vos e-mails entrants et sortants contre les menaces telles que le spam, les phishing et les malwares.",
      technologies: ["protection-anti spam", "simulation ransomware", "Formation à la cybersécurité", "Audit des vulnerabilites humaines"]
    },
    {
      name: "Ivanti",
      logo: "https://static.ivanti.com/sites/marketing/media/images/logos/ivanti-logo-red.svg",
      description: "Limiter proactivement les risques, booster la productivité et diminuer les coûts opérationnels.",
      technologies: ["Gestion de l'exposition", "Sécurité du réseau", "Gestion des vulnerabilité"]
    },
    {
      name: "Fortinet",
      logo: "https://www.fortinet.com/content/dam/fortinet/images/general/fortinet-logo.svg",
      description: "Solutions intégrées pour la protection des réseaux, des endpoints et des applications",
      technologies: ["Pare-feu de nouvelle génération (NGFW)", "Kubernetes", "OpenShift"]
    },
    {
      name: "Device 42",
      logo: "https://www.device42.com/wp-content/uploads/2024/05/device42-fw-black.webp",
      description: "Device42 cous aide à gérer efficacement votre infrastructure IT en centralisant la gestion des actifs, des configurations, des réseaux et des dépendances, tout en offrant des outils pour améliorer la visibilité, la planification et la sécurité des ressources technologiques.",
      technologies: ["Gestion des actifs IT", "Cartographie de l'infrastructure", "Gestion des adresses IP et des réseaux", "Gestion des licences et des logiciels"]
    },

    {
      name: "F5",
      logo: "https://www.f5.com/content/dam/f5/f5-logo.svg",
      description: "Empêchez l'accès non autorisé à vos réseaux, applications et API.",
      technologies: ["Sécurité zéro confiance", "Protection des applications Web et des API ", "Livraison d'applications modernes"]
    }
    ,
    {
      name: "Symantec",
      logo: "https://vip.symantec.com/images/symclogo.png",
      description: "Notre approche en matière de DLP se concentre sur la protection des informations sensibles au sein des entreprises contre les fuites accidentelles ou malveillantes, qu'elles se produisent via des canaux internes ou externes",
      technologies: ["Protection des données sensibles", "Prévention de l'exfiltration de données", "Formation et sensibilisation des employés", "Surveillance en temps réel et rapports détaillés "]
    }

  ];

  return (
    <div className="bg-gradient-to-br from-neoery-blue to-neoery-black text-white">
      {/* Section Titre */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6">Nos Partenaires Technologiques</h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Des alliances stratégiques qui nous permettent de vous offrir les solutions les plus innovantes du marché.
        </p>
      </section>

      {/* Grille des Partenaires */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-4 gap-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white/10 p-6 rounded-xl border border-white/20 hover:bg-white/20 transition transform hover:-translate-y-2"
            >
              {/* Logo du partenaire */}
              <div className="flex justify-center mb-6 h-24 items-center">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-16 max-w-full object-contain"
                />
              </div>

              <h3 className="text-xl font-bold mb-3 text-center text-neoery-green">
                {partner.name}
              </h3>
              <p className="text-white/70 mb-4 text-center">
                {partner.description}
              </p>

              {/* Technologies */}
              <div className="mt-4">
                <div className="flex flex-wrap gap-2 justify-center">
                  {partner.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-neoery-blue/30 px-2 py-1 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Partenariat */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="bg-neoery-orange/20 p-12 rounded-2xl">
          <h2 className="text-4xl font-bold mb-6">
            Construisons Ensemble l'Avenir Technologique
          </h2>
          <p className="text-xl mb-8 text-white/80">
            Votre entreprise recherche des partenaires technologiques innovants ?
            Discutons de nos collaborations potentielles.
          </p>
          <Link
            to="/contact"
            className="bg-neoery-blue px-8 py-4 rounded-lg text-white font-semibold hover:bg-opacity-90 transition"
          >
            Devenir Partenaire
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Partners;