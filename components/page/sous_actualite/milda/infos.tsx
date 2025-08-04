"use client";

import {useState} from "react"
import { Calendar,  Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import Lightbox from "react-image-lightbox";
import { Button } from "@/components/ui/button";

import "react-image-lightbox/style.css";


const mildaList = [
    "/actuality/milda/Moustique-1.jpg",
    "/actuality/milda/Moustique-2.jpg",
    "/actuality/milda/Moustique-3.jpg",
    "/actuality/milda/Moustique-4.jpg",
    "/actuality/milda/Moustique-5.jpg",
];

export default function Infos() {

    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);


    return (
        <div className="px-4 py-10 bg-white flex justify-center">
            <div className="max-w-4xl w-full">
                {/* Tags */}
                <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded">
                        Actualités
                    </span>
                </div>

                {/* Titre */}
                <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
                    JOURNEE MONDIALE DE LUTTE CONTRE LE PALIDISME <br/>
                    <span className="h4">Sensibilisation sur l'utilisation de MILDA</span>
                </h1>

                {/* Date & vues */}
                <div className="flex items-center text-sm text-gray-500 mb-6">
                     <span className="flex items-center mr-4">
                        <Calendar className="w-4 h-4 mr-1" />
                        Mars 04, 2025
                     </span>
                </div>

                {/* Images */}
                <div className="space-y-6">
                    {/* Image principale */}
                    <div className="w-full h-[400px] relative rounded-lg shadow overflow-hidden cursor-pointer">
                        <Image
                            src={mildaList[0]}
                            alt="image principale"
                            layout="fill"
                            objectFit="cover"
                            onClick={() => {
                                setPhotoIndex(0);
                                setIsOpen(true);
                            }}
                        />
                    </div>

                    {/* Galerie en grille */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                        {mildaList.slice(1).map((src, index) => (
                            <div
                                key={index + 1}
                                className="w-full h-[200px] relative rounded-md overflow-hidden cursor-pointer"
                                onClick={() => {
                                    setPhotoIndex(index + 1);
                                    setIsOpen(true);
                                }}
                            >
                                <Image
                                    src={src}
                                    alt={`image ${index + 2}`}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Visionneuse d'image */}
                {isOpen && (
                    <Lightbox
                        mainSrc={mildaList[photoIndex]}
                        nextSrc={mildaList[(photoIndex + 1) % mildaList.length]}
                        prevSrc={
                            mildaList[(photoIndex + mildaList.length - 1) % mildaList.length]
                        }
                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex(
                                (photoIndex + mildaList.length - 1) % mildaList.length
                            )
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % mildaList.length)
                        }
                        imageCaption={`Image ${photoIndex + 1} / ${mildaList.length}`}
                    />
                )}

                {/* Réseaux sociaux */}
                {/* Social Media Icons */}
                <div className="flex gap-4 pt-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-md"
                    >
                        <Facebook className="h-5 w-5" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-slate-600 hover:text-pink-600 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-md"
                    >
                        <Instagram className="h-5 w-5" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-slate-600 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-md"
                    >
                        <Twitter className="h-5 w-5" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-slate-600 hover:text-blue-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-md"
                    >
                        <Linkedin className="h-5 w-5" />
                    </Button>
                </div>
            </div>

        </div>
    )
}

