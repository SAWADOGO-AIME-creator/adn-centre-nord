import React from 'react'
import { Phone, Mail, User, Crown, FileText, Calculator, GraduationCap, Users2 } from 'lucide-react'

const Team = () => {
  const teamMembers = [
    {
      name: 'OUADBDA Maliki',
      position: 'Président',
      phone: '70 49 9814',
      icon: Crown,
      description: 'Responsable de la direction générale et de la représentation de l\'association.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      name: 'KAFANDO Talato',
      position: 'Secrétaire Générale',
      phone: '67 84 66 83',
      icon: FileText,
      description: 'Gestion administrative, coordination des activités et suivi des projets.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      name: 'SAWADOGO Zalissa',
      position: 'Secrétaire Comptable',
      phone: '60 02 02 57',
      icon: Calculator,
      description: 'Gestion financière, comptabilité et contrôle des ressources de l\'association.',
      color: 'bg-green-100 text-green-600'
    },
    {
      name: 'KAFANDO Issouf',
      position: 'Responsable Éducation Populaire',
      phone: '74 69 13 25',
      icon: GraduationCap,
      description: 'Promotion de l\'éducation populaire, alphabétisation et formation civique.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      name: 'OUEDRAOGO Sophie',
      position: 'Responsable Genre et Promotion Féminine',
      phone: '78 32 51 46',
      icon: Users2,
      description: 'Promotion des droits des femmes, égalité des genres et autonomisation féminine.',
      color: 'bg-pink-100 text-pink-600'
    }
  ]

  const formatPhone = (phone: string) => {
    return phone.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4')
  }

  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Notre <span className="text-gradient">Équipe</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une équipe dévouée et expérimentée, engagée pour le développement 
            durable des communautés du Centre-Nord.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="card text-center hover:shadow-xl transition-shadow duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
                  <User className="text-gray-400" size={40} />
                </div>
                <div className={`absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-2 w-12 h-12 rounded-full flex items-center justify-center ${member.color}`}>
                  <member.icon size={24} />
                </div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-primary-600 font-medium mb-4">{member.position}</p>
              <p className="text-gray-600 text-sm mb-6">{member.description}</p>

              {/* Contact */}
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <Phone size={16} />
                  <span className="font-mono">{formatPhone(member.phone)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Organization Structure */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Structure Organisationnelle
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Assemblée Générale */}
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Assemblée Générale</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Organe suprême de l'association regroupant tous les membres régulièrement inscrits.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span>Adoption et révision des statuts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span>Élection du Bureau Exécutif</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span>Approbation des comptes</span>
                  </li>
                </ul>
              </div>

              {/* Bureau Exécutif */}
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Bureau Exécutif</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Organe dirigeant composé de 5 membres élus pour un mandat de 5 ans.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary-600 rounded-full"></div>
                    <span>Administration de l'association</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary-600 rounded-full"></div>
                    <span>Gestion des activités et ressources</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary-600 rounded-full"></div>
                    <span>Représentation externe</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Commissioners */}
            <div className="mt-8 bg-white rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Contrôle Interne</h4>
              <p className="text-gray-600 text-sm">
                Deux commissaires aux comptes, élus par l'Assemblée Générale, 
                assurent le contrôle interne et la vérification des comptes de l'association.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team