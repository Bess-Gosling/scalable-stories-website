import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { marked } from "marked";
import matter from "gray-matter";
import "../styles/PromptLibrary.css";

const allFiles = import.meta.glob("../prompts/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

export default function PromptLibraryPage() {
  const [html, setHtml] = useState("");

  useEffect(() => {
    const file = Object.values(allFiles)[0]; // Assumes one file for now
    const { content } = matter(file);
    const htmlContent = marked.parse(content);
    setHtml(htmlContent);
  }, []);

  useEffect(() => {
    const handler = () => {
      const buttons = document.querySelectorAll(".copy-btn");
      buttons.forEach((btn) => {
        const text = btn.previousElementSibling?.textContent;
        btn.onclick = () => {
          navigator.clipboard.writeText(text);
          btn.textContent = "✅ Copied!";
          setTimeout(() => (btn.textContent = "📋 Copy"), 2000);
        };
      });
    };

    // Wait for HTML injection
    setTimeout(handler, 100);
  }, [html]);

  return (
    <motion.div
      className="prompt-library-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <header className="prompt-header">
        <h1 className="prompt-title">🧠 Daily AI Prompt Library</h1>
        <p className="prompt-subtext">
          Copy and paste any of these into ChatGPT to move your business forward today.
        </p>
      </header>

      <article
        className="prompt-grid"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </motion.div>
  );
}
