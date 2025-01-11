import React from 'react';
import {
  BsFillShieldFill, BsClipboardDataFill, BsLightningChargeFill
} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ConsultingPage: React.FC = () => {
  const consultingServices = [
    {
      icon: BsFillShieldFill,
      title: "Conseil Stratégique IT",
      description: "Alignement précis de vos solutions technologiques avec vos objectifs stratégiques métiers.",
    },
    {
      icon: BsClipboardDataFill,
      title: "Audit et Cybersécurité",
      description: "Évaluation comprehensive de la sécurité et de la performance de vos systèmes informatiques.",
    },
    {
      icon: BsLightningChargeFill,
      title: "Implémentation Agile",
      description: "Déploiement expert de solutions IT avec une approche flexible et performante.",
    }
  ];


  const auditDetails = [
    "Audit de sécurité système",
    "Audit Energétique",
    "Audit d’architecture",
    "Test d'intrusions",
    "Audit de réseau et d'architecture",
    "Plan de continuité d'activité",
    "Analyse des risques IT",
    "Protection des infrastructures critiques",
    "Accompagnement à la protection des infrastructures"
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            Conseil, Audit et Optimisation
          </h1>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {consultingServices.map((service, index) => (
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
              {/*<p className="text-gray-600 text-center mb-6 min-h-[100px]">
              {service.description}
              </p> */}
            </div>
          ))}
        </div>

        <section className="bg-white rounded-2xl shadow-lg p-12 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Détail des Audits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-6 text-center">Périmètre d'Audit</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                {auditDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/b/f/bff7331214d79a08403a6507818b35e1669a235aa8c23052a7397c6542f8792a/internal-audit-slide5.png"
                alt="Audit Process"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>

        <div className="rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Votre Transformation Technologique Commence Ici</h2>
          <p className="text-xl mb-8">
            Contactez nos experts pour une analyse approfondie et une stratégie IT sur mesure.
          </p>
          <Link to="/contact">
            <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl 
          hover:bg-blue-50 transition transform hover:scale-105">
              Demander un Diagnostic
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default ConsultingPage;