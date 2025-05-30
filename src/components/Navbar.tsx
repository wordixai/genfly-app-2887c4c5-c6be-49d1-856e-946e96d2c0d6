import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="text-2xl font-bold text-amber-800">Brew Haven</span>
        </a>

        {isMobile ? (
          <>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>

            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 flex flex-col gap-4">
                <a href="#about" className="text-amber-800 hover:text-amber-600" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#menu" className="text-amber-800 hover:text-amber-600" onClick={() => setIsMenuOpen(false)}>Menu</a>
                <a href="#gallery" className="text-amber-800 hover:text-amber-600" onClick={() => setIsMenuOpen(false)}>Gallery</a>
                <a href="#contact" className="text-amber-800 hover:text-amber-600" onClick={() => setIsMenuOpen(false)}>Contact</a>
                <Button className="bg-amber-800 hover:bg-amber-700">Order Online</Button>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center gap-8">
            <a href="#about" className="text-amber-800 hover:text-amber-600 font-medium">About</a>
            <a href="#menu" className="text-amber-800 hover:text-amber-600 font-medium">Menu</a>
            <a href="#gallery" className="text-amber-800 hover:text-amber-600 font-medium">Gallery</a>
            <a href="#contact" className="text-amber-800 hover:text-amber-600 font-medium">Contact</a>
            <Button className="bg-amber-800 hover:bg-amber-700">Order Online</Button>
          </nav>
        )}
      </div>
    </header>
  );
}