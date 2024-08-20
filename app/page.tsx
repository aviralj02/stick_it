import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <>
      <Header />
      <MaxWidthWrapper>
        <Hero />
        <Features />
      </MaxWidthWrapper>
      <Footer />
    </>
  );
}
