import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const CarFinderFooter = () => {
  return (
    <footer className="text-gray-600 py-10 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-3xl font-bold mb-2 text-gray-600">AutoFind</h2>
          <p className="text-sm text-gray-500">
            Discover your next ride with ease. Trusted listings, verified
            dealers, and the best car deals.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <Link href="/cars">Find Cars</Link>
            </li>
            <li>
              <Link href="/sell">Sell Your Car</Link>
            </li>
            <li>
              <Link href="/dealers">Dealers</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <Link href="/faq">FAQs</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/terms">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
          <div className="flex gap-4 mb-4">
            <a href="#" className="hover:text-blue-400">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-pink-500">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-sky-400">
              <Twitter size={20} />
            </a>
            <a
              href="mailto:support@autofind.com"
              className="hover:text-green-400"
            >
              <Mail size={20} />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} AutoFind. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CarFinderFooter;
