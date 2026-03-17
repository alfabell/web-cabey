import Image from "next/image";

const memories = [
  {
    title: "Kenangan 1",
    caption:
      "Foto ini nanti bisa kita ganti sama momen kita yang paling kamu suka.",
    imageSrc: "/memories/memory-1.jpg",
  },
  {
    title: "Kenangan 2",
    caption:
      "Di sini mungkin waktu kita pertama kali jalan bareng sampai malam.",
    imageSrc: "/memories/memory-2.jpg",
  },
  {
    title: "Kenangan 3",
    caption:
      "Momen random tapi berkesan, yang keliatannya kecil tapi kerasa hangat.",
    imageSrc: "/memories/memory-3.jpg",
  },
  {
    title: "Kenangan 4",
    caption: "(Placeholder) Nanti kita isi lagi sama memori baru.",
    imageSrc: "/memories/memory-4.jpg",
  },
];

export default function SectionKeempat() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-pink-900 mb-6">
          Potongan Kenangan Ulang Tahun
        </h2>
        <p className="text-pink-700 text-sm sm:text-base mb-6">
          Di sini nanti bakal keisi foto-foto momen ulang tahunmu, atau momen
          random lain yang bikin kamu inget kalau kamu layak dirayakan, bukan
          cuma hari ini, tapi setiap hari.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {memories.map((memory, index) => (
            <div
              key={index}
              className="rounded-2xl bg-pink-50/80 border border-pink-100 p-4 flex flex-col justify-between min-h-[220px] shadow-sm shadow-pink-100"
            >
              <div>
                <div className="relative mb-3 aspect-square w-full overflow-hidden rounded-2xl bg-pink-100">
                  <Image
                    src={memory.imageSrc}
                    alt={memory.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sm font-semibold text-pink-900 mb-2">
                  {memory.title}
                </h3>
                <p className="text-xs sm:text-sm text-pink-800">
                  {memory.caption}
                </p>
              </div>
              <div className="mt-3 text-[11px] text-pink-500 italic">
                (Nanti bisa diganti sama foto beneran)
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
