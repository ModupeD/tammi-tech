import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/optimized/LOGO-T.png';
import { Github, Linkedin, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 xl:px-24">
        {/* Logo and Navigation */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="Tammi Tech" className="h-20 w-auto" />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-6 lg:gap-12">
              <li>
                <Link to="/courses" className="font-medium hover:text-white/80 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-medium hover:text-white/80 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/apply" className="font-medium hover:text-white/80 transition-colors">
                  Apply
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-medium hover:text-white/80 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://calendly.com/codewithmomo/code-with-momo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-white/90 transition-all duration-300"
            >
              Schedule a Call
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/20" />

        {/* Copyright */}
        <div className="text-center text-sm text-white/80">
          <p>© {new Date().getFullYear()} Tammi Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;