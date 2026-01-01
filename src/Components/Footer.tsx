import React from "react";
import "../index.css"; // Make sure your :root vars and .link class are here
import Logo from "../assets/logo.png";
export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <img
            className="h-25 w-60 object-cover rounded-full"
            src={Logo}
            alt=""
          />
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Your one-stop shop for quality products, secure payments, and fast
            delivery.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
            Product
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a className="hover:text-white transition" href="#">
                Features
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="#">
                Docs
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="#">
                Updates
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
            Company
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a className="hover:text-white transition" href="#">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
            Stay Updated
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to get the latest updates.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 rounded-xl bg-gray-900 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            />
            <button className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium">
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} StoreX. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {/* <a className="hover:text-white transition" href="#"><Facebook size={18} /></a>
                <a className="hover:text-white transition" href="#"><Twitter size={18} /></a>
                <a className="hover:text-white transition" href="#"><Github size={18} /></a>
                <a className="hover:text-white transition" href="#"><Linkedin size={18} /></a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
