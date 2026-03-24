const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Application web complète avec panier, paiement et gestion des stocks",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://picsum.photos/seed/ecommerce-shopping-cart/400/300.jpg",
      category: "ecommerce"
    },
    {
      title: "Mobile Banking App",
      description: "Application bancaire mobile avec authentification sécurisée et support client multilingue",
      tech: ["React Native", "Firebase", "Redux"],
      image: "https://picsum.photos/seed/mobile-banking-finance/400/300.jpg",
      category: "banking"
    },
    {
      title: "Dashboard Analytics",
      description: "Tableau de bord interactif pour l'analyse de données avec visualisations complexes",
      tech: ["Vue.js", "D3.js", "Python"],
      image: "https://picsum.photos/seed/dashboard-analytics-charts/400/300.jpg",
      category: "analytics"
    },
    {
      title: "Social Media Platform",
      description: "Réseau social avec messagerie instantanée, gestion de communauté et création de contenu",
      tech: ["React", "GraphQL", "PostgreSQL"],
      image: "https://picsum.photos/seed/social-media-networking/400/300.jpg",
      category: "social"
    },
    {
      title: "Task Management Tool",
      description: "Application de gestion de tâches collaborative avec kanban et formation intégrée",
      tech: ["Next.js", "TypeScript", "Prisma"],
      image: "https://picsum.photos/seed/task-management-kanban/400/300.jpg",
      category: "productivity"
    },
    {
      title: "Video Streaming Service",
      description: "Plateforme de streaming vidéo avec montage, contenu éducatif et support multilingue",
      tech: ["React", "AWS", "Machine Learning"],
      image: "https://picsum.photos/seed/video-streaming-entertainment/400/300.jpg",
      category: "streaming"
    },
    {
      title: "Platform de Traduction",
      description: "Service de traduction anglais-français avec interprétation en temps réel",
      tech: ["Node.js", "AI/ML", "WebSocket"],
      image: "https://picsum.photos/seed/translation-platform-language/400/300.jpg",
      category: "translation"
    },
    {
      title: "Formation en Ligne",
      description: "Plateforme e-learning avec cours vidéo, quiz et suivi pédagogique",
      tech: ["React", "Video.js", "MongoDB"],
      image: "https://picsum.photos/seed/online-education-learning-platform/400/300.jpg",
      category: "education"
    },
    {
      title: "Support Client Remote",
      description: "Système de support client avec chat, ticketing et base de connaissances",
      tech: ["Vue.js", "Socket.io", "PostgreSQL"],
      image: "https://picsum.photos/seed/customer-support-service-remote/400/300.jpg",
      category: "support"
    }
  ];

  return (
    <section className="bg-gray-50 py-20" id="portfolio">
      <div className="section">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Projets & Réalisations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Applications web, plateformes de formation, services de traduction et solutions de communication
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`Projet: ${project.title}\n\nTechnologies: ${project.tech.join(', ')}\n\nDescription: ${project.description}\n\nCeci est une démo. En production, ce bouton pourrait ouvrir une page détaillée du projet.`);
                  }}
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center group"
                >
                  Voir le projet
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
