import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
   subsets: ["latin"],
   display: "swap",
   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
   title: "CuyAnimeList",
   description: "Website list anime indonesia",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={poppins.className} suppressHydrationWarning={true}>
            <Navbar />
            <div className="container my-8 mx-auto px-4">{children}</div>
         </body>
      </html>
   );
}
