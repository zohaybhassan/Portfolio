import { useState } from 'react';
import type { MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const section = document.getElementById(id);
    if (!section) return;

    event.preventDefault();
    setIsMobileMenuOpen(false);
    requestAnimationFrame(() => {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${id}`);
    });
  };

  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950">
      <div className="page-container">
        <div className="flex items-center justify-end h-16">
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={(event) => scrollToSection(event, item.id)} className="text-sm text-slate-300 hover:text-indigo-300 transition-colors">
                {item.label}
              </a>
            ))}
          </div>
          <button
            type="button"
            className="md:hidden rounded-md p-2 text-slate-200 hover:bg-slate-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div id="mobile-navigation" className="md:hidden border-t border-slate-800 py-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => scrollToSection(event, item.id)}
                className="block rounded-md px-2 py-3 text-sm text-slate-300 hover:text-indigo-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
