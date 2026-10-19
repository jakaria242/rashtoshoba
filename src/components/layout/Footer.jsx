import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiMapPin2Fill } from "react-icons/ri";





const Footer = () => {
  return (
    <footer className="border-t bg-[#F4EFE6]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* About */}
          <div>
            <h2 className="mb-5 text-2xl font-bold">
              Ahmed Sofa
            </h2>

            <p className="leading-7 text-stone-600">
              Preserving the literary works, philosophy,
              and legacy of Ahmed Sofa through a modern
              digital archive.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-5 font-semibold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link to="/">Home</Link>
              <Link to="/biography">Biography</Link>
              <Link to="/books">Books</Link>
              <Link to="/articles">Articles</Link>
              <Link to="/gallery">Gallery</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 font-semibold">
              Contact
            </h3>

            <div className="space-y-4 text-stone-600">
              <p className="flex gap-2">
                <IoMdMail size={18} />
                info@example.com
              </p>

              <p className="flex gap-2">
                <RiMapPin2Fill size={18} />
                Dhaka, Bangladesh
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 font-semibold">
              Follow
            </h3>

            <div className="flex gap-4">
              <a href="#">
                <FaFacebook />
              </a>

              <a href="#">
                <FaYoutube />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-14 border-t pt-6 text-center text-sm text-stone-500">
          © {new Date().getFullYear()} Ahmed Sofa Literary Archive.
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;