import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "আহমদ ছফা ও আধুনিক বাংলা চিন্তাধারা",
    date: "প্রকাশিত",
    image: "/articles/article-1.jpg",
    slug: "ahmed-sofa-modern-bengali-thought",
  },
  {
    id: 2,
    title: "আহমদ ছফার সাহিত্যিক উত্তরাধিকার",
    date: "প্রকাশিত",
    image: "/articles/article-2.jpg",
    slug: "literary-legacy-of-ahmed-sofa",
  },
  {
    id: 3,
    title: "আজকের সময়ে আহমদ ছফা কেন গুরুত্বপূর্ণ",
    date: "প্রকাশিত",
    image: "/articles/article-3.jpg",
    slug: "why-ahmed-sofa-still-matters",
  },
];

export default function LatestArticles() {
  return (
    <section className="bg-[#fff] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-10 bg-amber-700" />

              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-700">
                প্রবন্ধ
              </p>
            </div>

            <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl md:text-5xl">
              নির্বাচিত লেখা
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-stone-600">
              আহমদ ছফার জীবন, সাহিত্য, চিন্তা ও সমাজভাবনা নিয়ে
              বিভিন্ন প্রবন্ধ ও বিশ্লেষণ।
            </p>

          </div>

          <Link
            to="/articles"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 font-semibold text-stone-800 transition hover:border-amber-700 hover:text-amber-700"
          >
            সব প্রবন্ধ

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

        </div>

        {/* Articles */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/articles/${article.slug}`}
              className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={article.image}
                  alt={article.title}
                  className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">

                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-stone-500">
                  <Calendar
                    size={15}
                    className="text-amber-700"
                  />

                  <span>{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-bold leading-8 text-stone-900 transition group-hover:text-amber-700 sm:text-2xl">
                  {article.title}
                </h3>

                {/* Read More */}
                <div className="mt-7 inline-flex items-center gap-2 font-semibold text-amber-700">
                  বিস্তারিত পড়ুন

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}