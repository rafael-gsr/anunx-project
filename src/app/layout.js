import { Inter } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "./utils/ThemeRegistry";
import Head from "next/head";
import theme from "./theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="pt-br">
      <Head>
        <meta name='theme-color' content={theme.palette.primary.main}/>
      </Head>
      <body className={inter.className}>
        <ThemeRegistry options={{key:'mui-theme'}}>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
