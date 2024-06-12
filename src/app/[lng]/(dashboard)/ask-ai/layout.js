import "../../globals.css";
import { languages } from "../../../i18n/settings";
import { urbanist } from "../../fonts";
import DashboardNavbar from "@/components/DashboardNavbar";
import Sidebar from "@/components/Sidebar";
import DashboardFooter from "@/components/DashboardFooter";
import { ModalsProvider } from "@/contexts/Modals";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata = {
  title: "CareerMatch",
  description: "AI driven Career Guidance",
};

export default function AskAILayout({ children, params: { lng } }) {
  return (
    <html lang={lng}>
      <body className={urbanist.className}>
        <ModalsProvider>
          <main className="bg-grey-1000 ">
            <DashboardNavbar lng={lng} />
            <div className="flex h-full">
              <div className="flex ">
                <Sidebar lng={lng} />
              </div>
              <div className="w-full mb-6 ">
                {children}
                <div>
                  <DashboardFooter />
                </div>
              </div>
            </div>
          </main>
        </ModalsProvider>
      </body>
    </html>
  );
}
