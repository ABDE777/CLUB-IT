
import React from 'react';
import { Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, href: "#", label: "GitHub" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="py-16 px-4 bg-background text-foreground border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-display font-bold text-primary">CLUB IT ISFO</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Notre club informatique est dédié à l'apprentissage et au développement 
              de compétences techniques. Rejoignez-nous pour explorer le monde de la technologie.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary text-foreground/70 hover:text-primary hover:bg-secondary/80 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="hidden md:block" /> {/* Spacer */}
          
          <div>
            <h3 className="text-base font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Accueil</a></li>
              <li><a href="#members" className="text-muted-foreground hover:text-primary transition-colors">Équipe</a></li>
              <li><a href="#sponsors" className="text-muted-foreground hover:text-primary transition-colors">Partenaires</a></li>
              <li><a href="#announcements" className="text-muted-foreground hover:text-primary transition-colors">Événements</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} className="text-primary" /> <span>contact@clubit.isfo</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} className="text-primary" /> <span>+212 6-31-88-34-12</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} className="text-primary" /> <span>Casablanca, Maroc</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {currentYear} CLUB IT ISFO. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Conditions d'utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
