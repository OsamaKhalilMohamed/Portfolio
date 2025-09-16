import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { Inter, Aref_Ruqaa } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

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
    // Add suppressHydrationWarning to the <html> tag
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main className={arefRuqaa.className}>
            <Navbar />
            <div className={inter.className}>
              <Component {...pageProps} />
            </div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default MyApp;
