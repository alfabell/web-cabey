"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-8 flex justify-center bg-pink-50">
      <div className="max-w-3xl w-full flex flex-col-reverse items-center gap-10 sm:flex-row sm:items-center">
        <div className="flex-1 text-center sm:text-left">
          <p className="text-sm font-medium tracking-[0.2em] text-pink-500 uppercase mb-2">
            happy 20th birthday
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-pink-900 mb-4 leading-tight">
            Selamat ulang tahun yang ke-20, Anisa Arwani ♡
          </h1>
          <p className="text-base sm:text-lg text-pink-700 mb-6 max-w-xl mx-auto sm:mx-0">
            Hari ini kamu resmi 20 tahun, dan aku pengin kasih sesuatu yang
            kecil tapi tulus buat kamu. Scroll pelan-pelan ya, ini semua aku
            bikin khusus buat kamu.
          </p>
          <button
            className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-md shadow-pink-300/60 hover:bg-pink-600 transition-colors"
            onClick={() => {
              const el = document.getElementById("our-story");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Mulai lihat hadiah kecil ini
            <span className="text-lg">♡</span>
          </button>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative h-44 w-44 sm:h-56 sm:w-56 rounded-full border-4 border-pink-200 bg-pink-100 shadow-[0_10px_40px_rgba(244,114,182,0.6)] overflow-hidden">
            <Image
              src="/FotoCaca.jpeg"
              alt="Foto kamu"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
