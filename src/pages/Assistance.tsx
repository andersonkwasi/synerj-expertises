import React from 'react';
import { 
  FaLaptop, FaTools, FaClipboardList, 
  FaCloudDownloadAlt, FaUserCog
} from 'react-icons/fa';

const Assistance: React.FC = () => {
  const assistanceServices = [
    {
      icon: FaLaptop,
      title: "Suivi des Actifs et du martériel Informatique",
      description: "Gestion complète de votre parc informatique, de l'inventaire à la maintenance préventive.",
      details: [
        "Inventaire détaillé",
        "Tracking des équipements",
        "Maintenance proactive"
      ]
    },
    {
      icon: FaClipboardList,
      title: "Inventaire partiel ou complet de votre parc Informatique",
      description: "Réalisation d'inventaires partiels ou complets pour une visibilité totale de votre infrastructure.",
    },
    {
      icon: FaTools,
      title: "Gestion du Parc Informatique",
      description: "Solution intégrée pour la gestion complète de votre infrastructure technologique.",
    },
    {
      icon: FaCloudDownloadAlt,
      title: "Gestion des Actifs Logiciels",
      description: "Optimisation de vos licences et ressources logicielles avec des outils avancés.",
    },
    {
      icon: FaUserCog,
      title: "Assistance et Support Technique",
      description: "Assistance technique réactive et personnalisée pour résoudre vos défis informatiques.",
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-6">
            Assistance Technique Maintenance et Support
          </h1>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Assistance;