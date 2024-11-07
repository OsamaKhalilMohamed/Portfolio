import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { Inter, Aref_Ruqaa } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import LoadingState from "~/components/LoadingState";
import { useEffect, useState } from "react";

import "tailwindcss/tailwind.css";

const inter = Inter({
  weight: ["100", "200", "300", "400", "600", "700"],
  variable: "--font-inter",
  subsets: ["latin", "greek"],
  display: "swap",
});

const arefRuqaa = Aref_Ruqaa({
  weight: ["400", "700"],
  variable: "--font-aref-ruqaa",
  subsets: ["latin", "arabic"],
  display: "swap",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <main className={`${inter.className} ${arefRuqaa.className}`}>
        <>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </>
      </main>
    </ThemeProvider>
  );
};

export default MyApp;
