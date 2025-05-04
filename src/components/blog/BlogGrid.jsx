import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import matter from "gray-matter";

export default function BlogGrid() {
  const [posts, setPosts] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedSeries, setSelectedSeries] = useState("All");

  useEffect(() => {
    async function loadPosts() {
      const context = import.meta.glob("../blog/content/*.md", {
        eager: true,
        query: "?raw",
        import: "default",
      });

      const entries = Object.entries(context);
      const loaded = entries.map(([path, raw]) => {
        const { data } = matter(raw);
        return {
          ...data,
          slug: data.slug || path.split("/").pop().replace(".md", ""),
        };
      });

      setPosts(loaded);
    }

    loadPosts();
  }, []);

  const seriesOptions = React.useMemo(() => {
    return [
      "All",
      ...Array.from(new Set(posts.map((p) => p.series).filter(Boolean))),
    ];
  }, [posts]);

  const filtered = selectedSeries === "All"
    ? posts
    : posts.filter((p) => p.series === selectedSeries);

  const sortedPosts = [...filtered].sort((a, b) =>
    sortOrder === "desc"
      ? new Date(b.date) - new Date(a.date)
      : new Date(a.date) - new Date(b.date)
  );

  return (
    <section className="resource-container">
      <h1 className="page-title">📄 Blog Posts</h1>
      <p className="section-description">
        A collection of all Scalable Stories Newsletter editions.
      </p>

      {posts.length > 0 && (
        <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
          <div>
            <label htmlFor="series-select" className="mr-2 text-sm font-medium">
              Filter by Series:
            </label>
            <select
              id="series-select"
              value={selectedSeries}
              onChange={(e) => setSelectedSeries(e.target.value)}
              className="border rounded px-3 py-1 text-sm"
            >
              {seriesOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <button
            onClick={() =>
              setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"))
            }
            className="text-sm font-semibold border border-gray-300 px-4 py-2 rounded"
          >
            Sort: {sortOrder === "desc" ? "Newest First" : "Oldest First"}
          </button>
        </div>
      )}

      <div className="resource-grid">
        {sortedPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="resource-card"
          >
            <h3 className="resource-title">{post.title}</h3>
            <p className="resource-description">{post.excerpt}</p>
            <p className="text-xs text-gray-500 mt-1">{post.date}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
