import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Smooth scroll pour tous les liens d'ancrage
    const handleSmoothScroll = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          // Fermer le menu mobile si ouvert
          setIsOpen(false);
        }
      }
    };

    // Ajouter les écouteurs d'événements
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Nettoyer les écouteurs
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  const handleMobileMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-3xl font-bold text-blue-600">Mike</a>
        <nav className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="lg:flex lg:space-x-6 space-y-2 lg:space-y-0">
            <li><a href="#home" className="block hover:text-blue-600 transition-colors">Accueil</a></li>
            <li><a href="#portfolio" className="block hover:text-blue-600 transition-colors">Portfolio</a></li>
            <li><a href="#skills" className="block hover:text-blue-600 transition-colors">Compétences</a></li>
            <li><a href="#timeline" className="block hover:text-blue-600 transition-colors">Parcours</a></li>
            <li><a href="#blog" className="block hover:text-blue-600 transition-colors">Blog</a></li>
            <li><a href="#contact" className="block hover:text-blue-600 transition-colors">Contact</a></li>
          </ul>
        </nav>
        <button
          className="lg:hidden"
          onClick={handleMobileMenuClick}
        >
          <span className={`block w-8 h-0.5 bg-black mb-1 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-black mb-1 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-black transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
