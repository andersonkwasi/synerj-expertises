import React from 'react';
import { 
  FaCloudUploadAlt, 
  FaCloudDownloadAlt, 
  FaConnectdevelop, 
  FaToolbox, 
  FaShieldAlt, 
  FaDatabase, 
} from 'react-icons/fa';

const ServicesXaas: React.FC = () => {
  const services = [
    {
      icon: FaCloudUploadAlt,
      title: 'IaaS',
      description: 'Infrastructure as a Service : Hébergement de vos systèmes et applications dans le cloud.',
      details: [
        'Serveurs virtuels hautement configurables',
        'Stockage cloud élastique',
        'Réseau défini par logiciel',
        'Sécurité et conformité avancées'
      ]
    },
    {
      icon: FaCloudDownloadAlt,
      title: 'SaaS',
      description: 'Software as a Service : Utilisation d\'applications métier hébergées et gérées à distance.',
      details: [
        'Applications prêtes à l\'emploi',
        'Mises à jour automatiques',
        'Accessibilité multi-appareils',
        'Support technique inclus'
      ]
    },
    {
      icon: FaConnectdevelop,
      title: 'PaaS',
      description: 'Platform as a Service : Hébergement et gestion de vos applications dans le cloud.',
      details: [
        'Environnements de développement complets',
        'Outils de déploiement automatisés',
        'Évolutivité instantanée',
        'Intégration continue'
      ]
    },
    {
      icon: FaToolbox,
      title: 'Managed Services',
      description: 'Services managés pour l\'administration et la maintenance de vos infrastructures IT.',
      details: [
        'Supervision 24/7',
        'Gestion proactive des incidents',
        'Optimisation des performances',
        'Expertise technique dédiée'
      ]
    },
    {
      icon: FaShieldAlt,
      title: 'Cybersécurité',
      description: 'Solutions de sécurité cloud avancées pour protéger vos actifs numériques.',
      details: [
        'Pare-feu cloud',
        'Détection des intrusions',
        'Chiffrement des données',
        'Gestion des identités'
      ]
    },
    {
      icon: FaDatabase,
      title: 'Stockage et Backup',
      description: 'Solutions de stockage cloud redondantes et sécurisées.',
      details: [
        'Sauvegarde automatique',
        'Restauration rapide',
        'Cryptage de bout en bout',
        'Archivage longue durée'
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12 animate-fade-in">
          Services Cloud Managés XAAS
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white shadow-2xl rounded-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-3xl"
            >
              <div className="flex items-center justify-center mb-6">
                <service.icon className="h-16 w-16 text-blue-600 animate-pulse-slow" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 text-gray-700">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg 
                      className="w-4 h-4 mr-2 text-blue-500" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesXaas;