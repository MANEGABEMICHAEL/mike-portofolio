const Timeline = () => {
  const experiences = [
    {
      title: "Développeur Full Stack & Formateur",
      company: "Freelance & Consulting",
      period: "2022 - Présent",
      description: "Développement d'applications web complètes, formation technique, traduction professionnelle et gestion de projets multimédias. Services de support client remote et création de contenu."
    },
    {
      title: "Développeur Frontend & Community Manager",
      company: "Digital Agency",
      period: "2020 - 2022",
      description: "Création d'interfaces utilisateur modernes, gestion de communauté, montage vidéo et stratégie de contenu. Support client multilingue anglais-français."
    },
    {
      title: "Interprète & Support Technique",
      company: "Services Multilingues",
      period: "2019 - 2020",
      description: "Traduction et interprétation anglais-français, support client remote, formation technique et début dans le développement web."
    },
    {
      title: "Créateur de Contenu & Formateur",
      company: "Éducation & Communication",
      period: "2018 - 2019",
      description: "Création de contenu éducatif, montage vidéo, formation en ligne et gestion des réseaux sociaux. Développement des compétences en communication."
    },
    {
      year: "2017 - 2018",
      title: "Stage Développement Web",
      company: "Web Solutions",
      description: "Découverte du développement web professionnel"
    }
  ];

  return (
    <section className="bg-gray-50 py-20" id="timeline">
      <div className="section">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Parcours & Expériences</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une évolution multidisciplinaire : développement, traduction, formation et communication
          </p>
        </div>
        
        <div className="mb-12">
         
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-600"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <span className="text-blue-600 font-semibold">{exp.year}</span>
                    <h3 className="text-xl font-bold mt-2">{exp.title}</h3>
                    <p className="text-gray-600 font-medium">{exp.company}</p>
                    <p className="text-gray-500 mt-2">{exp.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
