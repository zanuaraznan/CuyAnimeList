import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./userActionButton";

const Navbar = () => {
   return (
      <header className="bg-zinc-900">
         <div className="flex flex-wrap gap-4 justify-center md:justify-between md:items-center p-4 px-10">
            <div className="flex items-center gap-4 flex-wrap justify-center">
               <Link href="/" className="font-semibold text-xl text-white">
                  Anime List
               </Link>
               <InputSearch />
            </div>
            <UserActionButton />
         </div>
      </header>
   );
};

export default Navbar;
