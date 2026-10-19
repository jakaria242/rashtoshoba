import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const images = [
  {
    id: 1,
    image: "/gallery/gallery-1.jpg",
    title: "আহমদ ছফা",
  },
  {
    id: 2,
    image: "/gallery/gallery-2.jpg",
    title: "সাহিত্য আলোচনা",
  },
  {
    id: 3,
    image: "/gallery/gallery-3.jpg",
    title: "দুর্লভ আলোকচিত্র",
  },
  {
    id: 4,
    image: "/gallery/gallery-4.jpg",
    title: "জনসম্মুখে বক্তব্য",
  },
  {
    id: 5,
    image: "/gallery/gallery-5.jpg",
    title: "গ্রন্থাগার",
  },
  {
    id: 6,
    image: "/gallery/gallery-6.jpg",
    title: "প্রতিকৃতি",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const nextImage = () => {
    setSelectedImage((current) => {
      const nextIndex =
        (current + 1) % images.length;

      return nextIndex;
    });
  };

  const previousImage = () => {
    setSelectedImage((current) => {
      const previousIndex =
        (current - 1 + images.length) % images.length;

      return previousIndex;
    });
  };

  return (
    <section className="bg-[#fff] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-10 bg-amber-700" />

              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-700">
                গ্যালারি
              </p>
            </div>

            <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl md:text-5xl">
              স্মৃতি ও মুহূর্ত
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-stone-600">
              আহমদ ছফার জীবন, সাহিত্যচর্চা ও বিভিন্ন সময়ের
              নির্বাচিত আলোকচিত্রের সংগ্রহ।
            </p>
          </div>

          <Link
            to="/gallery"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 font-semibold text-stone-800 transition hover:border-amber-700 hover:text-amber-700"
          >
            সম্পূর্ণ গ্যালারি

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {images.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedImage(index)}
              className="group relative overflow-hidden rounded-3xl bg-stone-200 text-left shadow-sm"
            >

              {/* Fixed Image Box */}
              <div className="h-[280px] w-full overflow-hidden sm:h-[300px] lg:h-[320px]">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Bottom Content */}
              <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-end justify-between p-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                <div>
                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-200">
                    ছবিটি দেখুন
                  </p>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/90 text-stone-900">
                  <Maximize2 size={17} />
                </div>

              </div>

            </button>
          ))}

        </div>

      </div>

      {/* =========================
          IMAGE LIGHTBOX
      ========================= */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 px-4 py-6"
          onClick={() => setSelectedImage(null)}
        >

          {/* Close */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
          >
            <X size={23} />
          </button>

          {/* Previous */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              previousImage();
            }}
            className="absolute left-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-amber-400 hover:text-black sm:left-8"
          >
            <ArrowLeft size={24} />
          </button>

          {/* Image */}
          <div
            className="relative flex max-h-[90vh] max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={images[selectedImage].image}
              alt={images[selectedImage].title}
              className="max-h-[75vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />

            {/* Image Info */}
            <div className="mt-5 text-center">

              <h3 className="text-xl font-semibold text-white">
                {images[selectedImage].title}
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                {selectedImage + 1} / {images.length}
              </p>

            </div>

          </div>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-amber-400 hover:text-black sm:right-8"
          >
            <ArrowRight size={24} />
          </button>

        </div>
      )}
    </section>
  );
}