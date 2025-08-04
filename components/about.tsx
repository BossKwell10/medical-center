
export function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/about/Directeur.jpg?height=400&width=600"
                  alt="Medical center"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg hidden md:block">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm">Années d'Expérience</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-indigo-800 mb-6 hover:text-indigo-600">
              À propos de nous
              <div className="w-20 h-1 bg-green-600 mt-4"></div>
            </h2>
            <p className="text-gray-700 mb-6">
              Le <strong>CABINET PREVENT CARE MEDICAL</strong> est un centre
              médical spécialisé en médecine du travail qui apporte son
              expertise aux entreprises de tous secteurs d'activités en Côte
              d'Ivoire.
            </p>
            <p className="text-gray-700 mb-6">
              Centre spécialisé en Santé et Sécurité au Travail, exercant avec
              une grande expérience dans plusieurs secteurs d’activités dont
              les secteurs Minier, Pétrolier, Manutentionnaire, Btp,
              Agro-industriel, Pharmaceutiques, Phytosanitaires, Commerces &
              Services, Grandes distributions, etc…
            </p>
            <p className="text-gray-700 mb-6">
              Notre équipe est formée à la pratique internationale normative SST
              ISO 45001 version 2018. Nous protégeons vos travailleurs sur leurs
              lieux de travail en les rendant sûrs, salubres et sains
              conformément aux dispositions réglementaires.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Item Expertise */}
              <div className="flex items-start p-4 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-md hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-full mr-4 transition-all duration-300 group-hover:bg-blue-200">
                  <svg
                    className="w-6 h-6 text-blue-600 transition-all duration-300 group-hover:text-blue-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 transition-all duration-300 group-hover:text-blue-800">
                    Expertise
                  </h3>
                  <p className="text-sm text-gray-600 transition-all duration-300 group-hover:text-gray-800">
                    Équipe de médecins spécialistes
                  </p>
                </div>
              </div>

              {/* Item Efficacité */}
              <div className="flex items-start p-4 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-md hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-full mr-4 transition-all duration-300 group-hover:bg-blue-200">
                  <svg
                    className="w-6 h-6 text-blue-600 transition-all duration-300 group-hover:text-blue-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 transition-all duration-300 group-hover:text-blue-800">
                    Efficacité
                  </h3>
                  <p className="text-sm text-gray-600 transition-all duration-300 group-hover:text-gray-800">
                    Services rapides et efficaces
                  </p>
                </div>
              </div>

              {/* Item Innovation */}
              <div className="flex items-start p-4 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-md hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-full mr-4 transition-all duration-300 group-hover:bg-blue-200">
                  <svg
                    className="w-6 h-6 text-blue-600 transition-all duration-300 group-hover:text-blue-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 transition-all duration-300 group-hover:text-blue-800">
                    Innovation
                  </h3>
                  <p className="text-sm text-gray-600 transition-all duration-300 group-hover:text-gray-800">
                    Équipements médicaux modernes
                  </p>
                </div>
              </div>

              {/* Item Disponibilité */}
              <div className="flex items-start p-4 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-md hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-full mr-4 transition-all duration-300 group-hover:bg-blue-200">
                  <svg
                    className="w-6 h-6 text-blue-600 transition-all duration-300 group-hover:text-blue-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 transition-all duration-300 group-hover:text-blue-800">
                    Disponibilité
                  </h3>
                  <p className="text-sm text-gray-600 transition-all duration-300 group-hover:text-gray-800">
                    Service disponible 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
