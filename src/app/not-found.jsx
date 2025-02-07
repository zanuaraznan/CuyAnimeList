"use client";
import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
   return (
      <div className="flex flex-col justify-center items-center w-full h-[80vh] gap-4">
         <FileSearch size={32} />
         <h3>Page not found</h3>
         <Link href="/" className="px-3 py-2 rounded bg-my-secondary text-white">
            Back to home
         </Link>
      </div>
   );
};

export default Page;
