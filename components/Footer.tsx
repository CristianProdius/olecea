"use client";
import { FC, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

interface FooterProps {
  currentYear?: number;
}

const Footer: FC<FooterProps> = ({ currentYear = 2024 }) => {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState("");
  const t = useTranslations("footer");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  // TO DO "courses", "tastings", "events" implement this services
  const services = ["school", "shop"];
  const connect = ["about", "blog", "contact", "instagram"];
  const locale = useLocale(); // or get the locale from your context or props
  const generateHref = (path: string) => `/${locale}${path}`;

  return (
    <footer className="bg-gradient-to-b from-[#f0e6d9] to-[#f8f3e9] px-6 py-16 md:px-8 md:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr,1fr] gap-12 md:gap-16">
          <motion.div variants={fadeInUp} className="space-y-8">
            <h2 className="text-3xl font-medium text-[#3d2314]">DELICE</h2>
            <p className="text-[#3d2314]/80 text-lg">
              {t("newsletter.description")}
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative group"
              >
                <input
                  type="email"
                  placeholder={t("newsletter.emailPlaceholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-[#3d2314]/20 pb-3 focus:outline-none focus:border-[#3d2314] transition-all duration-300 text-lg px-2"
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3d2314] group-hover:w-full transition-all duration-300" />
              </motion.div>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(61,35,20,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#3d2314] text-white px-10 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-[#5d3324] w-full md:w-auto"
              >
                {t("newsletter.subscribe")}
              </motion.button>
            </form>
            <p className="text-sm text-[#3d2314]/60 leading-relaxed">
              {t("newsletter.agreement")}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-medium mb-8 text-[#3d2314]">
              {t("services.title")}
            </h3>
            <motion.ul variants={staggerChildren} className="space-y-4">
              {services.map((item) => (
                <motion.li key={item} variants={fadeInUp}>
                  <Link
                    href={
                      item === "school"
                        ? "https://www.delice.school"
                        : item === "shop"
                        ? "https://www.delice.market"
                        : `/${item}`
                    }
                  >
                    <span
                      onMouseEnter={() => setIsHovered(item)}
                      onMouseLeave={() => setIsHovered("")}
                      className="relative inline-block text-lg text-[#3d2314]/80 hover:text-[#3d2314] transition-colors duration-300"
                    >
                      {t(`services.${item}`)}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#3d2314] transform origin-left transition-transform duration-300 ${
                          isHovered === item ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-medium mb-8 text-[#3d2314]">
              {t("connect.title")}
            </h3>
            <motion.ul variants={staggerChildren} className="space-y-4">
              {connect.map((item) => (
                <motion.li key={item} variants={fadeInUp}>
                  <Link
                    href={
                      item === "instagram"
                        ? "https://www.instagram.com/delice.sommelier/"
                        : item === "blog"
                        ? generateHref("/blog")
                        : item === "about"
                        ? generateHref("/about")
                        : item === "contact"
                        ? generateHref("/contact")
                        : generateHref(item)
                    }
                  >
                    <span
                      onMouseEnter={() => setIsHovered(item)}
                      onMouseLeave={() => setIsHovered("")}
                      className="relative inline-block text-lg text-[#3d2314]/80 hover:text-[#3d2314] transition-colors duration-300"
                    >
                      {t(`connect.${item}`)}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#3d2314] transform origin-left transition-transform duration-300 ${
                          isHovered === item ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col md:flex-row md:items-center justify-between mt-16 md:mt-24 pt-8 border-t border-[#3d2314]/10"
        >
          <div className="text-[#3d2314]/60 text-center md:text-left">
            © {currentYear} {t("copyright")}
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-6 md:mt-0 text-center md:text-left">
            <Link href="#">
              <span
                onMouseEnter={() => setIsHovered("Back to top")}
                onMouseLeave={() => setIsHovered("")}
                className="relative text-[#3d2314]/60 hover:text-[#3d2314] transition-colors duration-300"
              >
                {t("backToTop")}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#3d2314] transform origin-left transition-transform duration-300 ${
                    isHovered === "Back to top" ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </span>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
