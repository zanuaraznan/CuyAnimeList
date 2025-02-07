import { authOption } from "@/app/api/auth/[...nextauth]/route";
import Header from "@/components/AnimeList/Header";
import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
   const user = await authUserSession(authOption);

   return (
      <>
         <Header title="Dashboard" />
         <div className="bg-zinc-800 p-6 rounded-lg shadow-md border border-solid border-zinc-700 my-4">
            <div className="flex flex-col gap-8 items-center">
               <h6 className="w-[80%] text-center font-semibold">{user.name}</h6>
               <Image src={user.image} alt="" width={200} height={200} className="rounded-full" />
               <div className="flex gap-2 flex-wrap">
                  <Link href="dashboard/collections" className="px-4 py-2 rounded-md bg-my-secondary">
                     Koleksi saya
                  </Link>
                  <Link href="dashboard/comments" className="px-4 py-2 rounded-md bg-my-secondary">
                     Komentar saya
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
};

export default Page;
