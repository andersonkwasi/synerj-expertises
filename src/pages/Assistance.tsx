import React from 'react';
import { 
  FaLaptop, FaTools, FaClipboardList, 
  FaCloudDownloadAlt, FaUserCog,
  FaShieldAlt, FaChartLine, FaLifeRing 
} from 'react-icons/fa';

const Assistance: React.FC = () => {
  const assistanceServices = [
    {
      icon: FaLaptop,
      title: "Suivi des Actifs IT",
      description: "Gestion complète de votre parc informatique, de l'inventaire à la maintenance préventive.",
      details: [
        "Inventaire détaillé",
        "Tracking des équipements",
        "Maintenance proactive"
      ]
    },
    {
      icon: FaClipboardList,
      title: "Inventaire Précis",
      description: "Réalisation d'inventaires partiels ou complets pour une visibilité totale de votre infrastructure.",
      details: [
        "Cartographie du parc",
        "Analyse de l'utilisation",
        "Rapport détaillé"
      ]
    },
    {
      icon: FaTools,
      title: "Gestion du Parc Informatique",
      description: "Solution intégrée pour la gestion complète de votre infrastructure technologique.",
      details: [
        "Acquisition",
        "Configuration",
        "Maintenance"
      ]
    },
    {
      icon: FaCloudDownloadAlt,
      title: "Gestion des Actifs Logiciels",
      description: "Optimisation de vos licences et ressources logicielles avec des outils avancés.",
      details: [
        "Inventaire logiciel",
        "Optimisation des licences",
        "Conformité réglementaire"
      ]
    },
    {
      icon: FaUserCog,
      title: "Support Technique",
      description: "Assistance technique réactive et personnalisée pour résoudre vos défis informatiques.",
      details: [
        "Support de premier niveau",
        "Résolution de problèmes",
        "Support à distance"
      ]
    }
  ];

  const expertiseHighlights = [
    {
      icon: FaShieldAlt,
      title: "Sécurité Renforcée",
      description: "Approche proactive de la protection de vos systèmes et données."
    },
    {
      icon: FaChartLine,
      title: "Optimisation Continue",
      description: "Amélioration constante de votre infrastructure pour une performance maximale."
    },
    {
      icon: FaLifeRing,
      title: "Support Permanent",
      description: "Assistance technique disponible pour garantir la continuité de vos opérations."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-6">
            Assistance et Support IT Complet
          </h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Des solutions de gestion informatique intelligentes et proactives pour simplifier et optimiser votre infrastructure technologique.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {assistanceServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border-2 border-blue-100 shadow-xl rounded-2xl p-6 
              transform hover:scale-105 hover:shadow-2xl transition duration-300 group"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <service.icon 
                    className="h-16 w-16 text-blue-600 group-hover:text-blue-800 
                    transition duration-300 transform group-hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-blue-800">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mb-6 min-h-[100px]">
                {service.description}
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <ul className="list-disc list-inside text-blue-700">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="mb-1">{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <section className="bg-white rounded-2xl shadow-lg p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
            Notre Différence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertiseHighlights.map((highlight, index) => (
              <div 
                key={index} 
                className="text-center bg-blue-50 p-6 rounded-xl 
                transform hover:scale-105 transition duration-300"
              >
                <div className="flex justify-center mb-6">
                  <highlight.icon className="h-16 w-16 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                  {highlight.title}
                </h3>
                <p className="text-blue-700">{highlight.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Assistance;