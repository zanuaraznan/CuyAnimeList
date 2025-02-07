import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
   const { keyword } = await params;
   const decodedKeyword = decodeURI(keyword);
   const searchAnime = await getAnimeResponse("anime", `sfw=true&q=${decodedKeyword}`);

   return (
      <>
         <section>
            <Header
               title={["Pencarian untuk ", <span className="text-white font-2xl font-semibold">{decodedKeyword}</span>]}
            />
            <AnimeList api={searchAnime} />
         </section>
      </>
   );
};

export default Page;
