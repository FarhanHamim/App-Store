import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import type { App } from '../data/apps'

interface AppCardProps {
  app: App
}

export default function AppCard({ app }: AppCardProps) {
  return (
    <Link
      to={`/apps/${app.id}`}
      className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-lg"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={app.icon}
          alt={app.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900">{app.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{app.developer}</p>
        <div className="mt-2 flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          <span className="text-sm font-medium text-gray-900">{app.rating}</span>
          <span className="text-sm text-gray-500">({app.reviews})</span>
        </div>
        <div className="mt-2 text-sm font-medium text-gray-900">
          {app.price === 0 ? 'Free' : `$${app.price.toFixed(2)}`}
        </div>
      </div>
    </Link>
  )
} 