import { useState } from 'react';

const BlogDetail = ({ post, onClose }) => {
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    { id: 1, author: "Jean Dupont", text: "Excellent article, très instructif !", date: "16 Mars 2024" },
    { id: 2, author: "Marie Curie", text: "Merci pour ces explications claires.", date: "17 Mars 2024" }
  ]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment = {
        id: comments.length + 1,
        author: "Visiteur",
        text: comment,
        date: new Date().toLocaleDateString('fr-FR')
      };
      setComments([newComment, ...comments]);
      setComment('');
    }
  };

  const relatedPosts = [
    { id: 2, title: "Optimisation des performances web", category: "Performance" },
    { id: 3, title: "TypeScript vs JavaScript : Le choix", category: "TypeScript" },
    { id: 4, title: "Architecture microservices avec Node.js", category: "Node.js" }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl">
          <div className="p-6 lg:p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <h1 className="text-3xl lg:text-4xl font-bold mt-4 mb-4">{post.title}</h1>
                <div className="flex items-center text-gray-600 text-sm">
                  <time>{post.date}</time>
                  <span className="mx-2">•</span>
                  <span>{post.readTime} de lecture</span>
                  <span className="mx-2">•</span>
                  <span>Par Michael Manegabe</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="h-64 rounded-lg mb-8 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              {post.image.endsWith('.svg') ? (
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-32 h-32 object-contain"
                  onError={(e) => {
                    e.target.src = `https://picsum.photos/seed/${post.title.replace(/\s+/g, '')}/800/400.jpg`;
                  }}
                />
              ) : (
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://picsum.photos/seed/${post.title.replace(/\s+/g, '')}/800/400.jpg`;
                  }}
                />
              )}
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              <h2 className="text-2xl font-bold mb-4">Points clés</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="text-gray-700">Compréhension approfondie des concepts fondamentaux</li>
                <li className="text-gray-700">Meilleures pratiques et recommandations actuelles</li>
                <li className="text-gray-700">Exemples pratiques et cas d'usage concrets</li>
                <li className="text-gray-700">Optimisation des performances et bonnes pratiques</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Exemple de code</h2>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
                <pre><code>{`// Exemple d'implémentation
function exampleFunction() {
  const data = fetchData();
  return processData(data);
}

const result = exampleFunction();
console.log(result);`}</code></pre>
              </div>

              <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Cet article vous a présenté les aspects essentiels de {post.category.toLowerCase()}. 
                En appliquant ces principes, vous pourrez développer des applications plus robustes 
                et performantes. N'hésitez pas à expérimenter et à adapter ces concepts à vos projets spécifiques.
              </p>
            </div>

            <div className="border-t pt-8 mt-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Partager cet article</h3>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => {
                      const url = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
                      window.open(url, '_blank', 'width=600,height=400');
                    }}
                    className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    title="Partager sur Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button 
                    onClick={() => {
                      const text = `Article intéressant: ${post.title}`;
                      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${window.location.href}`;
                      window.open(url, '_blank', 'width=600,height=400');
                    }}
                    className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
                    title="Partager sur Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                  <button 
                    onClick={() => {
                      const url = `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`;
                      window.open(url, '_blank', 'width=600,height=400');
                    }}
                    className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
                    title="Partager sur LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mb-8">
                <button
                  onClick={() => setShowComments(!showComments)}
                  className="flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  <span>Commentaires ({comments.length})</span>
                  <svg className={`w-4 h-4 transform transition-transform ${showComments ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showComments && (
                  <div className="mt-4 space-y-4">
                    <form onSubmit={handleSubmit} className="mt-4">
                      <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Ajoutez votre commentaire..."
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        rows={3}
                      />
                      <button
                        type="submit"
                        className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Commenter
                      </button>
                    </form>

                    {comments.map((comment) => (
                      <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold">{comment.author}</h4>
                          <span className="text-sm text-gray-500">{comment.date}</span>
                        </div>
                        <p className="text-gray-700">{comment.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Articles similaires</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {relatedPosts.map((relatedPost) => (
                    <div key={relatedPost.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                      <span className="text-xs text-blue-600 font-medium">{relatedPost.category}</span>
                      <h4 className="font-semibold mt-2">{relatedPost.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
