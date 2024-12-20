import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileSearchIcon,
  WrenchIcon,
  CodeIcon,
  NetworkIcon,
  CloudIcon,
  BookOpenIcon
} from 'lucide-react';

interface ServiceItem {
  title: string;
  icon: React.ReactNode;
  pageUrl:string
}

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Conseils, Audit et Optimisation",
      icon: <FileSearchIcon className="w-16 h-16 text-neoery-blue" />,
      pageUrl:"/consulting"
    },
    {
      title: "Assistance Technique, Maintenance et Support",
      icon: <WrenchIcon className="w-16 h-16 text-neoery-green" />,
      pageUrl:"/assistance"
    },
    {
      title: "Ingénieurie & AMO",
      icon: <CodeIcon className="w-16 h-16 text-neoery-orange" />,
      pageUrl:"/engineering"
    },
    {
      title: "Conception, Integration et Opération",
      icon: <NetworkIcon className="w-16 h-16 text-neoery-blue" />,
      pageUrl:"/conceptions"
    },
    {
      title: "Services Managés XAAS",
      icon: <CloudIcon className="w-16 h-16 text-neoery-green" />,
      pageUrl:"/servicesXaas"
    },
    {
      title: "Formation, Transfert de Compétences et Certification",
      icon: <BookOpenIcon className="w-16 h-16 text-neoery-orange" />,
      pageUrl:"/certificationFormation"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-neoery-blue to-neoery-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-neoery-orange">
            Nos Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white/80">
            SYNERJ vous accompagne dans votre transformation digitale avec des solutions innovantes et sur-mesure.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16 -mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center"
            >
              <div className="mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-neoery-black">
                {service.title}
              </h3>
              <Link 
                to={service.pageUrl}
                className="inline-block bg-neoery-blue text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition"
              >
                En savoir plus
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-neoery-orange/10 to-neoery-blue/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-neoery-black">
            Votre Transformation Digitale et votre Cyber-Resilience Commence Ici
          </h2>
          <Link
            to="/contact"
            className="bg-neoery-orange text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition"
          >
            Contactez-nous
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;