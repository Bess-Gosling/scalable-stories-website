import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-coral-100 border-t border-gray-200 pt-16 pb-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: Branding */}
        <div>
          <h3 className="text-xl font-bold mb-2">Scalable Stories</h3>
          <p className="text-sm text-gray-600 mb-4">
            Practical tools & stories for modern founders.
          </p>
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Scalable Stories</p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h4 className="text-sm font-semibold mb-3 text-gray-800 uppercase tracking-wide">
            Explore
          </h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link to="/resources" className="hover:text-coral-600">Library</Link></li>
            <li><Link to="/products" className="hover:text-coral-600">Downloads</Link></li>
            <li><Link to="/about" className="hover:text-coral-600">About</Link></li>
            <li><Link to="/contact" className="hover:text-coral-600">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Newsletter */}
        <div>
          <h4 className="text-sm font-semibold mb-3 text-gray-800 uppercase tracking-wide">
            Join the newsletter
          </h4>
          <p className="text-sm text-gray-600 mb-4">
            Weekly insights.
          </p>
          <iframe
            src="https://embeds.beehiiv.com/b999be18-6b0c-481f-bac8-709079eca10d?slim=true"
            data-test-id="beehiiv-embed"
            height="52"
            frameBorder="0"
            scrolling="no"
            style={{
              margin: 0,
              width: "100%",
              maxWidth: "100%",
              borderRadius: "8px",
              backgroundColor: "transparent",
            }}
            title="Subscribe to Scalable Stories"
          />
        </div>
      </div>
    </footer>
  );
}
