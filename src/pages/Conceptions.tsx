import React from 'react';
import { 
  FaChartLine, FaWrench, FaCheckCircle, FaRocket, 
  FaUserShield, FaGlobeEurope, FaCloudUploadAlt 
} from 'react-icons/fa';

const Conceptions: React.FC = () => {
  const services = [
    {
      icon: FaChartLine,
      title: "Conception Stratégique",
      description: "Développement de stratégies technologiques sur mesure, alignées avec vos objectifs business et votre vision à long terme.",
    },
    {
      icon: FaWrench,
      title: "Intégration Technique",
      description: "Solution complète d'intégration de systèmes, garantissant une compatibilité et une performance optimales.",
    },
    {
      icon: FaCheckCircle,
      title: "Opérations Optimisées",
      description: "Gestion et maintenance proactive de vos infrastructures IT pour une efficacité opérationnelle maximale.",
    },
    {
      icon: FaRocket,
      title: "Innovation Technologique",
      description: "Accompagnement dans l'adoption des technologies émergentes : IA, cloud, cybersécurité, et transformation digitale.",
    }
  ];

  const advantages = [
    {
      icon: FaUserShield,
      title: "Sécurité Renforcée",
      description: "Approche proactive de la cybersécurité avec des protocoles de protection de dernière génération."
    },
    {
      icon: FaGlobeEurope,
      title: "Solutions Internationales",
      description: "Expertise dans le déploiement de solutions IT adaptées aux environnements multiculturels et multinationaux."
    },
    {
      icon: FaCloudUploadAlt,
      title: "Infrastructure Cloud",
      description: "Solutions cloud hybrides et évolutives, conçues pour la flexibilité et la performance de votre entreprise."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Solutions IT & Télécom sur Mesure
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformer vos défis technologiques en opportunités stratégiques grâce à une expertise pointue et une approche personnalisée.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border-2 border-blue-50 shadow-xl rounded-2xl p-6 
              transform hover:scale-105 hover:shadow-2xl transition duration-300 group"
            >
              <div className="flex items-center justify-center mb-6">
                <service.icon 
                  className="h-16 w-16 text-blue-500 group-hover:text-blue-700 
                  transition duration-300 transform group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-center mb-6 min-h-[100px]">
                {service.description}
              </p>
              <div className="text-center">
              </div>
            </div>
          ))}
        </div>

        <section className="bg-white rounded-2xl shadow-lg p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Nos Avantages Concurrentiels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <advantage.icon className="h-16 w-16 text-blue-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Conceptions;