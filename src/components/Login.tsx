import { FcGoogle } from 'react-icons/fc'
import { useAuth } from '../contexts/AuthContext'

export default function Login() {
  const { loginWithGoogle } = useAuth()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <button
            onClick={loginWithGoogle}
            className="group relative w-full flex justify-center items-center gap-3 py-3 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
          >
            <FcGoogle className="h-5 w-5" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  )
} 