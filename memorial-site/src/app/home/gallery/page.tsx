import Image from "next/image";
import Container from "@/components/Container";
import galleryContent from "@/data/gallery.json";

export default function GalleryPage() {
  const { title, subtitle, images } = galleryContent;

  return (
    <main className="memorial-veil pb-16 pt-10">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-serif text-3xl text-[#1e1c18]">{title}</h2>
          <p className="max-w-sm text-sm text-[#6f655a]">{subtitle}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src) => (
            <div
              key={src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/10"
            >
              <Image src={src} alt="Looney memory" fill className="object-cover" />
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
