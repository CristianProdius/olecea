"use client";
import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useTranslations } from "next-intl";

const ContactPage = () => {
  const t = useTranslations("ContactPage");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <main className="bg-[#f8f3e9]">
      <Header />

      <section className="min-h-[50vh] relative flex items-center pt-32 pb-20 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#3d2314]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#3d2314]/5 rounded-full blur-3xl" />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-7xl mx-auto relative z-10 w-full"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto space-y-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-[64px] font-serif leading-[1.1] tracking-[-0.02em] text-[#3d2314]">
              {t("title")}
            </h1>
            <p className="text-xl text-[#3d2314]/80 leading-relaxed">
              {t("description")}
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 px-4 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div variants={fadeInUp}>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="relative group"
                  >
                    <input
                      type="text"
                      placeholder={t("form.name")}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full py-4 bg-transparent border-b-2 border-[#3d2314]/20 outline-none text-lg transition-all duration-300 group-hover:border-[#3d2314] px-2"
                      required
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="relative group"
                  >
                    <input
                      type="email"
                      placeholder={t("form.email")}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full py-4 bg-transparent border-b-2 border-[#3d2314]/20 outline-none text-lg transition-all duration-300 group-hover:border-[#3d2314] px-2"
                      required
                    />
                  </motion.div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative group"
                >
                  <input
                    type="text"
                    placeholder={t("form.subject")}
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full py-4 bg-transparent border-b-2 border-[#3d2314]/20 outline-none text-lg transition-all duration-300 group-hover:border-[#3d2314] px-2"
                    required
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative group"
                >
                  <textarea
                    placeholder={t("form.message")}
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full py-4 bg-transparent border-b-2 border-[#3d2314]/20 outline-none text-lg resize-none transition-all duration-300 group-hover:border-[#3d2314] px-2"
                    required
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#3d2314] text-white px-12 py-5 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-[#5d3324] w-full sm:w-auto"
                >
                  {t("form.button")}
                </motion.button>
              </form>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-12">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/mainContact.png"
                  alt="DELICE Chocolate Workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-8 bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
                <div>
                  <h3 className="text-xl font-serif text-[#3d2314] mb-2">
                    {t("location.title")}
                  </h3>
                  <p className="text-[#3d2314]/80">{t("location.address")}</p>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-[#3d2314] mb-2">
                    {t("email.title")}
                  </h3>
                  <p className="text-[#3d2314]/80">{t("email.address")}</p>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-[#3d2314] mb-2">
                    {t("social.title")}
                  </h3>
                  <div className="flex space-x-4">
                    <motion.a
                      href="https://www.instagram.com/delice.sommelier/"
                      whileHover={{ scale: 1.1 }}
                      className="text-[#3d2314]/80 hover:text-[#3d2314]"
                    >
                      Instagram
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      className="text-[#3d2314]/80 hover:text-[#3d2314]"
                    >
                      Facebook
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
