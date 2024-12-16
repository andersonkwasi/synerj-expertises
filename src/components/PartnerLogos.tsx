import React from "react";

const PartnerLogos: React.FC = () => {
  const partners = [
    {
      name: "Morphisec",
      logo: "https://www.morphisec.com/hubfs/Morphisec-Logo.svg"        
    },
    {
      name: "WALLIX",
      logo: "https://www.wallix.com/wp-content/uploads/2023/06/wallx_2023_OK062023_blanc_OK.svg"        
    },
    {
      name: "Mailinblack",
      logo: "https://www.mailinblack.com/wp-content/uploads/2024/03/logomailinblackfr1.webp"        
    },
    {
      name: "Ivanti",
      logo: "https://static.ivanti.com/sites/marketing/media/images/logos/ivanti-logo-red.svg"        
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
      name: "Symantec",
      logo: "https://vip.symantec.com/images/symclogo.png"
    }
  ];

  return (
    <div className="relative w-full bg-white py-6 overflow-hidden mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-8">
        Nos Partenaires
      </h2>
    
      {/* Conteneur avec largeur limitée */}
      <div className="w-[90%] max-w-4xl mx-auto overflow-hidden">
        <div className="flex animate-marquee space-x-12">
          {/* Affichage des logos */}
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 md:w-52 p-2 bg-gray-600 rounded-lg shadow-md"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 md:h-16 object-contain mx-auto"
              />
            </div>
          ))}
          {/* Répétition des logos pour effet infini */}
          {partners.map((partner, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-shrink-0 w-40 md:w-52 p-2 bg-gray rounded-lg shadow-md"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 md:h-16 object-contain mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;
