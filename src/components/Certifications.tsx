import React, { useRef, useEffect, useState } from 'react';

const NosCertifications: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  const certifications = [
    '/Certificats/CCNP.png',
    '/Certificats/f5CTS.png',
    '/Certificats/F5CA.png',
    '/Certificats/fortinet.png',
    '/Certificats/palo.png',
    '/Certificats/virtualisation.png',
    '/Certificats/vmware.png',
    '/Certificats/wallx.svg',
  ];

  useEffect(() => {
    if (scrollRef.current) {
      setScrollWidth(scrollRef.current.scrollWidth / 2);
    }
  }, []);

  const scrollStyle = {
    animation: `certScroll ${scrollWidth * 0.01}s linear infinite`, // Ajustez 0.03 pour la vitesse
  };

  return (
    <div className="py-16">
      <style>
        {`
          @keyframes certScroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${scrollWidth}px);
            }
          }
          
          .cert-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">
          Nos Certifications
        </h2>
        
        <div className="relative overflow-hidden">
          <div 
            ref={scrollRef}
            className="cert-scroll flex space-x-8"
            style={scrollStyle}
          >
            {/* Premier groupe de certifications */}
            <div className="flex space-x-8">
              {certifications.map((cert, index) => (
                <div
                  key={`first-${cert}-${index}`}
                  className="flex items-center justify-center rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-110 hover:shadow-xl min-w-[200px] min-h-[160px] inline-block"
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
                  className="flex items-center justify-center rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-110 hover:shadow-xl min-w-[200px] min-h-[160px] inline-block"
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