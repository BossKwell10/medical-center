"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ActualitesPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredTitle, setHoveredTitle] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Données des actualités complètes comme sur l'image
  const newsItems = [
    {
      title: "Formation aux gestes de premiers secours",
      description: "Médiathèque",
      date: "03 Fév 2024",
      tag: "Formation",
      image:
        "https://emr.ci/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-25-at-11.15.40-7-wpp1724299897220-440x297.jpeg",
      link: "/sous_actualite/infos1",
    },
    {
      title: "Sensibilisation sur l'utilisation de MILDA",
      description: "Actualités",
      date: "04 Mar 2025",
      tag: "Sensibilisation",
      image: "/actuality/milda/Moustique-1.jpg",
      link: "/sous_actualite/milda",
    }
  ];

  // Données des prestations (categories)
  const prestations = [
    {
      name: "ACTUALITÉS",
      link: "/prestations/medecine-sociale",
      description: "Programmes de santé publique en entreprise",
    },
    {
      name: "MÉDIATHÈQUE",
      link: "/prestations/examens-medicaux",
      description: "Visites médicales et bilans de santé",
    },
  ];

  // Articles populaires avec images
  const popularArticles = [
    {
      title: "Formation aux gestes de premiers secours",
      date: "28 Fév 2024",
      image:
        "https://emr.ci/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-25-at-11.15.40-7-wpp1724299897220-440x297.jpeg",
    },
    {
      title: "Journee mondiale de lutte contre le paludisme",
      date: "04 Mar 2025",
      image:
        "/actuality/milda/Moustique-1.jpg",
    },
  ];

  const filteredNews = newsItems.filter((item) => {
    const matchesCategory = selectedCategory
      ? item.description.toLowerCase() === selectedCategory.toLowerCase()
      : true;

    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col items-center py-10 px-4 bg-white">
      <div className="max-w-5xl w-full">
        {/* En-tête */}
        <div className="text-center mb-12" id="actualites">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">ACTUALITÉS</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Toutes les dernières actualités de notre cabinet médical
          </p>
        </div>

        <div className="mt-6 flex gap-6 flex-col md:flex-row">
          {/* Partie principale avec les cartes d'actualités */}
          <div className="w-full md:w-2/3">
            {/* Grille des cartes d'actualités */}
            {selectedCategory && (
              <div className="mb-4">
                <Button
                  variant="outline"
                  onClick={() => setSelectedCategory(null)}
                >
                  Afficher toutes les actualités
                </Button>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredNews.length === 0 ? (
                <div className="col-span-full text-center text-gray-500 font-medium py-10">
                  Aucun article trouvé.
                </div>
              ) : (
                filteredNews.map((item, index) => (
                  <Card
                    key={index}
                    className={`
                    shadow-md transition-all duration-300 ease-in-out relative
                    ${
                      hoveredCard === index
                        ? "ring-2 ring-blue-500 scale-[1.02] relative z-10 -translate-y-4"
                        : "hover:shadow-lg"
                    }
                  `}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Image de la carte */}
                    <div className="overflow-hidden h-48">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Tag */}
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {item.tag}
                    </div>

                    {/* Contenu de la carte */}
                    <CardHeader>
                      <p className="text-gray-400 text-balance font-semibold hover:text-blue-800">
                        {item.description}
                      </p>
                      <CardDescription className="flex items-center gap-4 mt-2">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {item.date}
                        </span>
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <CardTitle
                        className={`
                        text-xl font-extrabold 
                        ${
                          hoveredTitle === index
                            ? "text-blue-800"
                            : "text-blue-900"
                        }
                        transition-colors duration-200
                      `}
                        onMouseEnter={() => setHoveredTitle(index)}
                        onMouseLeave={() => setHoveredTitle(null)}
                      >
                        {item.title}
                      </CardTitle>
                    </CardContent>

                    <CardFooter>
                      <Link href={item.link}>
                        <div className="absolute bottom-4 right-4">
                          <div className="bg-red-500 rounded-full p-3 cursor-pointer hover:bg-red-600 transition-colors">
                            <ArrowRight className="h-5 w-5 text-white" />
                          </div>
                        </div>
                      </Link>
                    </CardFooter>
                  </Card>
                ))
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-1/3 space-y-8">
            {/* Section Catégories & Prestations */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-xl mb-6 text-blue-800">
                CATÉGORIES
              </h3>
              <div className="space-y-3">
                {prestations.map((prestation) => (
                  <div
                    key={prestation.name}
                    className={`p-3 border rounded-lg cursor-pointer transition-all duration-300 hover:bg-blue-50 hover:border-blue-200 ${
                      selectedCategory === prestation.name
                        ? "bg-blue-100 border-blue-300"
                        : ""
                    }`}
                    onClick={() => setSelectedCategory(prestation.name)}
                  >
                    <h4 className="font-semibold text-gray-800 hover:text-blue-600">
                      {prestation.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {prestation.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section Recherche */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-6 text-blue-800">
                RECHERCHE
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border p-2 w-full rounded focus:ring-2 focus:ring-green-600 border-green-500"
                />

                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600 hover:text-green-800"
                    aria-label="Effacer la recherche"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Section Articles populaires avec images */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-xl mb-6 text-blue-800">
                ARTICLES POPULAIRES
              </h3>
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 pb-4 border-b last:border-0"
                  >
                    <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-lg">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 hover:text-blue-600 cursor-pointer">
                        {article.title}
                      </h4>
                      <p className="text-sm text-gray-500 flex items-center mt-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-bold text-xl mb-3 text-blue-800">TAGS</h3>
              <div className="flex flex-row text-center text-white m-2 text-sm">
                <div className="basis-64 rounded-xl bg-indigo-200 me-2">Sensibilisation</div>
                <div className="basis-64 rounded-xl bg-indigo-200">Formations</div>
              </div>
              <div className="space-y-4">
              <div className="flex-shrink-0  overflow-hidden rounded-lg">
                  <img
                    src="https://emr.ci/wp-content/uploads/2018/10/african-american-team-working-checkup-reports-hospital-reception-desk-analyzing-patients-appointments-papers-doctor-receptionist-using-medical-forms-help-people-with-disease-scaled-770x480.jpg"
                    alt="Tag Image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
