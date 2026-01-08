import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-pink-100">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
          >
            BNG
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex gap-8"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-700 hover:text-purple-600 transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pt-4 pb-2"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
