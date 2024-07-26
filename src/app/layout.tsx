import type { Metadata } from "next";
import { League_Spartan } from "next/font/google"; 
import "./globals.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["500", "700"], 
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Jobs ",
  description: "Diseño Responsivo para Frontend Mentor Reto del día",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.className}`}>
      
        {children}
      </body>
    </html>
  );
}
