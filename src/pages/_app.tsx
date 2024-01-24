import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import ToggleButton from "~/components/ToggleButton";
import Footer from "~/components/Footer";

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
        className={`${inter.className} h-full min-h-screen scroll-smooth bg-zinc-50 pb-8 pt-8 dark:bg-zinc-950`}
      >
        <Component {...pageProps} />
        <ToggleButton />
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default MyApp;
