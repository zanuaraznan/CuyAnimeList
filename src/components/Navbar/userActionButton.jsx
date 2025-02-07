import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

const UserActionButton = async () => {
   const user = await authUserSession();

   const actionLabel = user ? "Sign Out" : "Sign In";
   const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

   return (
      <div className="flex flex-wrap items-center gap-2">
         {user ? <Link href="/users/dashboard">Dashboard</Link> : null}
         <Link
            href={actionURL}
            className={`transition-all py-2 px-4 rounded-lg hover:bg-opacity-10
               ${user ? "text-red-500 hover:bg-red-500" : "border border-zinc-700 border-solid hover:bg-white"}
            `}>
            {actionLabel}
         </Link>
      </div>
   );
};

export default UserActionButton;
