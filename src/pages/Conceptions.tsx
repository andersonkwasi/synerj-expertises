import React from 'react';
import {
  FaShieldAlt, FaLaptop, FaLock,
  FaDatabase, FaTrashAlt, FaBalanceScale, FaWifi, FaEnvelope,
  FaCogs,
  FaFingerprint,
  FaTags,
  FaChalkboardTeacher,
  FaShieldVirus,
  FaBan,
  FaGlobe,
  FaKey,
  FaMobileAlt,
  FaDoorOpen,
  FaUserShield,
  FaRocket,
  FaServer
} from 'react-icons/fa';
import { FaFileShield } from 'react-icons/fa6';

const CybersecuritySolutions: React.FC = () => {
  const solutions = [

    { icon: FaLaptop, title: "Sécurité des postes de travail", description: "EDR, XDR et gestion des endpoints." },
    { icon: FaChalkboardTeacher, title: "Sensibilisation à la cybersécurité", description: "Plateforme de formation et sensibilisation." },
    { icon: FaShieldAlt, title: "Firewalling et Network", description: "Firewall, filtrage URL, routing et switching." },
    { icon: FaGlobe, title: "Protection des applications Web", description: "Firewall applicatif pour sécuriser vos applications." },
    { icon: FaShieldVirus, title: "Système de prévention d’intrusion", description: "IPS pour bloquer les menaces en temps réel." },
    { icon: FaDatabase, title: "Gestion des vulnérabilités", description: "Identification, évaluation et correction des failles." },
    { icon: FaKey, title: "Authentification multifacteur", description: "Sécurisation des accès avec MFA." },
    { icon: FaUserShield, title: "Gestion des comptes à privilèges", description: "Sécurisation des comptes critiques." },
    { icon: FaEnvelope, title: "Protection de la messagerie", description: "Protection de la messagerie on premise et dans le cloud." },
    { icon: FaRocket, title: "Optimisation réseau", description: "Accélération WAN et optimisation de la bande passante." },
    { icon: FaLock, title: "Contrôle d’accès réseau", description: "NAC pour une gestion avancée des accès." },
    { icon: FaShieldAlt, title: "Sécurisation du trafic réseau", description: "NDR pour détecter les menaces sur le réseau." },
    { icon: FaMobileAlt, title: "Protection des applications mobiles", description: "Sécurisation des données mobiles." },
    { icon: FaTrashAlt, title: "Effacement sécurisé des données", description: "Suppression définitive et sécurisée." },
    { icon: FaBalanceScale, title: "Load Balancer", description: "Distribution intelligente des charges réseau." },
    { icon: FaBan, title: "Prévention des fraudes et abus", description: "Stratégie de sécurité zéro confiance." },
    { icon: FaDatabase, title: "Performance et sauvegarde", description: "Sauvegarde, restauration et réplication des données." },
    { icon: FaFingerprint, title: "Traçabilité des accès", description: "Suivi des accès aux bases de données." },
    { icon: FaServer, title: "Supérvision réseau", description: "Supervision et gestion des infrastructures." },
    { icon: FaFileShield, title: "Data Loss Protection (DLP)", description: "Protection et gestion des données sensibles." },
    { icon: FaTags, title: "Classification des données", description: "Protection et gestion des données sensibles." },
    { icon: FaCogs, title: "Gestion des services informatique (ITSM)", description: "Protection et gestion des données sensibles." },
    { icon: FaDoorOpen, title: "Contrôle d’accès physique", description: "Gestion et sécurisation des accès." },
    { icon: FaWifi, title: "Wi-Fi 6 et 7", description: "Connectivité avancée et performante." }


  ];

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Conception, Integration et Opération.
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white border-2 border-blue-50 shadow-xl rounded-2xl p-6 
              transform hover:scale-105 hover:shadow-2xl transition duration-300 group"
            >
              <div className="flex items-center justify-center mb-6">
                <solution.icon
                  className="h-16 w-16 text-blue-500 group-hover:text-blue-700 
                  transition duration-300 transform group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">{solution.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CybersecuritySolutions;
