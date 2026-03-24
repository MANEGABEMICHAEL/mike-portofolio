
const Header = () => {

  return (
    <header className >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-3xl font-bold">Mike</a>
        <nav className={`"block" lg:flex lg:items-center`}>
          <ul className="lg:flex lg:space-x-4">
            <li><a href="#home" className="hover:text-theme">Acceuil</a></li>
            <li><a href="#portfolio" className="hover:text-theme">Portfolio</a></li>
            <li><a href="#skills" className="hover:text-theme">Competence</a></li>
            <li><a href="#timeline" className="hover:text-theme">Blog</a></li>
            <li><a href="#contact" className="hover:text-theme">Contact</a></li>
          </ul>
        </nav>
        <button
          className="block"
          onClick={()=>{}}
        >
          <span className="block w-8 h-0.5 bg-black mb-1"></span>
          <span className="block w-8 h-0.5 bg-black mb-1"></span>
          <span className="block w-8 h-0.5 bg-black"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
