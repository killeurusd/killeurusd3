import Banner from "../_site/Banner";
import Header from "../_site/Header";
import Footer from "../_site/Footer";
import Consent from "../_site/Consent";
import ChatWidget from "../components/ChatWidget";

// Chrome commun à toutes les pages FR (ex-`App()` du SPA, désormais partagé via le layout).
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0B0B0D] text-zinc-200 font-sans selection:bg-[#7A0F0F] selection:text-white pt-10">
      <Banner />
      <Header />
      <main>{children}</main>
      <Footer />
      <ChatWidget />
      <Consent />
    </div>
  );
}
