const promises = [
  "Aku janji bakal selalu coba dengerin kamu, bahkan di hari-hari aku lagi capek.",
  "Aku janji bakal terus belajar jadi versi terbaik dari diri aku buat kamu.",
  "Aku janji bakal ngajak kamu bikin lebih banyak first trip lagi bareng-bareng.",
  "Aku janji bakal tetap ingetin kamu makan dan minum air putih.",
  "Aku janji bakal tetep ada, bahkan di hari-hari yang rasanya berat.",
];

export default function SectionKelima() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 bg-pink-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-pink-900 mb-6">
          Janji Kecil dari Aku
        </h2>
        <p className="text-pink-700 text-sm sm:text-base mb-6">
          Nggak muluk-muluk. Tapi semoga pelan-pelan bisa bikin kamu ngerasa
          aman dan cukup.
        </p>
        <ul className="space-y-3">
          {promises.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 rounded-2xl bg-white border border-pink-100 p-4 shadow-sm shadow-pink-100"
            >
              <span className="mt-1 text-pink-500">✦</span>
              <p className="text-sm sm:text-base text-pink-900">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
