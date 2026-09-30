import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Resorts from "@/components/Resorts";
import Guides from "@/components/Guides";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/seo";
import { isLang } from "@/lib/site";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return pageMetadata(lang, "home");
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Packages />
        <Resorts />
        <Guides />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
