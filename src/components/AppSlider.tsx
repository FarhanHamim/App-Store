import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import { FaStar, FaDownload } from 'react-icons/fa'
import type { App } from '../data/apps'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

interface AppSliderProps {
  apps: App[]
}

export default function AppSlider({ apps }: AppSliderProps) {
  const formatDownloads = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`
    }
    return num.toString()
  }

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        effect="fade"
        loop={true}
        className="aspect-[21/9]"
      >
        {apps.map((app) => (
          <SwiperSlide key={app.id}>
            <Link to={`/apps/${app.id}`} className="relative block h-full w-full group">
              <img
                src={app.screenshots[0]}
                alt={app.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-start gap-6">
                  <img
                    src={app.icon}
                    alt={app.name}
                    className="h-20 w-20 rounded-2xl shadow-lg transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h2 className="text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                        {app.name}
                      </h2>
                      <span className="px-4 py-2 bg-primary/90 text-white rounded-full text-sm font-semibold">
                        {app.category}
                      </span>
                    </div>
                    <p className="mt-2 text-xl text-gray-200 line-clamp-2">
                      {app.description}
                    </p>
                    <div className="mt-4 flex items-center gap-6 text-gray-300">
                      <div className="flex items-center gap-2">
                        <FaStar className="text-yellow-400 h-5 w-5" />
                        <span className="font-medium">{app.rating}</span>
                        <span className="text-gray-400">({app.reviews})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaDownload className="h-5 w-5" />
                        <span>{formatDownloads(app.downloads)} downloads</span>
                      </div>
                      <div className="text-lg font-medium">
                        {app.price === 0 ? 'Free' : `$${app.price.toFixed(2)}`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
} 