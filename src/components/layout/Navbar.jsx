import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const menus = [
  { name: "Home", path: "/" },
  { name: "Biography", path: "/biography" },
  { name: "Books", path: "/books" },
  { name: "Articles", path: "/articles" },
  { name: "Gallery", path: "/gallery" },
  { name: "Videos", path: "/videos" },
  { name: "Quotes", path: "/quotes" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/60 bg-[#F8F4EC]/90 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        {/* Logo */}
        <Link to="/" className="flex flex-col">
          <span className="text-2xl font-bold tracking-wide text-stone-900">
            Ahmed Sofa
          </span>

          <span className="text-xs uppercase tracking-[0.35em] text-stone-500">
            Literary Archive
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {menus.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition ${
                  isActive
                    ? "text-amber-700"
                    : "text-stone-700 hover:text-amber-700"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "max-h-screen border-t" : "max-h-0"
        }`}
      >
        <div className="flex flex-col bg-[#F8F4EC]">
          {menus.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-6 py-4 ${
                  isActive
                    ? "bg-amber-100 text-amber-700"
                    : "text-stone-700"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;