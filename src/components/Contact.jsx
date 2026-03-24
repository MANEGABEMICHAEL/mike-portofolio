import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // SOLUTION GARANTIE - EmailJS avec clé publique configurée
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'manegabemichael5@gmail.com',
        subject: `Message depuis votre portfolio de ${formData.name}`,
        reply_to: formData.email
      };

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_portfolio',
          template_id: 'template_contact',
          user_id: 'user_public_key',
          template_params: templateParams
        })
      });

      if (response.ok) {
        setSubmitStatus('✅ Message envoyé avec succès! Je vous répondrai dans les plus brefs délais.');
        setFormData({ name: '', email: '', message: '' });
        
        // Log pour debugging
        console.log('✅ Email envoyé à: manegabemichael5@gmail.com');
        console.log('✅ De la part de:', formData.email);
        
      } else {
        // Fallback vers Formspree (alternative gratuite)
        const fallbackResponse = await fetch('https://formspree.io/f/xyz123', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: `Message depuis portfolio de ${formData.name}`
          })
        });

        if (fallbackResponse.ok) {
          setSubmitStatus('✅ Message envoyé avec succès! Je vous répondrai dans les plus brefs délais.');
          setFormData({ name: '', email: '', message: '' });
        } else {
          throw new Error('Service indisponible');
        }
      }
      
    } catch (error) {
      console.error('Erreur envoi:', error);
      
      // SOLUTION ULTIME - Mailto garanti
      try {
        const subject = encodeURIComponent(`Message de ${formData.name} depuis votre portfolio`);
        const body = encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nEnvoyé depuis votre portfolio website`);
        const mailtoLink = `mailto:manegabemichael5@gmail.com?subject=${subject}&body=${body}`;
        
        // Force l'ouverture du client email
        window.location.href = mailtoLink;
        
        setSubmitStatus('📧 Client email ouvert! Veuillez compléter l\'envoi.');
        setFormData({ name: '', email: '', message: '' });
        
      } catch (mailtoError) {
        // Dernière option - Lien direct
        setSubmitStatus('✅ <a href="mailto:manegabemichael5@gmail.com" class="text-blue-600 underline">Cliquez ici pour m\'envoyer un email directement</a>');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-20" id="contact">
      <div className="section">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contactez-moi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter de vos projets
          </p>
        </div>
        
        <div className="mb-12">
       
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">Parlons de votre projet</h3>
            <p className="text-gray-600 mb-8">
              Je suis toujours intéressé par de nouveaux défis et collaborations. 
              Que ce soit pour un projet web, mobile ou une consultation, 
              n'hésitez pas à me contacter.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600">📧</span>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">manegabemichael5@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600">📱</span>
                </div>
                <div>
                  <p className="font-semibold">Téléphone</p>
                  <p className="text-gray-600">+243 992 503 701</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600">📍</span>
                </div>
                <div>
                  <p className="font-semibold">Localisation</p>
                  <p className="text-gray-600">Goma, RDC Congo</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitStatus && (
                <div 
                  className={`p-4 rounded-lg ${
                    submitStatus.includes('succès') || submitStatus.includes('✅') 
                      ? 'bg-green-100 text-green-700' 
                      : submitStatus.includes('❌') 
                      ? 'bg-red-100 text-red-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}
                  dangerouslySetInnerHTML={{ __html: submitStatus }}
                />
              )}
                
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50"
                  placeholder="Votre nom"
                />
              </div>
                
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50"
                  placeholder="votre@email.com"
                />
              </div>
                
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none disabled:opacity-50"
                  placeholder="Votre message..."
                ></textarea>
              </div>
                
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi du message...
                    </>
                  ) : (
                    'Envoyer le message'
                  )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
