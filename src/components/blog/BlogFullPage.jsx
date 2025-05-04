import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { marked } from "marked";
import matter from "gray-matter";
import "../styles/ResourceLibrary.css";
import "../styles/ProductFullPage.css";

const allPosts = import.meta.glob("../blog/content/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

// Custom renderer with copy buttons and accessibility
const renderer = new marked.Renderer();

renderer.code = (code, lang = "") => {
  const actual = typeof code === "string" ? code : code?.text || "";
  const escaped = actual
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/`/g, "&#96;");

  return `
    <div class="code-block">
      <pre><code class="language-${lang}">${escaped}</code></pre>
      <button class="copy-btn" aria-label="Copy code">📋 Copy</button>
    </div>
  `;
};

marked.setOptions({ renderer });

export default function ResourceDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState(null);
  const [data, setData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      for (const [path, raw] of Object.entries(allPosts)) {
        const { data, content } = matter(raw);
        console.log("🔎 Checking slug for:", data.slug);
        if (data.slug === slug) {
          const html = marked.parse(typeof content === "string" ? content : String(content));
          setContent(html);
          setData(data);
          console.log("✅ Match found:", data.slug);
          return;
        }
      }
      setNotFound(true);
    };

    loadPost();
  }, [slug]);

  useEffect(() => {
    const buttons = document.querySelectorAll(".copy-btn");
    buttons.forEach((btn) => {
      const code = btn?.parentElement?.querySelector("pre code")?.textContent || "";
      btn.onclick = () => {
        navigator.clipboard.writeText(code);
        btn.textContent = "✅ Copied!";
        setTimeout(() => (btn.textContent = "📋 Copy"), 2000);
      };
    });
  }, [content]);

  if (notFound) {
    return <p className="text-center text-red-600 py-10">Resource not found.</p>;
  }

  if (!data) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slug}
        className="resource-detail-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.button
          onClick={() => navigate("/resources")}
          className="back-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to Resource Library"
        >
          ← Back to Library
        </motion.button>

        <motion.div
          className="resource-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <header className="blog-header">
            <h1 className="blog-title" tabIndex="0">{data.title}</h1>
            <p className="blog-date" aria-label={`Published on ${data.date}`}>{data.date}</p>
          </header>

          <article
            className="blog-markdown-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
