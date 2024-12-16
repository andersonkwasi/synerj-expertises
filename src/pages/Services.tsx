import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpenIcon,
  LinkIcon,
  TrendingUpIcon,
  ShieldIcon,
  BarChartIcon,
  WrenchIcon
} from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Formation",
      description: "Il est essentiel de disposer d'un personnel conscient et informé de la cybersécurité pour minimiser le risque de cyberattaques. 90 % des cyberattaques exploitent une erreur humaine. Offrez à vos employés les clés pour anticiper, détecter et contrer les menaces.",
      icon: <BookOpenIcon className="text-neoery-orange w-12 h-12" />,
    },
    {
      title: "Intégration de Systèmes",
      description: "Parce que chaque seconde compte, nos intégrations rendent vos systèmes plus rapides, plus intelligents, et parfaitement alignés.",
      icon: <LinkIcon className="text-neoery-blue w-12 h-12" />,
    },
    {
      title: "Conseil en Transformation Digitale",
      description: "Accompagnement stratégique pour moderniser vos infrastructures et processus informatiques. Réinventez votre entreprise pour demain : modernisez vos outils, automatisez vos processus, et libérez votre potentiel numérique.",
      icon: <TrendingUpIcon className="text-neoery-green w-12 h-12" />,
    },
    {
      title: "Cybersécurité",
      description: "Protection avancée de vos systèmes d'information contre les menaces modernes. Anticipez les menaces, protégez vos données : avec notre expertise, la cybersécurité devient votre meilleur atout stratégique. Adoptez des solutions robustes pour une sérénité totale.",
      icon: <ShieldIcon className="text-neoery-orange w-12 h-12" />,
    },
    {
      title: "Audit",
      description: "Une vision claire pour des décisions stratégiques : identifiez vos forces, vos faiblesses et révélez tout votre potentiel.",
      icon: <BarChartIcon className="text-neoery-blue w-12 h-12" />,
    },
    {
      title: "Maintenance & Support",
      description: "Support technique continu et maintenance proactive de vos solutions informatiques. Proactif, réactif, efficace : notre support technique assure votre sérénité et maximise la disponibilité de vos solutions.",
      icon: <WrenchIcon className="text-neoery-green w-12 h-12" />,
    }
  ];

  return (
    <div className="bg-gradient-to-br from-neoery-blue to-neoery-black text-white">
      {/* Section Titre */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-neoery-orange mb-6">
          Nos Services
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          SYNERJ transforme vos défis technologiques en solutions innovantes et performantes.
        </p>
      </section>

      {/* Grille des Services */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 p-6 rounded-xl border border-white/20 hover:bg-white/20 transition transform hover:scale-105 hover:shadow-2xl duration-300 flex flex-col"
            >
              <div className="mb-4 self-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-neoery-orange text-center">
                {service.title}
              </h3>
              <p className="text-white/70 mb-4 text-center flex-grow">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Appel à l'Action */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="bg-gradient-to-r from-neoery-orange/30 to-neoery-blue/40 p-12 rounded-2xl shadow-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Votre Projet Mérite Une Solution Sur-Mesure
          </h2>
          <p className="text-xl mb-8 text-white/80">
            Discutons de vos besoins et trouvons ensemble la solution technologique optimale.
          </p>
          <Link
            to="/contact"
            className="bg-neoery-blue px-8 py-4 rounded-lg text-white font-semibold hover:bg-opacity-90 transition"
          >
            Demander un Devis
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
