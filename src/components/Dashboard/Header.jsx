"use client";

import { ArrowLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {
   const router = useRouter();
   const handleBack = (e) => {
      e.preventDefault();
      router.back();
   };
   return (
      <>
         <button onClick={handleBack} className="flex gap-2 text-zinc-400 items-center">
            <ArrowLeft size={24} weight="bold" />
            <h1 className="text-xl">{title}</h1>
         </button>
      </>
   );
};

export default Header;
