const thingsILove = [
  "Cara kamu ketawa yang selalu nular dan bikin suasana jadi lebih ringan.",
  "Cara kamu perhatian sama hal-hal kecil yang kadang orang lain nggak notice.",
  "Ekspresi kamu kalau lagi cerita sesuatu yang kamu suka banget.",
  "Caramu marahin aku tapi tetap pakai nada sayang.",
  "Fakta bahwa kamu tetap mau sabar sama aku yang seringnya nyebelin.",
  "(Nanti aku isi lagi di sini, masih banyak hal yang aku suka dari kamu.)",
];

export default function SectionKetiga() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 bg-pink-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-pink-900 mb-6">
          Hal-hal yang Aku Suka dari Kamu
        </h2>
        <p className="text-pink-700 text-sm sm:text-base mb-6">
          Ini baru sebagian kecil. Jujur, kalau ditulis semua, mungkin satu
          halaman nggak akan cukup.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {thingsILove.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white border border-pink-100 p-4 shadow-sm shadow-pink-100 flex items-start gap-3"
            >
              <span className="mt-1 text-pink-500">♡</span>
              <p className="text-sm sm:text-base text-pink-900">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
