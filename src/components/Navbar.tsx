"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent, item: { name: string; href: string }) => {
      setActive(item.name);
      setMobileOpen(false);
      if (item.href.startsWith("#")) {
        e.preventDefault();
        const target = document.getElementById(item.href.substring(1));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    []
  );

  return (
    <>
      <header
        className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-[12px] border-b"
        style={{
          backgroundColor: "rgba(8, 15, 35, 0.85)",
          borderBottomColor: "rgba(0, 174, 255, 0.15)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between md:justify-center">
          {/* Desktop Navigation — unchanged */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`relative text-sm md:text-base font-medium transition-colors duration-300 ${
                  active === item.name
                    ? "text-[#3B82F6]"
                    : "text-gray-300 hover:text-[#60A5FA]"
                }`}
              >
                {item.name}
                {active === item.name && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute left-0 right-0 -bottom-2 h-[2px] bg-[#3B82F6] rounded-full"
                    initial={false}
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile: Hamburger only */}
          <div className="flex md:hidden items-center justify-end w-full">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${
                    mobileOpen
                      ? "rotate-45 translate-y-[7px]"
                      : ""
                  }`}
                />
                <span
                  className={`block h-[2px] bg-current rounded-full transition-all duration-300 ${
                    mobileOpen ? "opacity-0 scale-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${
                    mobileOpen
                      ? "-rotate-45 -translate-y-[7px]"
                      : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-in Menu Panel */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 z-[60] h-full w-[80%] max-w-[320px] md:hidden flex flex-col"
              style={{ backgroundColor: "rgba(8, 12, 30, 0.97)" }}
            >
              {/* Menu Header */}
              <div className="flex items-center justify-end px-6 h-16 border-b border-white/5">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 flex flex-col justify-center px-6 -mt-16">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.05 + index * 0.05,
                      duration: 0.3,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`block py-4 text-[22px] font-medium transition-colors duration-200 border-b border-white/5 ${
                        active === item.name
                          ? "text-[#60A5FA]"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        {active === item.name && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                        )}
                        {item.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Menu Footer */}
              <div className="px-6 py-6 border-t border-white/5">
                <p className="text-gray-500 text-xs text-center">
                  Gautam Yadav — Portfolio
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
