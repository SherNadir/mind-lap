import "../../globals.css";
import { languages } from "../../../i18n/settings";
import Footer from "@/components/Footer";
import { urbanist } from "../../fonts";
import DashboardNavbar from "@/components/DashboardNavbar";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata = {
  title: "CareerMatch",
  description: "AI driven Career Guidance",
};

export default function DashboardLayout({ children, params: { lng } }) {
  return (
    <html lang={lng}>
      <body className={urbanist.className}>
        <main className="">
          <DashboardNavbar lng={lng} />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
