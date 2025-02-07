"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const InputSearch = () => {
   const searchRef = useRef();
   const router = useRouter();

   useEffect(() => {
      const handleKeyDown = (e) => {
         if (e.key === "/") {
            e.preventDefault();
            document.getElementById("inputSearchEl").focus();
         }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => {
         document.removeEventListener("keydown", handleKeyDown);
      };
   });

   function handleSearch(e) {
      if (e.key === "Enter" || e.type === "click") {
         e.preventDefault();
         const keyword = searchRef.current.value;
         if (keyword.trim() === "") {
            alert("pencarian tidak boleh kosong");
            return;
         }
         router.push(`/search/${keyword}`);
      }
   }

   return (
      <div className="relative flex items-center sm:flex-grow-0 flex-grow">
         <input
            type="text"
            placeholder="Cari anime .."
            id="inputSearchEl"
            className="py-3 ps-10 pe-2 rounded-md bg-zinc-800 focus-visible:outline-none focus-visible:outline-4 transition-all focus-visible:outline-zinc-700 w-full text-slate-200"
            ref={searchRef}
            onKeyDown={handleSearch}
            autoComplete="off"
         />
         <div className="px-2 py-1 left-2 rounded absolute bg-zinc-700 text-zinc-400">/</div>
         <button onClick={handleSearch} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-200">
            <MagnifyingGlass size={24} />
         </button>
      </div>
   );
};

export default InputSearch;
