import React from 'react';
import { 
  FaChartLine, FaWrench, FaCheckCircle, FaRocket, 
  FaCogs, FaShieldAlt, FaLightbulb 
} from 'react-icons/fa';

const EngineeringPage: React.FC = () => {
  const engineeringServices = [
    {
      icon: FaChartLine,
      title: "Ingénierie Stratégique",
      description: "Conception de solutions technologiques sur mesure, alignées avec votre vision stratégique et vos objectifs métiers.",
      details: [
        "Analyse approfondie des besoins",
        "Conception architecturale innovante",
        "Modélisation et prototypage"
      ]
    },
    {
      icon: FaWrench,
      title: "Optimisation des Solutions",
      description: "Amélioration continue de vos systèmes pour maximiser performance, efficacité et rentabilité.",
      details: [
        "Audit de performance",
        "Réingénierie des processus",
        "Optimisation des ressources"
      ]
    },
    {
      icon: FaCheckCircle,
      title: "Mise en Œuvre & Conformité",
      description: "Déploiement rigoureux et conformité réglementaire pour des solutions sécurisées et normatives.",
      details: [
        "Gestion de projet précise",
        "Respect des normes sectorielles",
        "Validation et certification"
      ]
    },
    {
      icon: FaRocket,
      title: "Support à l'Implémentation",
      description: "Accompagnement complet lors du déploiement de nouvelles solutions technologiques.",
      details: [
        "Formation des équipes",
        "Support technique avancé",
        "Intégration progressive"
      ]
    }
  ];

  const expertiseHighlights = [
    {
      icon: FaCogs,
      title: "Expertise Technique Pointue",
      description: "Une équipe de professionnels hautement qualifiés avec plus de 15 ans d'expérience dans l'ingénierie technologique."
    },
    {
      icon: FaShieldAlt,
      title: "Approche Sécuritaire Globale",
      description: "Intégration systématique des meilleures pratiques de cybersécurité dans chaque solution développée."
    },
    {
      icon: FaLightbulb,
      title: "Innovation Continue",
      description: "Une veille technologique permanente pour proposer des solutions toujours à la pointe de l'innovation."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            Ingénierie & Conception Technologique
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
              <div className="bg-blue-50 rounded-lg p-4">
                <ul className="list-disc list-inside text-gray-700">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="mb-1">{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <section className="bg-white rounded-2xl shadow-lg p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Notre Différenciation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertiseHighlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <highlight.icon className="h-16 w-16 text-blue-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EngineeringPage;