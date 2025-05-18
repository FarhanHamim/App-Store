import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { FaStar, FaDownload, FaUser } from 'react-icons/fa'
import { apps } from '../data/apps'
import toast from 'react-hot-toast'

interface Review {
  rating: number
  comment: string
  timestamp: Date
}

export default function AppDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const app = apps.find((a) => a.id === id)
  
  // State for review form
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState(5)
  const [reviews, setReviews] = useState<Review[]>([])
  const [hoveredRating, setHoveredRating] = useState(0)
  const [isInstalled, setIsInstalled] = useState(false)
  const [hasEverInstalled, setHasEverInstalled] = useState(false)
  const [isInstalling, setIsInstalling] = useState(false)

  useEffect(() => {
    if (!app) {
      navigate('/404')
      return
    }
    document.title = `${app.name} - AppStore`
  }, [app, navigate])

  if (!app) return null

  const handleInstallClick = async () => {
    setIsInstalling(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsInstalled(!isInstalled)
      if (!hasEverInstalled && !isInstalled) {
        setHasEverInstalled(true)
      }
      toast.success(isInstalled ? 'App uninstalled successfully' : 'App installed successfully')
    } catch (error) {
      toast.error('Failed to process request')
    } finally {
      setIsInstalling(false)
    }
  }

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    if (!comment.trim() || !hasEverInstalled) return

    const newReview = {
      rating,
      comment: comment.trim(),
      timestamp: new Date()
    }

    setReviews([newReview, ...reviews])
    setComment('')
    setRating(5)
    toast.success('Review submitted successfully')
  }

  const formatDownloads = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`
    }
    return num.toString()
  }

  const formatRelativeTime = (date: Date) => {
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
    
    if (diffInSeconds < 60) return 'just now'
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`
    return `${Math.floor(diffInSeconds / 86400)} days ago`
  }

  const similarApps = apps
    .filter(a => a.category === app.category && a.id !== app.id)
    .slice(0, 3)

  return (
    <div className="container mx-auto px-4 py-8">
      {}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={app.icon}
            alt={app.name}
            className="h-24 w-24 rounded-2xl shadow-lg"
          />
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{app.name}</h1>
            <p className="mt-2 text-xl text-gray-500">{app.developer}</p>
            <div className="mt-3 flex items-center gap-4">
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400 h-5 w-5" />
                <span className="font-medium text-gray-900">{app.rating}</span>
                <span className="text-gray-500">({app.reviews})</span>
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <FaDownload className="h-5 w-5" />
                <span>{formatDownloads(app.downloads)} downloads</span>
              </div>
              <div className="text-xl font-medium text-gray-900">
                {app.price === 0 ? 'Free' : `$${app.price.toFixed(2)}`}
              </div>
            </div>
          </div>
        </div>
        
        <button
          onClick={handleInstallClick}
          disabled={isInstalling}
          className={`px-8 py-3 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-lg whitespace-nowrap ${
            isInstalled
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-primary hover:bg-primary/90 text-white'
          } ${isInstalling ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
          {isInstalling 
            ? 'Processing...' 
            : isInstalled 
              ? 'Uninstall' 
              : app.price === 0 
                ? 'Install Now' 
                : 'Buy Now'
          }
        </button>
      </div>

      {}
      <div className="grid gap-12">
        {}
        <div className="w-full">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {app.screenshots.map((screenshot, index) => (
              <div 
                key={index} 
                className="rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={screenshot}
                  alt={`${app.name} screenshot ${index + 1}`}
                  className="w-full rounded-xl bg-white max-h-[300px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{app.description}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
            <ul className="space-y-3">
              {app.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-lg text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {}
        <div className="w-full">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Reviews & Ratings</h2>
          
          {}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            {!hasEverInstalled ? (
              <div className="text-center py-4">
                <p className="text-gray-600 mb-2">You need to install the app first to submit a review.</p>
                <button
                  onClick={handleInstallClick}
                  disabled={isInstalling}
                  className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
                >
                  Install Now
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="text-2xl focus:outline-none"
                      >
                        <FaStar 
                          className={`h-8 w-8 ${
                            star <= (hoveredRating || rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          } transition-colors duration-150`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Review
                  </label>
                  <textarea
                    id="comment"
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share your experience with this app..."
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!comment.trim()}
                  className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  Submit Review
                </button>
              </form>
            )}
          </div>

          {}
          <div className="space-y-6">
            {reviews.length === 0 ? (
              <p className="text-center text-gray-500 py-8">
                Be the first to review this app!
              </p>
            ) : (
              reviews.map((review, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-100 rounded-full p-2">
                        <FaUser className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900">User</span>
                          <span className="text-sm text-gray-500">
                            {formatRelativeTime(review.timestamp)}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">{review.comment}</p>
                </div>
              ))
            )}
          </div>
        </div>

        {}
        <div className="w-full">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Apps in {app.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarApps.map((similarApp) => (
              <Link 
                key={similarApp.id} 
                to={`/apps/${similarApp.id}`}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={similarApp.screenshots[0]}
                    alt={similarApp.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <img
                      src={similarApp.icon}
                      alt={similarApp.name}
                      className="w-12 h-12 rounded-xl"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {similarApp.name}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-1">
                        {similarApp.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaStar className="text-yellow-400 h-4 w-4" />
                      <span>{similarApp.rating}</span>
                      <span className="text-gray-400">({similarApp.reviews})</span>
                    </div>
                    <div className="font-medium text-gray-900">
                      {similarApp.price === 0 ? 'Free' : `$${similarApp.price.toFixed(2)}`}
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-sm text-gray-500">
                    <FaDownload className="h-4 w-4" />
                    <span>{formatDownloads(similarApp.downloads)} downloads</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 