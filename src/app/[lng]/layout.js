import Navbar from "@/app/[lng]/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { dir } from "i18next";
import { languages } from "../i18n/settings";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "Mindlap",
  description: "AI driven Career Guidance",
};

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <main className="">
          <Navbar lng={lng} />
          {children}
        </main>
      </body>
    </html>
  );
}
