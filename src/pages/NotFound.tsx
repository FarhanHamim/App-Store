import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-16 text-center">
      <h1 className="text-9xl font-bold text-gray-200">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-gray-900">Page not found</h2>
      <p className="mt-2 text-gray-600">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
      >
        Go back home
      </Link>
    </div>
  )
} 