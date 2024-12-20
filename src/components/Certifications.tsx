import React from 'react';

const NosCertifications: React.FC = () => {
  const certifications = [
    '/Certificats/CCNP.png',
    '/Certificats/Rapid7.png',
    '/Certificats/f5CTS.png',
    '/Certificats/F5CA.png',
    '/Certificats/fortinet.png',
    '/Certificats/kaspersky.png',
    '/Certificats/palo.png',
    '/Certificats/veeam.png',
    '/Certificats/virtualisation.png',
    '/Certificats/vmware.png',
    '/Certificats/wallix.png',
  ];

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">
          Nos Certifications
        </h2>
        <div className="relative overflow-hidden">
          {/* Container pour le défilement */}
          <div className="flex whitespace-nowrap animate-marquee">
            {/* Premier groupe de certifications */}
            <div className="flex space-x-8">
              {certifications.map((cert, index) => (
                <div
                  key={`first-${cert}-${index}`}
                  className="flex items-center justify-center bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-110 hover:shadow-xl min-w-[200px] min-h-[160px] inline-block"
                >
                  <img
                    src={cert}
                    alt={`Certification ${index + 1}`}
                    className="h-32 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
            {/* Deuxième groupe de certifications */}
            <div className="flex space-x-8">
              {certifications.map((cert, index) => (
                <div
                  key={`second-${cert}-${index}`}
                  className="flex items-center justify-center bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-110 hover:shadow-xl min-w-[200px] min-h-[160px] inline-block"
                >
                  <img
                    src={cert}
                    alt={`Certification ${index + 1}`}
                    className="h-32 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NosCertifications;