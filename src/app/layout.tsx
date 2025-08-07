import type { Metadata } from "next";
import { Poppins, Baloo_2, Bai_Jamjuree } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "500",
})

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"]
})

const jamjuree = Bai_Jamjuree({
  variable: "--font-jamjuree",
  subsets: ["latin"],
  weight: "500",
})

export const metadata: Metadata = {
  title: "BuenaViaje",
  description: "Your itinerary app for your next visit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" 
        />
      </head>
      <body
        className={`${poppins.variable} ${baloo.variable} ${jamjuree.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
