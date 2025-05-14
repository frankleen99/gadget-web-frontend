"use client";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#232323] text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-4">GadgetWeb</h2>
            <p className="text-sm">
              Your one-stop shop for the latest and greatest gadgets.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-center space-x-4">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="hover:text-white transition-colors"
              >
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="hover:text-white transition-colors"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="hover:text-white transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-800 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} GadgetWeb. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
