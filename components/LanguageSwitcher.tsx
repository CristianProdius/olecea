"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/app/i18n/routing";
import { useState, useRef, useEffect } from "react";

interface Language {
  code: string;
  name: string;
}

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: Language[] = [
    { code: "en", name: "EN" },
    { code: "ro", name: "RO" },
    { code: "ru", name: "RU" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleLanguageChange(code: string): void {
    router.replace(pathname, { locale: code });
    setIsOpen(false);
  }

  const currentLang = languages.find((lang) => lang.code === locale);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group text-[#3d2314] transition-colors duration-300 text-[15px] hover:text-[#5d3324]"
      >
        {currentLang?.name}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5d3324] transition-all group-hover:w-full"></span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-[#f8f3e9] shadow-lg rounded-lg overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`block w-full px-4 py-2 text-left text-[15px] hover:bg-[#f0e6d9] transition-colors ${
                locale === lang.code
                  ? "text-[#5d3324] font-medium"
                  : "text-[#3d2314]"
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
