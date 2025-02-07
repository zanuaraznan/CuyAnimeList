const Pagination = ({ page, lastPage, setPage }) => {
   const scrollTop = () => {
      scrollTo({
         behavior: "smooth",
         top: 0,
      });
   };

   const handleNextPage = () => {
      setPage((prevState) => prevState + 1);
      scrollTop();
   };

   const handlePrevPage = () => {
      setPage((prevState) => {
         if (prevState > 1) {
            return prevState - 1;
         } else {
            return prevState;
         }
      });
      scrollTop();
   };

   const handleKeyDown = (e) => {
      if (e.key === "Enter") {
         const newPage = parseInt(e.target.value);
         setPage(newPage);
         scrollTop();
      }
   };

   return (
      <div className="flex w-full justify-center gap-6 items-center">
         {page <= 1 ? null : (
            <button
               onClick={handlePrevPage}
               className="p-3 rounded transition-all bg-my-secondary hover:bg-indigo-500 text-white">
               Prev
            </button>
         )}
         <div className="flex justify-center items-center gap-2">
            <input
               type="number"
               className="p-2 bg-zinc-500 w-16 text-center rounded placeholder:text-center"
               placeholder={page}
               onKeyDown={handleKeyDown}
            />
            <span>of {lastPage}</span>
         </div>
         <button
            onClick={handleNextPage}
            className="p-3 rounded transition-all bg-my-secondary hover:bg-indigo-500 text-white">
            Next
         </button>
      </div>
   );
};

export default Pagination;
