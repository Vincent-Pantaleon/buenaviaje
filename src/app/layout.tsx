import type { Metadata } from "next";
import { Poppins, Baloo_2 } from "next/font/google";
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
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${poppins.variable} ${baloo.variable} antialiased bg-accent`}
      >
        {children}
      </body>
    </html>
  );
}
