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
      <main className={`${inter.className} relative min-h-screen`}>
        <div className="relative flex h-full flex-col items-center justify-center ">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </main>
    </ThemeProvider>
  );
};

export default MyApp;
