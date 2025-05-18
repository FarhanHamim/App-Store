import { useEffect } from 'react'
import { apps } from '../data/apps'
import AppCard from '../components/AppCard'

export default function Apps() {
  useEffect(() => {
    document.title = 'AppStore - Browse Apps'
  }, [])

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold text-gray-900">Browse Apps</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  )
} 