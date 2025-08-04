"use client";

import Image from "next/image";

type RelatedPost = {
  title: string;
  date: string;
  image: string;
  link: string;
};

const relatedPosts: RelatedPost[] = [
];

export default function RelatedPosts() {
  return (
    <div className="mt-16">
      {/* Titre */}
      <h2 className="text-center text-2xl font-bold text-blue-800 mb-2">
          Événements analogues
      </h2>
      <div className="w-16 h-1 bg-red-500 mx-auto mb-6 rounded"></div>

      {/* Conteneur vertical scrollable */}
      <div
        style={{
          maxHeight: "600px",
          overflowY: "auto",
          paddingRight: "4px",
          scrollbarWidth: "thin",
        }}
        className="space-y-6"
      >
        {relatedPosts.map((post, index) => (
          <a
            href={post.link}
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden block"
            style={{
              border: "1px solid #e5e7eb",
              paddingBottom: "8px",
            }}
          >
            <div className="relative w-full h-[160px]">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">{post.date}</p>
              <h3 className="font-semibold text-blue-900 hover:text-blue-600 text-base">
                {post.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
