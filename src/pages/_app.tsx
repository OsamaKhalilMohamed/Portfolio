import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  weight: ["100", "200", "300", "400", "600", "700"],
  variable: "--font-inter",
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <main
        className={`${inter.className} min-h-screen bg-zinc-200 dark:bg-zinc-950`}
      >
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
};

export default MyApp;
