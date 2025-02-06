"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations("navigation");

  const locale = useLocale(); // or get the locale from your context or props
  const generateHref = (path: string) => `/${locale}${path}`;

  const navLinks = [
    { href: generateHref("/about"), label: t("about") },
    { href: "https://www.delice.school/", label: t("school") },
    { href: generateHref("/shop"), label: t("shop") },
    { href: generateHref("/blog"), label: t("blog") },
    { href: "https://www.delice.market/", label: t("contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 transition-all duration-300 z-40 w-screen ${
        isScrolled
          ? "py-4 bg-[#f8f3e9]/95 backdrop-blur-md shadow-lg"
          : "py-6 bg-[#f8f3e9]/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between px-4 lg:px-8 box-border">
        <Link
          href="/"
          className="relative group text-[#3d2314] text-xl sm:text-2xl font-serif tracking-wide shrink-0"
        >
          DELICE
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3d2314] transition-all group-hover:w-full"></span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-12">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative group text-[#3d2314] transition-colors duration-300"
            >
              <span className="text-[15px] hover:text-[#5d3324]">
                {item.label}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5d3324] transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-[#3d2314]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#f8f3e9] shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col w-full px-4 py-4">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-3 text-[#3d2314] hover:bg-[#f0e6d9] px-4 rounded-lg transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="py-3 px-4">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
