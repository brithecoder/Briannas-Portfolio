import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-6 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-700 flex items-center justify-center gap-2">
          Designed & Built with <Heart className="h-4 w-4 text-pink-500 fill-pink-500" /> by Brianna Gordon
        </p>
        <p className="text-gray-600 text-sm mt-2">© 2026 All rights reserved.</p>
      </div>
    </footer>
  );
}
