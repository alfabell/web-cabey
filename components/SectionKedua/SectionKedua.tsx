export default function SectionKedua() {
  return (
    <section id="our-story" className="w-full py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-pink-900 mb-6">
          Cerita Kita
        </h2>
        <p className="text-pink-700 text-sm sm:text-base mb-8">
          Ini baru sebagian kecil dari perjalanan kita. Detailnya nanti
          pelan-pelan bakal aku isi lagi, biar ceritanya tumbuh bareng sama
          kita.
        </p>
        <div className="space-y-6">
          <div className="relative rounded-2xl border border-pink-100 bg-pink-50/80 p-5 sm:p-6">
            <span className="absolute -top-3 left-4 inline-flex items-center rounded-full bg-pink-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
              First Date
            </span>
            <p className="mt-3 text-xs text-pink-500 font-medium">
              Tanggal: (nanti kita isi bareng)
            </p>
            <p className="mt-3 text-sm sm:text-base text-pink-900">
              Di hari ini aku pertama kali ketemu kamu secara langsung, dan
              sejak itu rasanya dunia jadi sedikit lebih hangat. Aku masih inget
              betapa gugupnya aku, tapi di saat yang sama, aku juga super
              bahagia.
            </p>
          </div>

          <div className="relative rounded-2xl border border-pink-100 bg-pink-50/80 p-5 sm:p-6">
            <span className="absolute -top-3 left-4 inline-flex items-center rounded-full bg-pink-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
              First Trip
            </span>
            <p className="mt-3 text-xs text-pink-500 font-medium">
              Lokasi: (nanti kita isi bareng)
            </p>
            <p className="mt-3 text-sm sm:text-base text-pink-900">
              Perjalanan pertama kita yang bikin aku sadar, kalau bareng kamu,
              hal sederhana pun bisa kerasa spesial. Aku pengin ada lebih banyak
              perjalanan seperti ini di masa depan.
            </p>
          </div>

          <div className="rounded-2xl border border-dashed border-pink-200 bg-pink-50/40 p-5 sm:p-6 text-center">
            <p className="text-sm sm:text-base text-pink-700">
              (Cerita-cerita lain bakal nyusul di sini. Masih banyak halaman
              kosong yang pengin aku isi bareng kamu.)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
