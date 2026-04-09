import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/rental", label: "Rental Info" },
    { href: "/vendors", label: "Vendors" },
    { href: "/gallery", label: "Gallery" },
    { href: "/couples", label: "Our Couples" },
    { href: "/history", label: "History" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || location !== "/" ? "bg-background/95 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex flex-col items-center">
          <span className={`font-script text-3xl md:text-4xl ${isScrolled || location !== "/" ? "text-primary" : "text-white drop-shadow-md"} leading-none`}>
            Alford's Glen
          </span>
          <span className={`font-sans text-xs tracking-[0.2em] uppercase ${isScrolled || location !== "/" ? "text-foreground/80" : "text-white/90 drop-shadow-sm"} mt-1`}>
            Wedding Barn
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.href
                  ? "text-primary"
                  : isScrolled || location !== "/"
                  ? "text-foreground/80"
                  : "text-white/90 drop-shadow-sm hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:-translate-y-0.5 ml-2">
            <Link href="/contact">Check Availability</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 -mr-2 ${isScrolled || location !== "/" ? "text-foreground" : "text-white drop-shadow-md"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background border-b border-border shadow-lg lg:hidden"
          >
            <div className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-serif transition-colors ${
                    location === link.href ? "text-primary" : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="rounded-full bg-primary mt-2 w-full">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Check Availability</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
