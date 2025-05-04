import React, { useEffect, useState } from "react";
import products from "./products.jsx";
import { Link } from "react-router-dom";
import "../styles/ProductGrid.css";

export default function ProductGrid() {
  const [debug, setDebug] = useState(false);

  useEffect(() => {
    try {
      console.log("🧪 Loaded products:", products);
      if (!Array.isArray(products)) {
        console.error("❌ products is not an array. Check the export from products.jsx");
      } else if (products.length === 0) {
        console.warn("⚠️ No products found. File may be empty or incorrectly formatted.");
      }
      setDebug(true);
    } catch (err) {
      console.error("🚨 Error loading products:", err);
    }
  }, []);

  return (
    <section className="product-grid-container">
      <h1 className="page-title">📦 Downloadable Resources</h1>
      <p className="section-description">Explore our library of tools, templates, and frameworks.</p>

      {debug && products.length === 0 && (
        <p className="text-red-500 font-semibold">⚠️ No products found. Check the import or file path.</p>
      )}

      <div className="product-grid">
        {Array.isArray(products) && products.map((product) => (
          <div key={product.slug} className="product-card">
            <Link to={`/resources/${product.slug}`} className="product-link">
              <img src={product.image} alt={product.title} className="product-thumbnail" />
              <h3 className="product-card-title">{product.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
