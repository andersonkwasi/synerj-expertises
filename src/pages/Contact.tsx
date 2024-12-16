import React, { useState, FormEvent } from 'react';


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    entreprise: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Logique d'envoi du formulaire à implémenter
    console.log('Formulaire soumis', formData);
    setFormData(
      { 
        nom: '',
        email: '',
        telephone: '',
        entreprise: '',
        message: ''
      }

    )


  };

  return (
    <div className="bg-gradient-to-br from-neoery-blue to-neoery-black text-white">
      {/* Section Titre */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6">Contactez SYNERJ</h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Prêt à transformer vos défis technologiques en opportunités ? Parlons-en.
        </p>
      </section>

      {/* Formulaire de Contact */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulaire */}
          <div className="bg-white/10 p-8 rounded-2xl border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nom" className="block text-sm mb-2 text-white/70">Nom Complet</label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neoery-orange"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-white/70">Email Professionnel</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neoery-orange"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="telephone" className="block text-sm mb-2 text-white/70">Téléphone</label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neoery-orange"
                  />
                </div>
                <div>
                  <label htmlFor="entreprise" className="block text-sm mb-2 text-white/70">Entreprise</label>
                  <input
                    type="text"
                    id="entreprise"
                    name="entreprise"
                    value={formData.entreprise}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neoery-orange"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-white/70">Votre Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neoery-orange"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-neoery-orange px-6 py-3 rounded-lg hover:bg-opacity-90 transition font-semibold"
              >
                Envoyer le Message
              </button>
            </form>
          </div>

          {/* Informations de Contact */}
          <div className="space-y-6">
            <div className="bg-white/10 p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-neoery-green">Coordonnées</h3>
              <div className="space-y-3 text-white/70">                
                <p>📞 +225 01 04 04 04 21/22</p>
                <p>✉️ sales@synerj-expertises.com</p>
              </div>
            </div>

            <div className="bg-white/10 p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-neoery-green">Horaires</h3>
              <div className="text-white/70">
                <p>Lundi - Vendredi : 08h30 - 17h30</p>
                <p>Samedi : Sur rendez-vous</p>
                <p>Dimanche : Fermé</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;