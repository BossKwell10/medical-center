import "@/styles/globals.css";
import {ActualiteHero} from "@/components/page/actualitehero";
import Infos from "@/components/page/sous_actualite/milda/infos";
import RelatedPosts from "@/components/page/sous_actualite/actuality_side";


export default function MildaHome() {
    return (
        <main>
            <ActualiteHero/>
            <div className="flex flex-col items-center py-10 px-4 bg-white">
                <div className="max-w-5xl w-full">
                    {/* En-tête */}
                    <div className="text-center mb-12" id="actualites">
                        <h1 className="text-3xl font-bold text-blue-800 mb-4">
                            ACTUALITÉS
                        </h1>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Toutes les dernières actualités de notre cabinet médical
                        </p>
                    </div>
                    <div className="mt-6 flex gap-6 flex-col md:flex-row">
                        {/* Partie principale avec les cartes d'actualités */}
                        <div className="w-full md:w-2/3">
                            <Infos/>
                        </div>
                        {/* Sidebar */}
                        <div className="w-full md:w-1/3 space-y-8">
                            <RelatedPosts/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
