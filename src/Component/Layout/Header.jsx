import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/optimized/LOGO-T.png';

const MenuIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { html.style.overflow = ''; };
  }, [isMenuOpen]);

  const menuItems = [
    { name: 'Courses', path: '/courses' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full bg-black z-50 transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'py-3'}`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 xl:px-24">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="Tammi Tech"
              className="w-20 h-auto"
              width="80"
              height="32"
              loading="eager"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white hover:text-white/80 text-sm font-bold transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/apply"
              className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-white/90 transition-colors"
            >
              Apply Now
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden p-1 text-white"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isMenuOpen}
        onClick={toggleMenu}
      >
        <div
          className={`bg-black w-4/5 max-w-sm h-full shadow-lg p-6 transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <Link to="/" onClick={toggleMenu}>
              <img
                src={logo}
                alt="Tammi Tech"
                className="w-20 h-auto"
                width="80"
                height="32"
                loading="eager"
              />
            </Link>
            <button
              onClick={toggleMenu}
              className="p-1 text-white"
              aria-label="Close menu"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white hover:text-white/80 font-bold py-1 transition-colors duration-300"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/apply"
              className="bg-white text-black px-4 py-2 rounded-full font-bold hover:bg-white/90 transition-colors text-center mt-4"
              onClick={toggleMenu}
            >
              Apply Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}