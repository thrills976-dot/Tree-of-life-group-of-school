import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [imgError, setImgError] = useState(false);

  return (
    <footer className="bg-nature-green-dark text-warm-cream pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-nature-green-dark overflow-hidden border-2 border-accent-gold shadow-md">
                {!imgError ? (
                  <img 
                    src="/logo.png" 
                    alt="School Logo" 
                    className="w-full h-full object-contain p-1 bg-white"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <span className="font-serif font-bold text-2xl text-nature-green-dark">T</span>
                )}
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-tight text-white">
                  Tree of Life
                </span>
                <span className="text-xs font-medium tracking-wider uppercase text-accent-gold">
                  Group of Schools
                </span>
              </div>
            </div>
            <p className="text-warm-cream/80 text-sm leading-relaxed">
              Growing strong roots for a bright future. Nurturing confident, curious, and capable learners in Zimbabwe.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-gold hover:text-nature-green-dark transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-gold hover:text-nature-green-dark transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-gold hover:text-nature-green-dark transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {["About", "Academics", "Admissions", "School Life", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`/#${item.toLowerCase().replace(" ", "-")}`} className="text-warm-cream/80 hover:text-accent-gold transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-white">Our Programs</h4>
            <ul className="space-y-3">
              <li>
                <a href="/#academics" className="text-warm-cream/80 hover:text-accent-gold transition-colors text-sm">
                  Early Childhood Development
                </a>
              </li>
              <li>
                <a href="/#academics" className="text-warm-cream/80 hover:text-accent-gold transition-colors text-sm">
                  Infant School
                </a>
              </li>
              <li>
                <a href="/#academics" className="text-warm-cream/80 hover:text-accent-gold transition-colors text-sm">
                  Junior School
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-warm-cream/80">
                <MapPin size={18} className="text-accent-gold shrink-0 mt-0.5" />
                <span>2802 Amalinda Drive, Harare, Zimbabwe, 0000</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-warm-cream/80">
                <Phone size={18} className="text-accent-gold shrink-0" />
                <span>077 847 6519</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-warm-cream/80">
                <Mail size={18} className="text-accent-gold shrink-0" />
                <span>admissions@treeoflife.ac.zw</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-warm-cream/60">
            &copy; {new Date().getFullYear()} Tree of Life Group of Schools. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-warm-cream/60">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
