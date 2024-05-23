import Navbar from "@/components/Navbar";
import "./globals.css";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import Footer from "./components/Footer";
import { inter } from "./fonts";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata = {
  title: "Mindlap",
  description: "AI driven Career Guidance",
};

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng}>
      <body className={inter.className}>
        <main className="">
          <Navbar lng={lng} />
          {children}
          <Footer lng={lng} />
        </main>
      </body>
    </html>
  );
}
