import { useEffect } from 'react'
import { apps } from '../data/apps'
import AppSlider from '../components/AppSlider'
import AppCard from '../components/AppCard'

export default function Home() {
  useEffect(() => {
    document.title = 'AppStore - Discover Great Apps'
  }, [])

  const trendingApps = [...apps]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4)

  const featuredApps = apps.slice(0, 3)

  return (
    <div className="min-h-screen">
      <AppSlider apps={featuredApps} />

      <div className="container py-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900">Trending Apps</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trendingApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </section>

        {['Education', 'Health', 'Productivity'].map((category) => (
          <section key={category} className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {apps
                .filter((app) => app.category === category)
                .map((app) => (
                  <AppCard key={app.id} app={app} />
                ))}
            </div>
          </section>
        ))}

        <section className="mt-12 rounded-lg bg-primary p-8 text-white">
          <h2 className="text-2xl font-bold">Become a Developer</h2>
          <p className="mt-4 max-w-2xl text-lg">
            Join our developer community and publish your apps on AppStore. Reach
            millions of users and grow your business.
          </p>
          <button className="mt-6 rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-gray-100">
            Get Started
          </button>
        </section>
      </div>
    </div>
  )
} 