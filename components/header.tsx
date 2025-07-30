"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Clock,
  Download,
} from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Brochure_PMC.jpeg"; // Assurez-vous que ce fichier existe dans le dossier public
    link.download = "brochure-prevent-care-medical.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "Présentation", href: "/presentation" },
    { name: "Prestations", href: "/prestation" },
    { name: "Formations", href: "/formation" },
    { name: "Prendre Un RDV", href: "/rendezvous" },
    { name: "Actualités", href: "/actualite" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`w-full bg-white ${
        isScrolled ? "sticky top-0 shadow-md z-50" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-2 border-b">
          <div className="text-sm text-center md:text-left text-gray-600 mb-2 md:mb-0">
            Cabinet spécialisé en Médecine du Travail en Côte d'Ivoire
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors group"
            >
              <Facebook
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors group"
            >
              <Instagram
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors group"
            >
              <Twitter
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors group"
            >
              <Linkedin
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>

        {/* Main header */}
        <div className="flex justify-between items-center py-4">
          <div className="flex">
            <Link href="/" className="flex items-center group">
              <div className="relative w-[160px] h-32 mr-2">
                <img
                  src="/logo.jpg"
                  alt="Logo PCM"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="hidden md:block">
                <h1 className="font-bold text-lg text-blue-900 group-hover:text-blue-700 transition-colors">
                  CABINET PCM
                </h1>
                <p className="text-xs text-green-900 group-hover:text-green-700 transition-colors">
                  PREVENT CARE MEDICAL
                </p>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {/* Adresse */}
            <div className="flex items-center group">
              <MapPin
                className="text-green-800 mr-2 group-hover:text-green-600 group-hover:animate-bounce transition-all"
                size={50}
              />
              <div className="group-hover:translate-x-1 transition-transform">
                <p className="text-sm text-gray-500">
                  Plateau avenue Delafosse
                </p>
                <p className="font-medium text-xl text-indigo-900 group-hover:text-indigo-700 transition-colors">
                  Abidjan
                </p>
              </div>
            </div>

            {/* Téléphone */}
            <div className="flex items-center group">
              <Phone
                className="text-green-800 mr-2 group-hover:text-green-600 group-hover:animate-ring transition-all"
                size={50}
              />
              <div className="group-hover:translate-x-1 transition-transform">
                <p className="text-sm text-gray-500">Contactez-Nous</p>
                <p className="font-medium text-xl text-indigo-900 group-hover:text-indigo-700 transition-colors">
                  +225 01 53 88 66 72
                </p>
              </div>
            </div>

            {/* Rendez-vous */}
            <div className="flex items-center group">
              <Clock
                className="text-green-800 mr-2 group-hover:text-green-600 group-hover:animate-spin transition-all"
                size={50}
              />
              <div className="group-hover:translate-x-1 transition-transform">
                <p className="text-sm text-gray-500">Rendez-Vous</p>
                <p className="font-medium text-xl text-indigo-900 group-hover:text-indigo-700 transition-colors">
                  En ligne
                </p>
              </div>
            </div>

            {/* Brochure */}
            <div className="flex items-center group">
              <button
                onClick={handleDownload}
                className="flex items-center cursor-pointer"
              >
                <Download
                  className="text-green-800 mr-2 group-hover:text-green-600 group-hover:animate-pulse transition-all"
                  size={50}
                />
                <div className="group-hover:translate-x-1 transition-transform">
                  <p className="text-sm text-gray-500">Notre Brochure</p>
                  <p className="font-medium text-xl text-indigo-900 group-hover:text-indigo-700 transition-colors">
                    Télécharger
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden group">
                <Menu className="h-6 w-6 group-hover:rotate-90 transition-transform" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center border-b pb-4">
                  <div className="font-bold text-lg text-indigo-800">
                    PREVENT CARE MEDICAL
                  </div>
                </div>
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto pt-4 border-t">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center group">
                      <MapPin
                        className="text-green-800 mr-2 group-hover:animate-bounce"
                        size={20}
                      />
                      <span className="group-hover:translate-x-1 transition-transform">
                        Plateau avenue Delafosse, Abidjan
                      </span>
                    </div>
                    <div className="flex items-center group">
                      <Phone
                        className="text-green-800 mr-2 group-hover:animate-ring"
                        size={20}
                      />
                      <span className="group-hover:translate-x-1 transition-transform">
                        +225 01 53 88 66 72
                      </span>
                    </div>
                    <div className="flex items-center group">
                      <Clock
                        className="text-green-800 mr-2 group-hover:animate-spin"
                        size={20}
                      />
                      <span className="group-hover:translate-x-1 transition-transform">
                        Rendez-Vous En ligne
                      </span>
                    </div>
                    <div className="flex items-center group">
                      <button
                        onClick={handleDownload}
                        className="flex items-center"
                      >
                        <Download
                          className="text-green-800 mr-2 group-hover:animate-pulse"
                          size={20}
                        />
                        <span className="group-hover:translate-x-1 transition-transform">
                          Télécharger Notre Brochure
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex justify-between items-center py-4 border-t">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-blue-600 transition-colors relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
