import {
  Activity,
  Apple,
  Baby,
  BookOpen,
  Droplets,
  HandHeart,
  Heart,
  Leaf,
  Shield,
  Stethoscope,
  Users,
  Utensils
} from 'lucide-react'

const Activities = () => {
  const activities = [
    {
      icon: Heart,
      title: 'Santé Maternelle et Infantile',
      description: 'Promotion de la santé des mères et des enfants, accès aux soins de qualité et sensibilisation aux bonnes pratiques sanitaires.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Activity,
      title: 'Lutte contre le Cancer',
      description: 'Sensibilisation et dépistage du cancer du col de l\'utérus et du sein, accompagnement des femmes dans leurs parcours de soins.',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: Shield,
      title: 'Lutte contre le VIH/SIDA',
      description: 'Prévention, sensibilisation et accompagnement des personnes vivant avec le VIH, promotion des droits de santé sexuelle et reproductive.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Users,
      title: 'Développement des Femmes et Jeunes',
      description: 'Initiatives d\'autonomisation économique, formation professionnelle et leadership pour les femmes et les jeunes.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Droplets,
      title: 'Accès à l\'Eau Potable',
      description: 'Promotion de l\'accès à l\'eau potable, amélioration de l\'hygiène et des conditions d\'assainissement dans les communautés.',
      color: 'bg-cyan-100 text-cyan-600'
    },
    {
      icon: HandHeart,
      title: 'Lutte contre les VBG',
      description: 'Sensibilisation et accompagnement pour l\'abandon des Violences Basées sur le Genre, protection des victimes.',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Apple,
      title: 'Lutte contre la Malnutrition',
      description: 'Programme de nutrition, éducation alimentaire et soutien aux familles vulnérables pour améliorer l\'état nutritionnel.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Utensils,
      title: 'Sécurité Alimentaire',
      description: 'Promotion de l\'agriculture durable, formation aux techniques agricoles et soutien à la production alimentaire locale.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Leaf,
      title: 'Protection de l\'Environnement',
      description: 'Sensibilisation environnementale, reboisement et promotion des pratiques respectueuses de l\'environnement.',
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      icon: Heart,
      title: 'Cohésion Sociale',
      description: 'Promotion du vivre-ensemble, médiation communautaire et renforcement des liens sociaux entre les communautés.',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      icon: BookOpen,
      title: 'Éducation Populaire',
      description: 'Alphabétisation, formation civique et sensibilisation aux droits et devoirs citoyens dans les communautés.',
      color: 'bg-teal-100 text-teal-600'
    },
    {
      icon: Baby,
      title: 'Protection de l\'Enfance',
      description: 'Promotion des droits de l\'enfant, protection contre les violences et soutien au développement de l\'enfant.',
      color: 'bg-rose-100 text-rose-600'
    },
    {
  icon: Stethoscope,
  title: 'Formation des Médecins',
  description: 'Programmes de formation médicale continue, mise à jour des connaissances et développement des compétences cliniques.',
  color: 'bg-rose-100 text-rose-600'
}
  ]

  return (
    <section id="activities" className="section-padding gradient-bg">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos <span className="text-gradient">Domaines d'Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ADN/CN a déjà réalisé des activités dans plusieurs domaines clés 
            pour un développement durable et intégral au profit des communautés du Centre-Nord.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={index} 
              className="card hover:shadow-xl transition-shadow duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg mb-6 ${activity.color}`}>
                <activity.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{activity.title}</h3>
              <p className="text-gray-600">{activity.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Rejoignez-nous dans notre Mission
            </h3>
            <p className="text-gray-600 mb-6">
              Ensemble, nous pouvons créer un impact positif et durable dans nos communautés. 
              Votre participation, qu'elle soit bénévole ou financière, fait la différence.
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Nous Contacter
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Activities