import "../../globals.css";
import { languages } from "../../../i18n/settings";
import { urbanist } from "../../fonts";
import DashboardNavbar from "@/components/DashboardNavbar";
import Sidebar from "@/components/Sidebar";
import DashboardFooter from "@/components/DashboardFooter";

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
        <main className="bg-[#E9EFF2] ">
          <DashboardNavbar lng={lng} />
          <div className="flex h-full">
            <div>
              <Sidebar lng={lng} />
            </div>
            <div className="w-full mb-8">
              {children}
              <div>
                <DashboardFooter />
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
