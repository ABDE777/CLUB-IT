import React, { useState, useEffect } from 'react';
import { CustomButton } from './ui/CustomButton';
import { cn } from '@/lib/utils';
import { MenuIcon, X } from 'lucide-react';

interface NavBarProps {
  onJoinClick: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onJoinClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Identify which section is currently in view
      const sections = ['home', 'members', 'sponsors', 'announcements'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Équipe', href: '#members' },
    { name: 'Encadrants', href: '#sponsors' },
    { name: 'Événements', href: '#announcements' },
  ];

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/it_club_isfo/', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled ? "bg-white/80 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" : "bg-transparent dark:bg-gray-900/50",
        "dark md:dark:bg-transparent" // Force dark mode on mobile, transparent on desktop
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="flex items-center space-x-2">
          <span className="text-xl font-display font-bold text-foreground">IT Club</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
              className={cn(
                "text-sm font-medium transition-colors relative",
                activeSection === link.href.replace('#', '') 
                  ? "text-primary font-semibold" 
                  : "text-foreground/80 hover:text-primary",
                "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <CustomButton variant="outline" size="sm" onClick={onJoinClick}>
            Rejoindre
          </CustomButton>
          <CustomButton size="sm" onClick={handleInstagramClick}>
            Contactez-nous
          </CustomButton>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      <div 
        className={cn(
          "fixed inset-0 bg-black/95 backdrop-blur-lg z-40 pt-20 transition-transform duration-300 md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
       
        <button 
          className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-gray-800/50"
          onClick={closeMobileMenu}
        >
          <X size={24} />
        </button>
        
        <nav className="container mx-auto px-4 flex flex-col space-y-6 py-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
              className={cn(
                "text-lg font-medium py-2 border-b border-gray-800",
                activeSection === link.href.replace('#', '') 
                  ? "text-primary font-semibold" 
                  : "text-white/80 hover:text-primary",
                "transition-colors"
              )}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col space-y-4 pt-4">
            <CustomButton variant="outline" onClick={onJoinClick}>
              Rejoindre
            </CustomButton>
            <CustomButton onClick={handleInstagramClick}>
              Contactez-nous
            </CustomButton>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
