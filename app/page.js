import Countdown from "@/components/Countdown/Countdown";
import Divider from "@/components/Divider/Divider";
import FAQ from "@/components/FAQ/FAQ";
import Hero from "@/components/Hero/Hero";
import Stat from "@/components/Stat/Stat";
import Why from "@/components/Why/Why";
import Image from "next/image";


export default function Home() {
  return (
    <main className="">
      <Hero />
      <Why />
      <Divider />
      <Countdown />
      <Stat />
      <FAQ />
    </main>
  );
}
