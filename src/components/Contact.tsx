import React, { useState } from 'react'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Send, 
  User, 
  MessageCircle,
  Clock,
  Heart,
  HandHeart,
  Users,
  Check
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    alert('Votre message a été envoyé avec succès!')
  }


const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
}

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Siège Social',
      details: ['Kaya, Région du Centre-Nord', 'Burkina Faso'],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['Président: 70 49 9814', 'Secrétaire Générale: 67 84 66 83'],
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Facebook,
      title: 'Réseaux Sociaux',
      details: ['Facebook: ADN/CN', 'Suivez nos actualités'],
      color: 'bg-purple-100 text-purple-600'
    }
  ]

  const membershipTypes = [
    {
      icon: Heart,
      title: 'Membre d\'Honneur',
      description: 'Reconnaissance pour services signalés',
      benefits: ['Dispensé de cotisations', 'Participation aux assemblées', 'Reconnaissance publique']
    },
    {
      icon: HandHeart,
      title: 'Membre Bienfaiteur',
      description: 'Soutien par des dons ponctuels',
      benefits: ['Dons épisodiques', 'Reçus fiscaux', 'Rapports d\'activités']
    },
    {
      icon: Users,
      title: 'Membre Actif',
      description: 'Participation active avec cotisation annuelle',
      benefits: ['Carte d\'adhérent', 'Droit de vote', 'Participation aux projets']
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contactez-nous & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Rejoignez-nous</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prêt à faire partie du changement ? Contactez-nous pour en savoir plus 
            sur nos actions ou pour devenir membre de notre association.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h3>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Votre nom complet"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Votre numéro de téléphone"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="membership">Adhésion</option>
                    <option value="volunteer">Bénévolat</option>
                    <option value="partnership">Partenariat</option>
                    <option value="donation">Don</option>
                    <option value="information">Information générale</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-3 text-gray-400" size={20} />
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Décrivez votre demande ou votre message..."
                  />
                </div>
              </div>

              <button onClick={handleSubmit} className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium">
                <Send size={20} />
                Envoyer le message
              </button>
            </div>
          </div>

          {/* Contact Information & Membership */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations de Contact</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${info.color}`}>
                      <info.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Suivez-nous</h4>
                <a
                  href="https://www.facebook.com/profile.php?id=61550456772849"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Facebook size={20} />
                  <span>Page Facebook ADN/CN</span>
                </a>
              </div>
            </div>

            {/* Membership Types */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Types d'Adhésion</h3>
              <div className="space-y-6">
                {membershipTypes.map((type, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <type.icon className="text-blue-600" size={20} />
                      </div>
                      <h4 className="font-semibold text-gray-900">{type.title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{type.description}</p>
                    <ul className="space-y-1">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <Check size={16} className="text-green-500 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Prêt à nous rejoindre ?</h3>
              <p className="text-blue-100 mb-6">
                Rejoignez notre mission pour un développement durable et équitable 
                au Centre-Nord du Burkina Faso.
              </p>
              <div className="flex items-center space-x-2 text-blue-100">
                <Clock size={20} />
                <span>Réponse sous 48h garantie</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact