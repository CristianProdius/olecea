"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  featuredImage: string;
  slug: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://admin.delice.school/personal/wp-json/wp/v2/posts?_embed"
      );
      const data = await response.json();
      const formattedPosts = data.map(
        (post: {
          id: number;
          title: { rendered: string };
          excerpt: { rendered: string };
          date: string;
          _embedded?: { "wp:featuredmedia"?: [{ source_url: string }] };
          slug: string;
        }) => ({
          id: post.id,
          title: post.title.rendered,
          excerpt: post.excerpt.rendered,
          date: new Date(post.date).toLocaleDateString(),
          featuredImage:
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "/placeholder.jpg",
          slug: post.slug,
        })
      );
      setPosts(formattedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f8f3e9] pt-32 pb-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-medium text-[#3d2314] mb-12"
          >
            Blog
          </motion.h1>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="animate-pulse bg-white rounded-2xl h-96"
                />
              ))}
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              initial="hidden"
              animate="visible"
            >
              {posts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id}>
                  <motion.article
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-[#3d2314]/60 mb-2">
                        {post.date}
                      </p>
                      <h2
                        className="text-xl font-medium text-[#3d2314] mb-3"
                        dangerouslySetInnerHTML={{ __html: post.title }}
                      />
                      <div
                        className="text-[#3d2314]/80 mb-6 line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: post.excerpt }}
                      />
                      <span className="inline-block bg-[#3d2314] text-white px-6 py-2 rounded-full text-sm hover:bg-[#5d3324] transition-colors duration-300">
                        Read More
                      </span>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
