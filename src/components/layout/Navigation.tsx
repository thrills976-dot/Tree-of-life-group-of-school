import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/#home" },
  { name: "About", path: "/#about" },
  { name: "Academics", path: "/#academics" },
  { name: "Admissions", path: "/#admissions" },
  { name: "School Life", path: "/#school-life" },
  { name: "Gallery", path: "/#gallery" },
  { name: "Contact", path: "/#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isScrolled
          ? "bg-nature-green-dark py-4 shadow-xl border-b-4 border-accent-gold"
          : "bg-nature-green-dark py-6 shadow-lg border-b-4 border-accent-gold"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="relative z-50 flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-nature-green-dark overflow-hidden border-2 border-accent-gold shadow-md">
              {!imgError ? (
                <img 
                  src="/images/logo.png" 
                  alt="School Logo" 
                  className="w-full h-full object-contain p-1 bg-white"
                  onError={() => setImgError(true)}
                />
              ) : (
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <span className="font-serif font-bold text-2xl text-nature-green-dark">T</span>
                </motion.div>
              )}
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl leading-tight text-white transition-colors group-hover:text-accent-gold">
                Tree of Life
              </span>
              <span className="text-xs font-bold tracking-wider uppercase text-accent-gold transition-colors">
                Group of Schools
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-sm font-bold tracking-wide text-white transition-colors hover:text-accent-gold relative group uppercase"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-accent-gold transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
          <a
            href="/#admissions"
            className="px-8 py-3 bg-accent-gold text-nature-green-dark font-bold rounded-full hover:bg-white hover:text-nature-green-dark transition-all transform hover:scale-105 shadow-lg uppercase tracking-wide"
          >
            Apply Now
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden relative z-50 p-2 text-white hover:text-accent-gold transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-nature-green-dark z-40 flex flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif font-bold text-white hover:text-accent-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/#admissions"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 px-10 py-4 bg-accent-gold text-nature-green-dark font-bold rounded-full hover:bg-white transition-all text-xl uppercase tracking-wide"
              >
                Apply Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
