import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { Inter } from "next/font/google";
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

const MyApp: AppType = ({ Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAndSetLoading = () => {
      // Wait for DOMContentLoaded event to complete and then add an additional 2 seconds
      setTimeout(() => setIsLoading(false), 3000);
    };

    if (document.readyState === "complete") {
      // If the document is already in 'complete' state when the script runs
      checkAndSetLoading();
    } else {
      // Listen for the 'load' event which signifies that everything, including external resources, has loaded
      window.addEventListener("load", checkAndSetLoading);
    }

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("load", checkAndSetLoading);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <main className={`${inter.className}`}>
        {/* {isLoading ? (
          <LoadingState />
        ) : ( */}
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
