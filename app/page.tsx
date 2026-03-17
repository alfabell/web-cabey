import HeroSection from "../components/HeroSection/HeroSection";
import SectionKedua from "../components/SectionKedua/SectionKedua";
import SectionKetiga from "../components/SectionKetiga/SectionKetiga";
import SectionKeempat from "../components/SectionKeempat/SectionKeempat";
import SectionKelima from "../components/SectionKelima/SectionKelima";
import SectionKeenam from "../components/SectionKeenam/SectionKeenam";
import SectionKetujuh from "../components/SectionKetujuh/SectionKetujuh";
import SectionKedelapan from "../components/SectionKedelapan/SectionKedelapan";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-pink-100 via-white to-pink-50 text-pink-900 font-sans">
      <main className="mx-auto flex min-h-screen max-w-4xl flex-col bg-white/60 shadow-[0_10px_60px_rgba(244,114,182,0.25)]">
        <HeroSection />
        <SectionKedua />
        <SectionKetiga />
        <SectionKeempat />
        <SectionKelima />
        <SectionKeenam />
        <SectionKedelapan />
        <SectionKetujuh />
      </main>
    </div>
  );
}
