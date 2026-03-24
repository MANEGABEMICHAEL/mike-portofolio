import React, { useState } from 'react'
import BlogDetail from './BlogDetail'

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [showAllPosts, setShowAllPosts] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const posts = [
    {
      id: 1,
      title: "Les meilleures pratiques React en 2024",
      excerpt: "Découvrez les dernières tendances et meilleures pratiques pour développer des applications React modernes et performantes.",
      date: "15 Mars 2024",
      readTime: "5 min",
      category: "React",
      image: "/images/react-svgrepo-com.svg",
      content: "React continue d'évoluer avec de nouvelles fonctionnalités comme les Server Components et les Suspense boundaries. Cet article explore comment tirer le meilleur parti de ces innovations."
    },
    {
      id: 2,
      title: "Optimisation des performances web",
      excerpt: "Guide complet pour améliorer la vitesse de chargement et l'expérience utilisateur de vos applications web.",
      date: "10 Mars 2024",
      readTime: "8 min",
      category: "Performance",
      image: "/images/performance-blog.jpg",
      content: "L'optimisation des performances est cruciale pour le succès de toute application web. Découvrez les techniques avancées de lazy loading, code splitting et caching."
    },
    {
      id: 3,
      title: "TypeScript vs JavaScript : Le choix",
      excerpt: "Analyse comparative pour vous aider à choisir entre TypeScript et JavaScript pour vos prochains projets.",
      date: "5 Mars 2024",
      readTime: "6 min",
      category: "TypeScript",
      image: "/images/typescript-logo.png",
      content: "TypeScript apporte la sécurité des types à JavaScript, mais quand choisir l'un ou l'autre ? Analyse détaillée des avantages et inconvénients. TypeScript offre une meilleure expérience de développement avec l'autocomplétion, la détection d'erreurs à la compilation et une meilleure documentation du code."
    },
    {
      id: 4,
      title: "Architecture microservices avec Node.js",
      excerpt: "Comment concevoir et implémenter une architecture microservices robuste avec Node.js et Express.",
      date: "28 Février 2024",
      readTime: "10 min",
      category: "Node.js",
      image: "/images/node-js-svgrepo-com.svg",
      content: "Les microservices transforment la façon dont nous construisons les applications. Guide pratique pour implémenter cette architecture avec Node.js."
    },
    {
      id: 5,
      title: "CSS Grid vs Flexbox : Quand utiliser quoi?",
      excerpt: "Guide pratique pour choisir entre CSS Grid et Flexbox selon vos besoins de mise en page.",
      date: "20 Février 2024",
      readTime: "4 min",
      category: "CSS",
      image: "/images/css-logo.png",
      content: "CSS Grid et Flexbox sont deux outils puissants pour la mise en page. Comprendre leurs forces respectives pour faire le bon choix. CSS Grid est idéal pour les mises en page bidimensionnelles complexes, tandis que Flexbox excelle dans l'alignement unidimensionnel et la distribution d'espace."
    },
    {
      id: 6,
      title: "Sécurité des applications web modernes",
      excerpt: "Les menaces les plus courantes et comment protéger vos applications contre les attaques.",
      date: "15 Février 2024",
      readTime: "12 min",
      category: "Sécurité",
      image: "/images/security-shield.png",
      content: "La sécurité web est plus importante que jamais. Découvrez les dernières menaces et comment protéger vos applications."
    },
    {
      id: 7,
      title: "Introduction à Vue.js 3",
      excerpt: "Découvrez les nouveautés de Vue.js 3 et comment commencer à développer avec ce framework moderne.",
      date: "10 Février 2024",
      readTime: "7 min",
      category: "Vue.js",
      image: "https://picsum.photos/seed/vuejs-introduction-tutorial/400/300.jpg",
      content: "Vue.js 3 apporte des améliorations significatives en termes de performance et de flexibilité. Cet article vous guide à travers les concepts fondamentaux."
    },
    {
      id: 8,
      title: "Python pour le développement web",
      excerpt: "Explorez les frameworks Python populaires comme Django et Flask pour créer des applications web robustes.",
      date: "5 Février 2024",
      readTime: "9 min",
      category: "Python",
      image: "https://picsum.photos/seed/python-django-flask-web/400/300.jpg",
      content: "Python offre des solutions puissantes pour le développement web. Découvrez Django et Flask, deux frameworks aux approches différentes."
    },
    {
      id: 9,
      title: "Database Design Best Practices",
      excerpt: "Principes fondamentaux pour concevoir des bases de données efficaces et évolutives.",
      date: "1 Février 2024",
      readTime: "11 min",
      category: "Database",
      image: "https://picsum.photos/seed/database-design-schema-sql/400/300.jpg",
      content: "Une bonne conception de base de données est essentielle pour la performance et la maintenabilité de votre application."
    },
    {
      id: 10,
      title: "Mobile Development avec React Native",
      excerpt: "Créez des applications mobiles natives avec JavaScript et React.",
      date: "28 Janvier 2024",
      readTime: "8 min",
      category: "Mobile",
      image: "https://picsum.photos/seed/react-native-mobile-development/400/300.jpg",
      content: "React Native permet de développer des applications mobiles pour iOS et Android avec une seule base de code."
    },
    {
      id: 11,
      title: "Cloud Computing avec AWS",
      excerpt: "Introduction aux services cloud Amazon Web Services pour déployer vos applications.",
      date: "25 Janvier 2024",
      readTime: "10 min",
      category: "Cloud",
      image: "https://picsum.photos/seed/aws-cloud-computing-services/400/300.jpg",
      content: "AWS offre une gamme complète de services cloud. Découvrez les bases pour déployer et scaler vos applications."
    },
    {
      id: 12,
      title: "Testing Strategies for Modern Apps",
      excerpt: "Approches complètes pour tester vos applications web et garantir la qualité du code.",
      date: "22 Janvier 2024",
      readTime: "9 min",
      category: "Testing",
      image: "https://picsum.photos/seed/software-testing-automation/400/300.jpg",
      content: "Le testing est crucial pour la qualité des applications. Explorez les différentes stratégies de testing moderne."
    },
    {
      id: 13,
      title: "UX/UI Design Principles",
      excerpt: "Principes fondamentaux de design pour créer des interfaces utilisateur intuitives et esthétiques.",
      date: "20 Janvier 2024",
      readTime: "6 min",
      category: "Design",
      image: "https://picsum.photos/seed/ux-ui-design-principles/400/300.jpg",
      content: "Un bon design UX/UI est essentiel pour le succès d'une application. Découvrez les principes fondamentaux."
    },
    {
      id: 14,
      title: "DevOps et CI/CD Pipeline",
      excerpt: "Automatisation du déploiement et de l'intégration continue pour les applications modernes.",
      date: "18 Janvier 2024",
      readTime: "12 min",
      category: "DevOps",
      image: "https://picsum.photos/seed/devops-cicd-pipeline-automation/400/300.jpg",
      content: "DevOps transforme la façon dont nous développons et déployons les applications. Apprenez à mettre en place des pipelines CI/CD."
    },
    {
      id: 15,
      title: "Machine Learning pour développeurs",
      excerpt: "Introduction aux concepts de machine learning et comment les intégrer dans vos applications.",
      date: "15 Janvier 2024",
      readTime: "13 min",
      category: "AI/ML",
      image: "https://picsum.photos/seed/machine-learning-ai-development/400/300.jpg",
      content: "Le machine learning devient accessible aux développeurs. Découvrez les bases et comment intégrer l'IA dans vos projets."
    }
  ];

  const categories = ["Tous", "React", "Node.js", "TypeScript", "CSS", "Performance", "Sécurité", "Vue.js", "Python", "Database", "Mobile", "Cloud", "Testing", "Design", "DevOps", "AI/ML"];

  const filteredPosts = selectedCategory === "Tous" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleViewAll = () => {
    setShowAllPosts(true);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToPreview = () => {
    setShowAllPosts(false);
    setCurrentPage(1);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = showAllPosts 
    ? filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
    : filteredPosts.slice(0, 6); 

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

return (
  <>
    <section className="bg-gray-50 py-20" id="blog">
      <div className="section">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            {showAllPosts ? "Tous les Articles" : "Blog & Articles"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            {showAllPosts 
              ? `${filteredPosts.length} articles trouvés - Page ${currentPage} sur ${totalPages}`
              : "Partage de connaissances et expériences sur le développement web"
            }
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-full border transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow card-hover cursor-pointer"
              onClick={() => handlePostClick(post)}
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                {post.image.endsWith('.svg') ? (
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://picsum.photos/seed/${post.title.replace(/\s+/g, '')}/400/300.jpg`;
                    }}
                  />
                ) : (
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://picsum.photos/seed/${post.title.replace(/\s+/g, '')}/400/300.jpg`;
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <time>{post.date}</time>
                  <span className="mx-2">•</span>
                  <span>{post.readTime} de lecture</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <button 
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center group"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePostClick(post);
                  }}
                >
                  Lire la suite
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {showAllPosts && totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              ← Précédent
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Suivant →
            </button>
          </div>
        )}

        {/* Bouton principal */}
        <div className="text-center mt-12">
          {!showAllPosts ? (
            <button 
              onClick={handleViewAll}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Voir tous les articles ({filteredPosts.length})
            </button>
          ) : (
            <button 
              onClick={handleBackToPreview}
              className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              ← Retour à la vue simplifiée
            </button>
          )}
        </div>
      </div>
    </section>

    {selectedPost && (
      <BlogDetail 
        post={selectedPost} 
        onClose={() => setSelectedPost(null)} 
      />
    )}
  </>
);
};

export default Blog;