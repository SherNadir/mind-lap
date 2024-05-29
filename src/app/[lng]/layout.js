import Navbar from "@/components/Navbar";
import "./globals.css";
import { languages } from "../i18n/settings";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

export const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata = {
  title: "CareerMatch",
  description: "AI driven Career Guidance",
};

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng}>
      <body className={inter.className}>
        <main className="">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
