"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            StudentHub
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            <Link
              href="/photographers"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Book Photographer
            </Link>
            <Link
              href="/scholarships"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Scholarships
            </Link>
            <Link
              href="/subjects"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              UTME Subjects
            </Link>
            <Link
              href="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col space-y-4 pt-4 pb-2">
            <Link
              href="/photographers"
              className="text-gray-600 hover:text-blue-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              Book Photographer
            </Link>
            <Link
              href="/scholarships"
              className="text-gray-600 hover:text-blue-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              Scholarships
            </Link>
            <Link
              href="/subjects"
              className="text-gray-600 hover:text-blue-600 transition-colors py-2"
              onClick={toggleMenu}
            >
              UTME Subjects
            </Link>
            <Link
              href="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-center"
              onClick={toggleMenu}
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
