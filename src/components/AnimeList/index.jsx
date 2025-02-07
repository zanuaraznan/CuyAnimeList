import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
   return (
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
         {api.data?.map((anime, index) => {
            return (
               <Link
                  href={`/anime/${anime.mal_id}`}
                  key={index}
                  className="group transition-all
                cursor-pointer">
                  <Image
                     src={anime.images.jpg.image_url}
                     alt="..."
                     width={350}
                     height={350}
                     className="w-full max-h-64 object-cover"></Image>
                  <h3 className="group-hover:text-my-secondary font-semibold md:text-xl text-md p-3 text-gray-800 dark:text-zinc-200">
                     {anime.title}
                  </h3>
               </Link>
            );
         })}
      </div>
   );
};

export default AnimeList;
