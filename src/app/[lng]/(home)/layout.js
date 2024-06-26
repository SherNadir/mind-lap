import Navbar from "@/components/Navbar";
import "../globals.css";
import { languages } from "../../i18n/settings";
import Footer from "@/components/Footer";
import { urbanist } from "../fonts";
import { ModalsProvider } from "@/contexts/Modals";

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
      <body className={urbanist.className}>
        <ModalsProvider>
          <main className="">
            <Navbar lng={lng} />
            {children}
            <Footer />
          </main>
        </ModalsProvider>
      </body>
    </html>
  );
}
