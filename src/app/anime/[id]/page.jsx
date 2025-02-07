import { getAnimeResponse } from "@/libs/api-libs";
import Link from "next/link";
import Image from "next/image";
import VideoPlayer from "@/components/Utilities/VideoPlayer";

const Page = async ({ params }) => {
   const { id } = await params;
   const AnimeDetail = await getAnimeResponse(`anime/${id}`);
   console.log(AnimeDetail);
   return (
      <div className="flex flex-col md:flex-row gap-4 md:gap-12">
         <div>
            <VideoPlayer youtubeID={AnimeDetail.data.trailer.youtube_id} />
         </div>
         <div className="md:flex-[2]">
            <h1 className="text-3xl font-semibold">{AnimeDetail.data.title}</h1>
            <h2 className="text-2xl font-medium text-my-secondary">
               {AnimeDetail.data.type} | {AnimeDetail.data.season} {AnimeDetail.data.year} | {AnimeDetail.data.episodes}{" "}
               Episodes
            </h2>
            <ul className="list-studios flex">
               {AnimeDetail.data.studios.map((studio, index) => {
                  return (
                     <li key={index}>
                        <Link
                           href={`/producers/${studio.mal_id}`}
                           className="text-zinc-400 hover:text-my-secondary text-lg">
                           {studio.name}
                        </Link>
                     </li>
                  );
               })}
            </ul>
            <div className="my-4">
               <Image
                  src={AnimeDetail.data.images.webp.image_url}
                  width={350}
                  height={350}
                  alt={AnimeDetail.data.images.webp.image_url}
                  className="w-full rounded-2xl"
               />
            </div>
         </div>
         <div className="md:flex-[3]">
            <h2 className="text-3xl font-medium mb-2">SINOPSIS</h2>
            <p className="text-justify text-zinc-400 indent-8">{AnimeDetail.data.synopsis}</p>
            <div className="bg-zinc-800 p-6 rounded-lg shadow-md border border-solid border-zinc-700 my-4">
               <div className="list-details flex flex-col gap-8 items-center lg:flex-row">
                  <div className="w-full item-detail --score border-b-[3px] border-b-zinc-700 lg:border-b-0 pb-8 lg:pb-0 lg:pe-8 border-solid border-0 lg:border-r-[3px] lg:border-r-zinc-700">
                     <h5 className="px-8 p-1 bg-my-secondary w-fit">SCORE</h5>
                     <h1 className="text-6xl font-bold">{AnimeDetail.data.score}</h1>
                     <p className="text-lg text-zinc-400">{AnimeDetail.data.scored_by.toLocaleString()} Users</p>
                  </div>
                  <div className="list-details w-full grid grid-cols-1 xl:grid-cols-2 gap-x-12">
                     <div className="item-detail">
                        <h5 className="w-fit text-lg text-zinc-300">Rank</h5>
                        <h1 className="text-2xl font-bold">#{AnimeDetail.data.rank}</h1>
                     </div>
                     <div className="item-detail">
                        <h5 className="w-fit text-lg text-zinc-300">Favorites</h5>
                        <h1 className="text-2xl font-bold">{AnimeDetail.data.favorites.toLocaleString()}</h1>
                     </div>
                     <div className="item-detail">
                        <h5 className="w-fit text-lg text-zinc-300">Members</h5>
                        <h1 className="text-2xl font-bold">{AnimeDetail.data.members.toLocaleString()}</h1>
                     </div>
                     <div className="item-detail">
                        <h5 className="w-fit text-lg text-zinc-300">Popularity</h5>
                        <h1 className="text-2xl font-bold">#{AnimeDetail.data.popularity}</h1>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Page;
