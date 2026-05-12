import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full glassmorphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
              ✨
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:block">
              EventFinder
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/events"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Events
            </Link>
            <Link
              to="/artists"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Artists
            </Link>
            <Link
              to="/music"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Music
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/50 text-white font-medium transition-all duration-300"
            >
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-white/10 py-4 space-y-3">
            <Link
              to="/"
              className="block text-gray-300 hover:text-white transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/events"
              className="block text-gray-300 hover:text-white transition-colors duration-300"
            >
              Events
            </Link>
            <Link
              to="/artists"
              className="block text-gray-300 hover:text-white transition-colors duration-300"
            >
              Artists
            </Link>
            <Link
              to="/music"
              className="block text-gray-300 hover:text-white transition-colors duration-300"
            >
              Music
            </Link>
            <Link
              to="/about"
              className="block text-gray-300 hover:text-white transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium transition-all duration-300 w-full text-center"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
