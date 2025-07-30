"use client";

import React, { useEffect, useState } from "react";

export default function Partenaires() {
  const logos = [
    { src: "/logos/Logo_bnetd.png", alt: "BNETD" },
    { src: "/logos/Logo_Dkindustrie.png", alt: "DK Industrie" },
    { src: "/logos/Logo_GdfTransport.png", alt: "GDF TRANSPORT" },
    { src: "/logos/Logo_MetalYapi.jpg", alt: "METAL YAPI" },
    { src: "/logos/Logo_MibemCompagny.jpg", alt: "MIBEM COMPAGNY" },
    {
      src: "/logos/Logo_TransportCi.jpeg",
      alt: "SOCIÉTÉ GÉNÉRALE DES TRANSPORTS TERRESTRES DE CÔTE D'IVOIRE",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const visibleLogosCount = 4;
  const logoSize = "h-24"; // Taille augmentée (h-24 au lieu de h-16)
  const logoSpacing = "gap-16"; // Espacement augmenté entre les logos

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % logos.length);
        setTransitioning(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [logos.length]);

  const getVisibleLogos = () => {
    return Array.from({ length: visibleLogosCount }).map(
      (_, i) => logos[(currentIndex + i) % logos.length]
    );
  };

  return (
    <div className="w-full bg-gray-100 py-16 overflow-hidden">

      <div className="flex justify-center">
        <div
          className={`flex ${logoSpacing} items-center justify-center h-40 w-full max-w-6xl mx-auto`}
        >
          {getVisibleLogos().map((logo, index) => (
            <div
              key={`${logo.src}-${index}`}
              className={`
                relative transition-all duration-500 ease-in-out
                ${
                  transitioning ? "opacity-0 scale-90" : "opacity-100 scale-100"
                }
                hover:scale-125 hover:z-10 hover:shadow-xl
                flex-shrink-0
              `}
              style={{
                transitionDelay: `${index * 75}ms`,
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`${logoSize} w-auto object-contain transition-transform duration-300`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
