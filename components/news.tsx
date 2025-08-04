"use client"; // Directive nécessaire pour utiliser les hooks React côté client

// Import des composants UI
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Calendar, ChevronRight, Clock} from "lucide-react";
import {useState} from "react";
import Link from "next/link";

export function News() {
    // États pour gérer les interactions hover
    const [hoveredCard, setHoveredCard] = useState<number | null>(null); // Index de la carte survolée
    const [hoveredTitle, setHoveredTitle] = useState<number | null>(null); // Index du titre survolé

    // Données des actualités
    const newsItems = [
        {
            title: "JOURNEE MONDIALE DE LUTTE CONTRE LE PALIDISME : Sensibilisation sur l'utilisation de MILDA",
            description: "Actualités",
            date: "15 Mars 2024",
            readTime: "5 min de lecture",
            image:
                "/actuality/milda/Moustique-1.jpg?height=440&width=297",
        },
    ];

    // @ts-ignore
    return (
        <section id="news" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* En-tête de la section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-indigo-800 mb-4 hover:text-indigo-600">
                        ACTUALITES
                    </h2>
                    <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Restez informé des dernières nouvelles et événements concernant la
                        médecine du travail.
                    </p>
                </div>

                {/* Grille des cartes d'actualités */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item, index) => (
                        <Card
                            key={index}
                            className={`
                                shadow-md transition-all duration-300 ease-in-out 
                                ${
                                hoveredCard === index
                                    ? "ring-2 ring-blue-500 scale-[1.02] relative z-10 -translate-y-4" // Effet lorsque la carte est survolée
                                    : "hover:shadow-lg" // Effet de base au survol
                            }
                            `}
                            onMouseEnter={() => setHoveredCard(index)} // Déclenche l'effet au survol
                            onMouseLeave={() => setHoveredCard(null)} // Réinitialise l'effet
                        >
                            {/* Image de la carte */}
                            <div
                                style={{
                                    overflow: "hidden",
                                    borderTopLeftRadius: "0.5rem",
                                    borderTopRightRadius: "0.5rem",
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        display: "block",
                                        objectFit: "cover",
                                        width: "100%",
                                        height: 200,
                                        backgroundColor: "var(--gray-5)",
                                    }}
                                />
                            </div>




                            {/* En-tête de la carte */}
                            <CardHeader>
                                <p className="text-gray-400 text-balance font-semibold hover:text-green-800">
                                    {item.description}
                                </p>
                                <CardDescription className="flex items-center gap-4 mt-2">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1"/>
                        {item.date}
                    </span>
                                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1"/>
                                        {item.readTime}
                    </span>
                                </CardDescription>
                            </CardHeader>

                            {/* Contenu principal de la carte */}
                            <CardContent>
                                <CardTitle
                                    className={`
                                        text-xl font-extrabold 
                                        ${
                                        hoveredTitle === index
                                            ? "text-green-800"
                                            : "text-indigo-800"
                                    }
                                        transition-colors duration-200
                                    `}
                                    onMouseEnter={() => setHoveredTitle(index)}
                                    onMouseLeave={() => setHoveredTitle(null)}
                                >
                                    {item.title}
                                </CardTitle>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Bouton "Voir toutes les actualités" */}
                <div className="text-center mt-12">
                    <Link href="/actualite">
                        <Button
                            size="lg"
                            className="bg-red-600 hover:bg-indigo-700 transition-colors"
                        >
                            Découvrez L'actualités
                            <ChevronRight className="ml-2 h-4 w-4"/>
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
