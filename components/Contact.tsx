"use client";
import { FC, FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";

const ContactSection: FC = () => {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    emailjs.init("qjb7LXYLF_cMWMYzD"); // Replace with your actual public key
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      await emailjs.sendForm(
        "service_fxft1en", // Replace with your actual service ID
        "template_2nv15mk", // Replace with your actual template ID
        e.target as HTMLFormElement,
        "qjb7LXYLF_cMWMYzD" // Replace with your actual public key
      );
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gradient-to-br from-[#f8f3e9] via-[#f5efe5] to-[#f0e6d9] py-32">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div variants={fadeInUp} className="flex-1 relative">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="col-span-2 row-span-2"
              >
                <div className="aspect-square overflow-hidden rounded-3xl shadow-2xl relative">
                  <Image
                    src="/mainContact.png"
                    alt="Chocolate Making"
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
              {["tasting", "workshop", "events", "classes", "products"].map(
                (activity, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="overflow-hidden rounded-3xl shadow-xl relative"
                  >
                    <div className="aspect-square relative">
                      <Image
                        src={`/chocolate-${activity}.png`}
                        alt={`DELICE ${activity}`}
                        fill
                        className="object-cover transform hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex-1 w-full max-w-xl">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-light mb-8 text-[#3d2314] tracking-tight"
            >
              {t("title")}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg mb-12 text-[#3d2314]/70 leading-relaxed"
            >
              {t("description")}
            </motion.p>

            <motion.form
              variants={fadeInUp}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative group"
              >
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="w-full py-4 bg-transparent outline-none text-lg text-black transition-all duration-300 group-hover:border-[#3d2314] px-2"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3d2314] group-hover:w-full transition-all duration-300" />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative group"
              >
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  className="w-full py-4 bg-transparent outline-none text-lg text-black transition-all duration-300 group-hover:border-[#3d2314] px-2"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3d2314] group-hover:w-full transition-all duration-300" />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative group"
              >
                <textarea
                  name="message"
                  placeholder="Tell us about your interest in chocolate making"
                  rows={4}
                  className="w-full py-4 bg-transparent outline-none text-lg text-black resize-none transition-all duration-300 group-hover:border-[#3d2314] px-2"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3d2314] group-hover:w-full transition-all duration-300" />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{
                  scale: isSubmitting ? 1 : 1.05,
                  boxShadow: "0 10px 30px rgba(61,35,20,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className={`bg-[#3d2314] text-white px-12 py-5 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-[#5d3324] w-full lg:w-auto ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? t("sending") : t("submit")}
              </motion.button>
              {submitStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-600 text-center"
                >
                  {t("successMessage")}
                </motion.p>
              )}

              {submitStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-600 text-center"
                >
                  {t("errorMessage")}
                </motion.p>
              )}
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
