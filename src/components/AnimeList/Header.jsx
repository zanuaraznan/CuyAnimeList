import Link from "next/link";

const Header = ({ key, title, linkHref, linkTitle }) => {
   return (
      <div className="p-3 mb-4 flex justify-between items-center">
         <h1 key={key} className="text-xl text-zinc-400">
            {title}
         </h1>
         {linkHref && linkTitle ? (
            <Link
               href={linkHref}
               className="md:text-xl text-md underline text-zinc-400 hover:text-my-secondary transition-all">
               {linkTitle}
            </Link>
         ) : null}
      </div>
   );
};

export default Header;
