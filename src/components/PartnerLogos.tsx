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
      name: "Kemp",
      logo: "https://www.edgenexus.io/wp-content/uploads/2021/07/kemp-logo.png"

    },
    {
      name: "Forescout",
      logo: "https://www.forescout.com/wp-content/themes/forescout_custom_theme2021/public/images/logo.svg"
    },

    {
      name: "Silverfort",
      logo: "https://cybercompare.com/wp-content/uploads/2024/02/Silverfort_Logo_Black-1024x224.png"
    },
    {
      name: "Silverfort",
      logo: "https://old.roi4cio.com/fileadmin/user_upload/SearchInform_Information_Security_Perimeter.png"
    },

    {
      name: "CyberArk",
      logo: "https://www.is4u.be/wp-content/uploads/2022/06/CyberArk_logo_Colour-800x241.png"
    },

    {
      name: "Sentinelone",
      logo: "https://www.sentinelone.com/wp-content/themes/sentinelone/assets/svg/header-logo-dark.svg"
    },
    {
      name: "Cybereason",
      logo: "https://www.cybereason.com/hubfs/dam/images/images-web/logos/cr-brand/cr-logo-inline--primary-black.png"
    },
    {
      name: "Mailinblack",
      logo: "https://www.mailinblack.com/wp-content/uploads/2024/03/logomailinblackfr1.webp"
    },
    {
      name: "Fortra",
      logo: "https://static.fortra.com/fortra-global-assets/fortra-logo-full.svg"
    },
    {
      name: "Fortinet",
      logo: "https://www.fortinet.com/content/dam/fortinet/images/general/fortinet-logo.svg"
    },
    {
      name: "Secpoint",
      logo: "https://www.depoturk.com/img/brands/secpoint.png"
    },
    {
      name: "Device 42",
      logo: "https://www.device42.com/wp-content/uploads/2024/05/device42-fw-black.webp"
    },
    {
      name: "Hillstone",
      logo: "https://www.hillstonenet.com/wp-content/uploads/hillstone-networks-logo.svg"
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