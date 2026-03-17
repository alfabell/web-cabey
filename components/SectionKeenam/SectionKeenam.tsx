"use client";

import { useState } from "react";

export default function SectionKeenam() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="w-full py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-pink-900 mb-4">
          A Little Secret
        </h2>
        <p className="text-pink-700 text-sm sm:text-base mb-6">
          Kalau kamu udah baca sampai bagian ini, berarti kamu cukup sabar buat
          nemenin aku dari awal sampe akhir. Sekarang, ada satu hal kecil lagi.
        </p>
        {!opened ? (
          <button
            onClick={() => setOpened(true)}
            className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-7 py-3 text-sm sm:text-base font-semibold text-white shadow-md shadow-pink-300/60 hover:bg-pink-600 transition-colors"
          >
            Klik di sini buat kejutan terakhir
            <span className="text-lg">♡</span>
          </button>
        ) : (
          <div className="mt-4 rounded-3xl border border-pink-100 bg-pink-50/90 p-6 sm:p-8 shadow-md shadow-pink-100">
            <p className="text-sm sm:text-base text-pink-900 mb-3">
              Terima kasih sudah mau ada di hidup aku sejauh ini. Terima kasih
              sudah sabar, sudah baik, dan sudah mau nerima aku dengan segala
              kekurangannya.
            </p>
            <p className="text-sm sm:text-base text-pink-900 mb-3">
              Aku nggak tahu nanti ke depannya bakal kayak gimana, tapi kalau
              kamu mau, aku pengin terus jalanin harinya bareng-bareng sama
              kamu.
            </p>
            <p className="text-base sm:text-lg font-semibold text-pink-900 mt-4">
              Will you keep staying by my side? ♡
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
