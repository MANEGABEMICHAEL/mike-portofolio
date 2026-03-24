const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 pt-24 lg:pt-32 min-h-screen flex items-center relative z-10" id="home">
      <div className="section">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="text-blue-600 text-lg font-semibold mb-4 animate-pulse">Bonjour, je suis</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Manegabe Michael
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              Développeur Full Stack & Polyvalent
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Expert multidisciplinaire : Développement web, traduction anglais-français, 
              formation, communication et création de contenu. Je transforme vos idées en solutions complètes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a href="#portfolio" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Voir mes projets
              </a>
              <a href="#contact" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Me contacter
              </a>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-gray-600">Ans d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">30+</div>
                <div className="text-gray-600">Clients satisfaits</div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start space-x-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">React</span>
              <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium">Node.js</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">TypeScript</span>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-3xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-gray-100 to-blue-600 rounded-full p-8 max-w-md mx-auto">
                <img 
                  src="/images/mike2.jpg" 
                  alt="Manegabe Michael" 
                  className="w-full rounded-full shadow-2xl object-cover"
                  onError={(e) => {
                    e.target.src = "https://picsum.photos/seed/profile-michael/400/400.jpg";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero