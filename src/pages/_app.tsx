import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { useState } from "react";

const inter = Inter({
  weight: ["100", "200", "300", "400", "600", "700"],
  variable: "--font-inter",
  subsets: ["latin", "greek"],
  display: "swap",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <main
        className={`${inter.className} h-full min-h-screen w-full scroll-smooth bg-zinc-50 pb-8 pt-4 dark:bg-zinc-950`}
      >
        <div className="flex h-full flex-col items-center justify-center ">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </main>
    </ThemeProvider>
  );
};

export default MyApp;
