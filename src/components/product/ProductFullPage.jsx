import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import products from "./products.jsx";
import "../styles/ResourceLibrary.css";
import "../styles/ProductGrid.css";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = products.find((p) => p.slug === slug);
    if (found) {
      setProduct(found);
    } else {
      console.error("❌ Product not found for slug:", slug);
    }
  }, [slug]);

  if (!product) {
    return <p className="text-center text-red-600 py-10">Product not found.</p>;
  }

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
          className="product-detail-layout"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="product-detail-image">
            <img
              src={product.image}
              alt={product.title}
              className="product-thumbnail"
            />
          </div>

          <div className="product-detail-text">
            <h1 className="product-title">{product.title}</h1>
            <p className="product-description">{product.description}</p>
            <a
              href={product.downloadUrl}
              className="product-download-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              ⬇️ Download Resource
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
