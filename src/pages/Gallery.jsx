import React, {useState} from "react";
import {X, ZoomIn, Image as ImageIcon} from "lucide-react";

const galleryItems = [
  {
    id: 1,
    image: "/images/gallery/ahmed-sofa-1.jpg",
    alt: "Ahmed Sofa",
  },
  {
    id: 2,
    image: "/images/gallery/ahmed-sofa-2.jpg",
    alt: "Ahmed Sofa",
  },
  {
    id: 3,
    image: "/images/gallery/ahmed-sofa-3.jpg",
    alt: "Ahmed Sofa",
  },
  {
    id: 4,
    image: "/images/gallery/ahmed-sofa-4.jpg",
    alt: "Ahmed Sofa",
  },
  {
    id: 5,
    image: "/images/gallery/ahmed-sofa-5.jpg",
    alt: "Ahmed Sofa",
  },
  {
    id: 6,
    image: "/images/gallery/ahmed-sofa-6.jpg",
    alt: "Ahmed Sofa",
  },
  {
    id: 7,
    image: "/images/gallery/ahmed-sofa-7.jpg",
    alt: "Ahmed Sofa",
  },
  {
    id: 8,
    image: "/images/gallery/ahmed-sofa-8.jpg",
    alt: "Ahmed Sofa",
  },
  {
    id: 9,
    image: "/images/gallery/ahmed-sofa-9.jpg",
    alt: "Ahmed Sofa",
  },
  {
    id: 10,
    image: "/images/gallery/ahmed-sofa-10.jpg",
    alt: "Ahmed Sofa",
  },
  {
    id: 11,
    image: "/images/gallery/ahmed-sofa-11.jpg",
    alt: "Ahmed Sofa",
  },
  {
    id: 12,
    image: "/images/gallery/ahmed-sofa-12.jpg",
    alt: "Ahmed Sofa",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0">
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-gray-200">
              <ImageIcon size={16} />
              Gallery
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              ছবি ও স্মৃতি
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Ahmed Sofa-এর জীবন ও সাহিত্যিক জীবনের বিভিন্ন সময়ের
              স্মরণীয় মুহূর্তের ছবি।
            </p>
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-500">
            Photo Collection
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Ahmed Sofa
          </h2>
        </div>

        {/* ================= MASONRY ================= */}
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative mb-5 cursor-pointer break-inside-avoid overflow-hidden rounded-2xl bg-gray-200"
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.classList.add(
                    "flex",
                    "min-h-[250px]",
                    "items-center",
                    "justify-center"
                  );
                }}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/35">
                <div className="flex h-12 w-12 scale-75 items-center justify-center rounded-full bg-white/90 text-gray-900 opacity-0 shadow-lg transition duration-300 group-hover:scale-100 group-hover:opacity-100">
                  <ZoomIn size={21} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:top-6"
          >
            <X size={24} />
          </button>

          {/* Image */}
          <div
            className="relative flex max-h-[90vh] max-w-6xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.alt}
              className="max-h-[88vh] max-w-full rounded-xl object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;