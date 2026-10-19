import React, {useState} from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

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
              Contact
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              যোগাযোগ
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Ahmed Sofa-এর সাহিত্যকর্ম, আর্কাইভ, গবেষণা বা ওয়েবসাইট
              সম্পর্কে কোনো প্রশ্ন বা মতামত থাকলে আমাদের সঙ্গে যোগাযোগ
              করুন।
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* ================= LEFT INFO ================= */}
          <div className="lg:col-span-2">
            <div className="h-full rounded-2xl bg-gray-900 p-7 text-white sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-400">
                Get In Touch
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                আমাদের সঙ্গে
                <br />
                যোগাযোগ করুন
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
                আপনার প্রশ্ন, মতামত অথবা Ahmed Sofa-এর সাহিত্যিক
                সংগ্রহ সম্পর্কে কোনো তথ্য আমাদের জানাতে পারেন।
              </p>

              {/* Contact Details */}
              <div className="mt-10 space-y-7">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Mail size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                      Email
                    </p>

                    <a
                      href="mailto:info@ahmedsofa.org"
                      className="mt-1 block text-sm text-gray-200 transition hover:text-white"
                    >
                      info@ahmedsofa.org
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Phone size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                      Phone
                    </p>

                    <a
                      href="tel:+8801000000000"
                      className="mt-1 block text-sm text-gray-200 transition hover:text-white"
                    >
                      +880 1000-000000
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                      Address
                    </p>

                    <p className="mt-1 text-sm leading-6 text-gray-200">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Clock size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                      Response Time
                    </p>

                    <p className="mt-1 text-sm text-gray-200">
                      Within 1–2 business days
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= FORM ================= */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-9">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-500">
                  Send Message
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                  আপনার বার্তা পাঠান
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  নিচের ফর্মটি পূরণ করে আমাদের কাছে আপনার বার্তা
                  পাঠাতে পারেন।
                </p>
              </div>

              {/* Success Message */}
              {submitted && (
                <div className="mb-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700">
                  <CheckCircle
                    size={20}
                    className="mt-0.5 shrink-0"
                  />

                  <div>
                    <p className="font-semibold">
                      বার্তা সফলভাবে পাঠানো হয়েছে।
                    </p>

                    <p className="mt-1 text-sm">
                      আপনার সঙ্গে দ্রুত যোগাযোগ করা হবে।
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      আপনার নাম
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="আপনার নাম লিখুন"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:bg-white focus:ring-2 focus:ring-gray-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      ইমেইল
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:bg-white focus:ring-2 focus:ring-gray-100"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    বিষয়
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="বার্তার বিষয় লিখুন"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:bg-white focus:ring-2 focus:ring-gray-100"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    বার্তা
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="আপনার বার্তা লিখুন..."
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-7 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:bg-white focus:ring-2 focus:ring-gray-100"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-[0.99] sm:w-auto"
                >
                  বার্তা পাঠান
                  <Send size={17} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAP / BOTTOM ================= */}
      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-gray-100">
            <div className="flex min-h-[280px] items-center justify-center p-8 text-center sm:min-h-[340px]">
              <div>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
                  <MapPin size={24} className="text-gray-700" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  Dhaka, Bangladesh
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Ahmed Sofa Archive & Literary Collection
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;