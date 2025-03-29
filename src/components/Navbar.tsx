import * as React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Navbar() {
  // Přidáme state pro aktivní položku menu
  const [activeItem, setActiveItem] = React.useState<string | null>(null);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 h-16 bg-black text-white">
      {/* Logo a jméno - fixní pozice vlevo se stejným odsazením jako navigace */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 flex items-center gap-3 z-10">
        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center overflow-hidden group">
          <span className="text-xs group-hover:scale-110 transition-transform duration-300">LOGO</span>
        </div>
        
        <Link 
          to="/" 
          className="font-serif text-2xl tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white font-bold"
        >
          VICTOR TELLAGIO
        </Link>
      </div>
      
      {/* Desktop navigace - fixní pozice vpravo s větším textem a vylepšeným hover efektem */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 z-10">
        <nav className="hidden md:flex items-center gap-8">
          {[
            { path: "/about", label: "ABOUT" },
            { path: "/music", label: "MUSIC" },
            { path: "/events", label: "EVENTS" },
            { path: "/socials", label: "SOCIALS" },
            { path: "/contact", label: "CONTACT" }
          ].map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className="text-base font-bold tracking-widest transition-all duration-300 relative group"
              onMouseEnter={() => setActiveItem(item.path)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <span className={`relative z-10 ${activeItem === item.path ? 'text-white' : 'text-gray-300'}`}>
                {item.label}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              {/* Přidáme jemný glow efekt při hoveru */}
              <span className="absolute inset-0 -z-10 bg-white opacity-0 blur-md group-hover:opacity-10 transition-opacity duration-300"></span>
            </Link>
          ))}
        </nav>
      </div>
      
      {/* Mobilní navigace - fixní pozice vpravo */}
      <div className="md:hidden absolute right-5 top-1/2 -translate-y-1/2 z-10">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white hover:bg-gray-900 transition-colors duration-300">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Otevřít menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black text-white border-gray-800">
            <div className="flex flex-col gap-6 mt-8">
              {[
                { path: "/about", label: "ABOUT" },
                { path: "/music", label: "MUSIC" },
                { path: "/events", label: "EVENTS" },
                { path: "/socials", label: "SOCIALS" },
                { path: "/contact", label: "CONTACT" }
              ].map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className="text-base font-bold tracking-widest hover:text-white transition-all duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}