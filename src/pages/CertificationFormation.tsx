import React from 'react';
import { 
  FaUserGraduate, FaUserTie, FaUserCheck, 
  FaBook, FaCertificate, FaChalkboardTeacher 
} from 'react-icons/fa';

const CertificationFormation: React.FC = () => {
  const trainingServices = [
    {
      icon: FaUserGraduate,
      title: "Formations Expertes",
      description: "Programmes de formation sur mesure conçus pour élever les compétences de vos équipes.",
      details: [
        "Formations techniques spécialisées",
        "Modules adaptés à vos besoins",
        "Apprentissage pratique"
      ]
    },
    {
      icon: FaUserTie,
      title: "Transfert de Compétences",
      description: "Stratégie complète de transmission et de développement des compétences internes.",
      details: [
        "Coaching personnalisé",
        "Mentorat expert",
        "Accompagnement à long terme"
      ]
    },
    {
      icon: FaUserCheck,
      title: "Parcours de Certification",
      description: "Préparation et accompagnement pour l'obtention de certifications professionnelles.",
      details: [
        "Préparation aux certifications",
        "Suivi personnalisé",
        "Validation des compétences"
      ]
    }
  ];

  const learningHighlights = [
    {
      icon: FaBook,
      title: "Apprentissage Modulaire",
      description: "Des programmes flexibles adaptés à tous les niveaux et tous les besoins professionnels."
    },
    {
      icon: FaCertificate,
      title: "Certifications Reconnues",
      description: "Préparation et accompagnement vers les certifications les plus recherchées du marché."
    },
    {
      icon: FaChalkboardTeacher,
      title: "Expertise Pédagogique",
      description: "Une équipe de formateurs experts avec une expérience terrain significative."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-indigo-900 mb-6">
            Transformation des Compétences
          </h1>
          <p className="text-xl text-indigo-700 max-w-3xl mx-auto">
            Développez, certifiez et valorisez les talents de vos équipes avec nos solutions de formation sur mesure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {trainingServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border-2 border-indigo-100 shadow-xl rounded-2xl p-6 
              transform hover:scale-105 hover:shadow-2xl transition duration-300 group"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="bg-indigo-100 p-4 rounded-full">
                  <service.icon 
                    className="h-16 w-16 text-indigo-600 group-hover:text-indigo-800 
                    transition duration-300 transform group-hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-indigo-800">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mb-6 min-h-[100px]">
                {service.description}
              </p>
              <div className="bg-indigo-50 rounded-lg p-4">
                <ul className="list-disc list-inside text-indigo-700">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="mb-1">{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <section className="bg-white rounded-2xl shadow-lg p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-900">
            Notre Approche Pédagogique
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningHighlights.map((highlight, index) => (
              <div 
                key={index} 
                className="text-center bg-indigo-50 p-6 rounded-xl 
                transform hover:scale-105 transition duration-300"
              >
                <div className="flex justify-center mb-6">
                  <highlight.icon className="h-16 w-16 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-indigo-800">
                  {highlight.title}
                </h3>
                <p className="text-indigo-700">{highlight.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CertificationFormation;