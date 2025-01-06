import React, { useRef, useEffect, useState } from "react";

const PartnerLogos: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  
  const partners = [
    {
      name: "Morphisec",
      logo: "https://www.morphisec.com/hubfs/Morphisec-Logo.svg"
    },
    {
      name: "Mailinblack",
      logo: "https://www.mailinblack.com/wp-content/uploads/2024/03/logomailinblackfr1.webp"
    },
    {
      name: "Fortinet",
      logo: "https://www.fortinet.com/content/dam/fortinet/images/general/fortinet-logo.svg"
    },
    {
      name: "Device 42",
      logo: "https://www.device42.com/wp-content/uploads/2024/05/device42-fw-black.webp"
    },
    {
      name: "F5",
      logo: "https://www.f5.com/content/dam/f5/f5-logo.svg"
    },
    {
      name: "Netwrix",
      logo: "https://img.netwrix.com/elements/netwrix_logo.svg"
    }
  ];

  useEffect(() => {
    if (scrollRef.current) {
      setScrollWidth(scrollRef.current.scrollWidth / 2);
    }
  }, []);

  // Définir les styles d'animation dynamiquement
  const scrollStyle = {
    animation: `scroll ${scrollWidth * 0.01}s linear infinite`, // Ajustez le multiplicateur pour la vitesse
  };

  return (
    <div className="relative w-full bg-white py-6 overflow-hidden mb-12">
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${scrollWidth}px);
            }
          }
          
          .partner-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-8">
        Nos Partenaires
      </h2>

      <div className="w-[90%] max-w-4xl mx-auto overflow-hidden">
        <div 
          ref={scrollRef}
          className="partner-scroll flex space-x-12"
          style={scrollStyle}
        >
          {/* Premier groupe de logos */}
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 md:w-52 p-4 bg-gray-600 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 md:h-16 w-full object-contain"
              />
            </div>
          ))}
          
          {/* Deuxième groupe de logos pour un défilement continu */}
          {partners.map((partner, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-shrink-0 w-40 md:w-52 p-4 bg-gray-600 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 md:h-16 w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;