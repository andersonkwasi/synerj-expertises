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
    /*{
      name: "Forescout",
      logo: "https://www.forescout.com/wp-content/themes/forescout_custom_theme2021/public/images/logo.svg"
    },*/
    {
      name: "Cisco",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png"
    },
    {
      name: "Silverfort",
      logo: "https://cybercompare.com/wp-content/uploads/2024/02/Silverfort_Logo_Black-1024x224.png"
    },
    {
      name: "Gatewatcher",
      logo: "https://www.hexatrust.com/wp-content/uploads/2023/11/GW_Logotype_RED_RVB_EXE.png"
    },
    {
      name: "Varonis",
      logo: "https://www.exclusive-networks.com/ma/wp-content/uploads/sites/2/2021/03/Varonis-Logo-e1613231318431.png"
    },
    {
      name: "SearchInform",
      logo: "https://old.roi4cio.com/fileadmin/user_upload/SearchInform_Information_Security_Perimeter.png"
    },
    {
      name: "Ivanti",
      logo: "https://static.ivanti.com/sites/marketing/media/images/logos/ivanti-logo-red.svg"
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
      name: "Knowbe4",
      logo: "https://www.knowbe4.com/hs-fs/hubfs/Knowbe4_Dec2015/Logos/KB4-logo.png?width=200&name=KB4-logo.png"
    },
    {
      name: "Mailinblack",
      logo: "https://www.oxylog.fr/wp-content/uploads/2019/12/Logo_mib-spam-long.png"
    },
    {
      name: "Fortra",
      logo: "https://static.fortra.com/hs-logo.png"
    },
    {
      name: "Paloalto",
      logo: "https://www.paloaltonetworks.com/etc/clientlibs/clean/imgs/pan-logo-dark.svg"
    },
    {
      name: "Secpoint",
      logo: "https://www.depoturk.com/img/brands/secpoint.png"
    },
    {
      name: "Device42",
      logo: "https://www.device42.com/wp-content/uploads/2024/05/device42-fw-black.webp"
    },
    {
      name: "Hillstone",
      logo: "https://www.hillstonenet.com/wp-content/uploads/hillstone-networks-logo.svg"
    },
    /*{
      name: "F5",
      logo: "https://www.f5.com/content/dam/f5/f5-logo.svg"
    },*/
    {
      name: "Netwrix",
      logo: "https://img.netwrix.com/elements/netwrix_logo.svg"
    },
    {
      name: "Solarwinds",
      logo: "https://exer.fr/wp-content/uploads/2022/01/SW_Logo_Web_Orange.png.webp"
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
              className="flex-shrink-0 w-40 md:w-52 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
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
              className="flex-shrink-0 w-40 md:w-52 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
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