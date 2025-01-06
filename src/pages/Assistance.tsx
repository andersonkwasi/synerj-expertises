import React from 'react';
import { 
  FaLaptop, FaClipboardList, 
  FaCloudDownloadAlt, FaUserCog
} from 'react-icons/fa';

const Assistance: React.FC = () => {
  const assistanceServices = [
    {
      icon: FaLaptop,
      title: "Suivi des Actifs et du martériel Informatique",
    },
    {
      icon: FaClipboardList,
      title: "Inventaire partiel ou complet de votre parc Informatique",
    },
    {
      icon: FaCloudDownloadAlt,
      title: "Gestion des Actifs Logiciels",
    },
    {
      icon: FaUserCog,
      title: "Maintenance de votre parc informatique et support"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Assistance;