import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FileText, ArrowUpRight, Menu, X, Terminal, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['work', 'about', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'What I Build', href: '#what-i-build', id: 'what-i-build' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0D0F10]/90 backdrop-blur-md border-b border-[#292D30] py-3.5 shadow-sm'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand / Name */}
        <a
          href="#"
          id="nav-brand-logo"
          className="flex items-center gap-2.5 group text-left focus:outline-none focus:ring-1 focus:ring-[#6FA7A3] rounded"
        >
          <div className="w-8 h-8 rounded-md bg-[#181B1D] border border-[#292D30] flex items-center justify-center text-[#6FA7A3] font-mono text-xs font-semibold group-hover:border-[#6FA7A3]/50 transition-colors">
            NN
          </div>
          <div>
            <div className="font-semibold text-sm tracking-wider text-[#F2F2EF] group-hover:text-white uppercase transition-colors">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-[11px] text-[#9A9FA3] font-mono flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#6FA7A3]"></span>
              AI/ML Engineer
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-links" className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                className={`px-3 py-1.5 text-xs tracking-wide transition-colors rounded-md ${
                  isActive
                    ? 'text-[#F2F2EF] bg-[#181B1D] border border-[#292D30]'
                    : 'text-[#9A9FA3] hover:text-[#F2F2EF] hover:bg-[#141719]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            id="nav-resume-button"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-medium text-[#F2F2EF] bg-[#181B1D] border border-[#292D30] hover:border-[#6FA7A3]/60 hover:text-white transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#6FA7A3]" />
            <span>Résumé</span>
            <ArrowUpRight className="w-3 h-3 text-[#9A9FA3]" />
          </button>
          <a
            id="nav-contact-button"
            href="#contact"
            className="px-3.5 py-1.5 rounded-md text-xs font-medium text-[#0D0F10] bg-[#6FA7A3] hover:bg-[#85bcb8] transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-resume-trigger"
            onClick={onOpenResume}
            className="px-2.5 py-1.5 rounded-md text-xs text-[#F2F2EF] bg-[#181B1D] border border-[#292D30] flex items-center gap-1"
          >
            <FileText className="w-3.5 h-3.5 text-[#6FA7A3]" />
            <span>CV</span>
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-md text-[#9A9FA3] hover:text-[#F2F2EF] bg-[#181B1D] border border-[#292D30]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#141719] border-b border-[#292D30] px-6 py-4 mt-3 space-y-2 animate-fadeIn"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-[#9A9FA3] hover:text-[#F2F2EF] hover:bg-[#181B1D] rounded-md transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-[#292D30] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-[#F2F2EF] bg-[#181B1D] border border-[#292D30] rounded-md"
            >
              <FileText className="w-4 h-4 text-[#6FA7A3]" />
              View Full Résumé
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 text-xs font-medium text-[#0D0F10] bg-[#6FA7A3] rounded-md"
            >
              Contact Nayab
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
