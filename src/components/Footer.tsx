import {
  ArrowUp,
  Facebook,
  Globe,
  Heart,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Target,
  Users
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const quickLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Nos actions', href: '#actions' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    { name: 'Développement rural', icon: Leaf },
    { name: 'Formation communautaire', icon: Users },
    { name: 'Microfinance', icon: Target },
    { name: 'Santé communautaire', icon: Heart }
  ]

  const contactInfo = [
    {
      icon: MapPin,
      text: 'Kaya, Région du Centre-Nord, Burkina Faso'
    },
    {
      icon: Phone,
      text: 'Président: +226 70 49 98 14'
    },
    {
      icon: Phone,
      text: 'Secrétaire: +226 67 84 66 83'
    },
    {
      icon: Mail,
      text: 'associationnamalgbzanga@gmail.com'
    }
  ]

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://www.facebook.com/profile.php?id=61550456772849',
      color: 'hover:text-blue-600'
    }
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-green-500"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* About Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">ADN/CN</h3>
                  <p className="text-gray-400 text-sm">Association pour le Développement du Nord/Centre-Nord</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Nous œuvrons pour un développement durable et équitable dans la région du Centre-Nord 
                du Burkina Faso. Notre mission est d'accompagner les communautés locales vers l'autonomie 
                et la prospérité à travers des projets concrets et durables.
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-white mb-3">Nos domaines d'action</h4>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-2 text-gray-300">
                      <service.icon size={16} className="text-blue-400" />
                      <span className="text-sm">{service.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Liens rapides</h4>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-gray-300 hover:text-white transition-colors duration-200 hover:pl-2"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="mt-8">
                <h5 className="font-semibold mb-4">Rejoignez-nous</h5>
                <div className="space-y-2">
                  <a 
                    href="#contact" 
                    className="block text-sm text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    Devenir membre
                  </a>
                  <a 
                    href="#contact" 
                    className="block text-sm text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    Faire un don
                  </a>
                  <a 
                    href="#contact" 
                    className="block text-sm text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    Bénévolat
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <info.icon size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{info.text}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h5 className="font-semibold mb-4">Suivez-nous</h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-gray-700 ${social.color}`}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="mt-8 p-4 bg-gray-800 rounded-lg">
                <h5 className="font-semibold mb-2">Restez informé</h5>
                <p className="text-gray-400 text-sm mb-3">
                  Recevez nos actualités et mises à jour
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-l-lg text-sm border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors">
                    <Mail size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
                <p className="text-gray-400 text-sm">
                  © {currentYear} Association pour le Développement du Nord/Centre-Nord. Tous droits réservés.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <a href="#" className="hover:text-white transition-colors">
                    Mentions légales
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    Politique de confidentialité
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Globe size={16} />
                  <span>Burkina Faso</span>
                </div>
                <button
                  onClick={scrollToTop}
                  className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors group"
                  aria-label="Retour en haut"
                >
                  <ArrowUp size={18} className="group-hover:transform group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-10 transform translate-x-8 translate-y-8"></div>
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-10 transform -translate-x-8 -translate-y-8"></div>
      </div>
    </footer>
  )
}

export default Footer