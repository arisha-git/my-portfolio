import { useState, useEffect, useRef } from "react";
import { info } from "../data/info";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const links = ["About", "Projects", "Skills", "Experience"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0a1a]/90 backdrop-blur-md border-b border-white/10 py-3"
          : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <span className="font-display text-xl font-bold gradient-text">
          {info.name.split(" ")[0]}.
        </span>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="text-sm px-4 py-2 rounded-full border border-violet-400 text-violet-400 hover:bg-violet-600 hover:text-white transition-all duration-200"
          >
            Contact
          </button>

          {open && (
            <div
              className="absolute right-0 mt-3 w-64 bg-[#1a1025]
                         border border-violet-900/50 rounded-2xl
                         shadow-xl shadow-violet-950/40
                         overflow-hidden z-50"
            >
              <p className="text-xs text-zinc-500 px-4 pt-4 pb-2 uppercase tracking-widest">
                Reach me at
              </p>

              <a
                href={`mailto:${info.email}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3 hover:bg-violet-900/30 transition-colors duration-200 group"
              >
                <div
                  className="w-8 h-8 rounded-full bg-violet-900/50
                             flex items-center justify-center
                             group-hover:bg-violet-700/50
                             transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-violet-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>

                <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                  {info.email}
                </span>
              </a>

            
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}