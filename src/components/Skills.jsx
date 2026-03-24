const Skills = () => {
  const skills = [
    // Top compétences principales
    { name: "React", icon: "⚛️", level: "Intermediaire" },
    { name: "JavaScript", icon: "🟨", level: "Avancé" },
    { name: "Node.js", icon: "🟢", level: "Avancé" },
    { name: "Python", icon: "🐍", level: "Intermédiaire" },
    
    // Langues
    { name: "Français", icon: "🇫🇷", level: "Courant" },
    { name: "Anglais", icon: "🇬🇧", level: "Courant" },
    
    // Services
    { name: "Traduction", icon: "🔄", level: "Expert" },
    { name: "Formation", icon: "📚", level: "Avancé" },
    { name: "Support Client", icon: "🎧", level: "Expert" },
    { name: "Montage Vidéo", icon: "🎬", level: "Avancé" },
    { name: "Community Management", icon: "📱", level: "Avancé" },
    { name: "Création Contenu", icon: "✍️", level: "Avancé" }
  ];

  return (
    <section className="bg-white py-20" id="skills">
      <div className="section">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Mes Compétences</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Développement, traduction, formation, communication et création de contenu
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{skill.name}</h3>
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                skill.level === 'Expert' ? 'bg-green-100 text-green-700' :
                skill.level === 'Avancé' ? 'bg-blue-100 text-blue-700' :
                skill.level === 'Natif' ? 'bg-purple-100 text-purple-700' :
                skill.level === 'Courant' ? 'bg-indigo-100 text-indigo-700' :
                'bg-gray-100 text-gray-700'
              }`}>
                {skill.level}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 text-gray-600">
            <span className="text-2xl">⚛️</span>
            <span>+</span>
            <span className="text-2xl">🔄</span>
            <span>+</span>
            <span className="text-2xl">📚</span>
            <span>+</span>
            <span className="text-2xl">🎬</span>
            <span>=</span>
            <span className="font-bold text-blue-600">Profil Complet</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
