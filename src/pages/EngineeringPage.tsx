import React from 'react';
import { 
  FaChartLine, FaWrench, FaCheckCircle, FaRocket
} from 'react-icons/fa';

const EngineeringPage: React.FC = () => {
  const engineeringServices = [
    {
      icon: FaChartLine,
      title: "Ingénierie Stratégique",
      description: "Conception de solutions technologiques sur mesure, alignées avec votre vision stratégique et vos objectifs métiers.",
    },
    {
      icon: FaWrench,
      title: "Optimisation des Solutions",
      description: "Amélioration continue de vos systèmes pour maximiser performance, efficacité et rentabilité.",
    },
    {
      icon: FaCheckCircle,
      title: "Mise en Œuvre & Conformité",
      description: "Déploiement rigoureux et conformité réglementaire pour des solutions sécurisées et normatives.",
    },
    {
      icon: FaRocket,
      title: "Support à l'Implémentation",
      description: "Accompagnement complet lors du déploiement de nouvelles solutions technologiques.",
    }
  ];


  return (
    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            Ingénierie & AMOA
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformer vos défis technologiques en solutions stratégiques grâce à une expertise technique sur mesure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {engineeringServices.map((service, index) => (
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
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
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

export default EngineeringPage;