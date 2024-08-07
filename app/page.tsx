import Features from "@/components/Features";
import Hero from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <Hero />
      <Features />
    </MaxWidthWrapper>
  );
}
