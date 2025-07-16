import React from 'react'
import { ArrowRight, Heart, Users, Leaf } from 'lucide-react'

const Hero = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Bénéficiaires' },
    { icon: Heart, value: '50+', label: 'Projets Réalisés' },
    { icon: Leaf, value: '10+', label: 'Domaines d\'Action' },
  ]

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-bg">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Association pour le{' '}
              <span className="text-gradient">Développement Namalgbzanga</span>{' '}
              du Centre-Nord
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Nous œuvrons pour un développement durable et intégral au profit des femmes, 
              des jeunes et des communautés de la région du Centre-Nord du Burkina Faso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={scrollToContact}
                className="btn-primary group"
              >
                Nous Rejoindre
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
              <button
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                En Savoir Plus
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-3">
                    <stat.icon className="text-primary-600" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Logo/Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up animation-delay-200">
            <div className="relative">
              <div className="w-80 h-80 bg-white rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-48 bg-primary-600 rounded-2xl flex items-center justify-center mb-4 mx-auto relative overflow-hidden">
                    {/* Burkina Faso map silhouette */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700"></div>
                    <div className="relative z-10">
                      <div className="w-32 h-32 bg-secondary-400 rounded-full flex items-center justify-center">
                        <Users className="text-white" size={48} />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">ADN/CN</h3>
                  <p className="text-gray-600 text-sm">Namalgbzanga</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center animate-pulse-slow">
                <Heart className="text-white" size={24} />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center animate-pulse-slow animation-delay-400">
                <Leaf className="text-white" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero