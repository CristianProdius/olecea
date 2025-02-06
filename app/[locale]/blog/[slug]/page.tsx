"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Post {
  title: string;
  content: string;
  date: string;
  featuredImage: string;
  author: string;
  categories: string[];
}

export default function BlogPost() {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const { slug } = params;

  useEffect(() => {
    fetchPost();
  }, [slug]);

  const fetchPost = async () => {
    try {
      const response = await fetch(
        `https://admin.delice.school/personal/wp-json/wp/v2/posts?slug=${slug}&_embed`
      );
      const [data] = await response.json();

      const formattedPost = {
        title: data.title.rendered,
        content: data.content.rendered,
        date: new Date(data.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        featuredImage:
          data._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
          "/placeholder.jpg",
        author: data._embedded?.["author"]?.[0]?.name || "Anonymous",
        categories:
          data._embedded?.["wp:term"]?.[0]?.map(
            (cat: { name: string }) => cat.name
          ) || [],
      };

      setPost(formattedPost);
    } catch (error) {
      console.error("Error fetching post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#f8f3e9] pt-32 pb-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-white rounded w-3/4 mb-4" />
            <div className="h-4 bg-white rounded w-1/4 mb-8" />
            <div className="h-96 bg-white rounded mb-8" />
            <div className="space-y-4">
              <div className="h-4 bg-white rounded" />
              <div className="h-4 bg-white rounded" />
              <div className="h-4 bg-white rounded w-5/6" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-[#f8f3e9] pt-32 pb-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl text-[#3d2314]">Post not found</h1>
        </div>
      </main>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f8f3e9] pt-32 pb-24 px-4 md:px-8">
        <motion.article
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <header className="mb-12">
            <h1
              className="text-4xl md:text-5xl font-medium text-[#3d2314] mb-4"
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
            <div className="flex flex-wrap items-center gap-4 text-[#3d2314]/60">
              <span>{post.date}</span>
              <span>•</span>
              <span>By {post.author}</span>
              {post.categories.length > 0 && (
                <>
                  <span>•</span>
                  <div className="flex gap-2">
                    {post.categories.map((category) => (
                      <span
                        key={category}
                        className="bg-[#3d2314]/10 px-3 py-1 rounded-full text-sm"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </header>

          {post.featuredImage && (
            <div className="relative h-[400px] md:h-[500px] mb-12 rounded-2xl overflow-hidden">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div
            className="prose prose-lg max-w-none prose-headings:text-[#3d2314] prose-p:text-[#3d2314]/80 prose-a:text-[#3d2314] prose-strong:text-[#3d2314] prose-blockquote:border-l-[#3d2314] prose-blockquote:text-[#3d2314]/80"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.article>
      </main>
      <Footer />
    </>
  );
}
