"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar,  Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Lightbox from "react-image-lightbox";

import { Button } from "@/components/ui/button";

import "react-image-lightbox/style.css";

const imageList = [
  "/images/secours1.jpeg",
  "/images/secours2.jpeg",
  "/images/secours3.jpeg",
  "/images/secours4.jpeg",
  "/images/secours5.jpeg",
];

export default function Infos1() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className="px-4 py-10 bg-white flex justify-center">
      <div className="max-w-4xl w-full">
        {/* Tags */}
        <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
          {/* <span className="bg-red-100 text-red-600 px-2 py-1 rounded">
            Actualités
          </span> */}
          <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
            Médiathèque
          </span>
        </div>

        {/* Titre */}
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
          Formation aux gestes de premiers secours
        </h1>

        {/* Date & vues */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span className="flex items-center mr-4">
            <Calendar className="w-4 h-4 mr-1" />
            octobre 28, 2024
          </span>
          {/* <span> | 40 Vues</span> */}
        </div>

        {/* Images */}
        <div className="space-y-6">
          {/* Image principale */}
          <div className="w-full h-[400px] relative rounded-lg shadow overflow-hidden cursor-pointer">
            <Image
              src={imageList[0]}
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
            {imageList.slice(1).map((src, index) => (
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
            mainSrc={imageList[photoIndex]}
            nextSrc={imageList[(photoIndex + 1) % imageList.length]}
            prevSrc={
              imageList[(photoIndex + imageList.length - 1) % imageList.length]
            }
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex(
                (photoIndex + imageList.length - 1) % imageList.length
              )
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % imageList.length)
            }
            imageCaption={`Image ${photoIndex + 1} / ${imageList.length}`}
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
  );
}
