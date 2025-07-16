import React from 'react'
import { Target, Eye, Award, MapPin, Calendar, Users2 } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Notre Mission',
      description: 'Promouvoir des actions de développement durable dans la région du Centre-Nord du Burkina Faso, en faveur des femmes, des jeunes et des communautés.'
    },
    {
      icon: Eye,
      title: 'Notre Vision',
      description: 'Une société où chaque femme, jeune et communauté du Centre-Nord a accès aux opportunités de développement et vit dans la dignité.'
    },
    {
      icon: Award,
      title: 'Nos Valeurs',
      description: 'Intégrité, solidarité, égalité des genres, développement durable, participation communautaire et transparence dans nos actions.'
    }
  ]

  const organizationInfo = [
    {
      icon: MapPin,
      title: 'Siège Social',
      description: 'Kaya, Région du Centre-Nord, Burkina Faso'
    },
    {
      icon: Calendar,
      title: 'Création',
      description: 'Créée le 10 décembre 2023'
    },
    {
      icon: Users2,
      title: 'Statut',
      description: 'Association à but non lucratif, apolitique et non confessionnelle'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            À Propos de <span className="text-gradient">ADN/CN</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <strong>Namalgbzanga</strong> signifie "développement intégral" en langue mooré. 
            Notre association incarne cette vision d'un développement holistique et durable.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="card text-center animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-lg mb-6">
                <feature.icon className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Organization Details */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Informations Organisationnelles</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {organizationInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <info.icon className="text-primary-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                  <p className="text-gray-600">{info.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Framework */}
        <div className="bg-primary-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Cadre Juridique</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4">
              L'Association pour le Développement Namalgbzanga du Centre-Nord (ADN/CN) a été créée 
              conformément à la <strong>loi 064-2015/CNT du 20 octobre 2015</strong> portant liberté d'association 
              au Burkina Faso.
            </p>
            <p className="text-gray-700 mb-4">
              Notre association est constituée pour une durée de <strong>99 ans</strong> et fonctionne 
              selon les principes de transparence, de participation démocratique et de gestion rigoureuse 
              des ressources.
            </p>
            <div className="bg-white rounded-lg p-6 mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">Principes Fondamentaux</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>Association à but non lucratif</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>Apolitique et non confessionnelle</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>Non clanique et inclusive</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span>Ouverte à toute personne adhérant à nos valeurs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About