import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { useAuth } from '../contexts/AuthContext'
import toast from 'react-hot-toast'

interface PasswordErrors {
  length: boolean;
  uppercase: boolean;
  lowercase: boolean;
}

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [photoURL, setPhotoURL] = useState('')
  const [password, setPassword] = useState('')
  const [passwordErrors, setPasswordErrors] = useState<PasswordErrors>({
    length: true, 
    uppercase: true, 
    lowercase: true 
  })
  const { register, loginWithGoogle } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'AppStore - Register'
  }, [])

  const validatePassword = (value: string): PasswordErrors => {
    return {
      length: value.length < 6,
      uppercase: !/[A-Z]/.test(value),
      lowercase: !/[a-z]/.test(value)
    }
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPassword(value)
    const errors = validatePassword(value)
    setPasswordErrors(errors)
    
    console.log('Password validation:', {
      value,
      errors,
      hasErrors: Object.values(errors).some(error => error)
    })
  }

  const hasPasswordErrors = (errors: PasswordErrors): boolean => {
    return Object.values(errors).some(error => error)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const errors = validatePassword(password)
    if (hasPasswordErrors(errors)) {
      setPasswordErrors(errors)
      if (errors.length) {
        toast.error('Password must be at least 6 characters long')
      } else if (errors.uppercase) {
        toast.error('Password must contain an uppercase letter')
      } else if (errors.lowercase) {
        toast.error('Password must contain a lowercase letter')
      }
      return
    }

    try {
      await register(email, password, name, photoURL)
      toast.success('Account created successfully')
      navigate('/login')
    } catch (error: any) {
      
      if (error.code === 'auth/email-already-in-use') {
        toast.error('Email is already registered')
      } else if (error.code === 'auth/invalid-email') {
        toast.error('Invalid email address')
      } else if (error.code === 'auth/weak-password') {
        toast.error('Password is too weak')
      } else {
        toast.error('Failed to create account: ' + (error.message || 'Unknown error'))
      }
      console.error('Registration error:', error)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle()
      toast.success('Logged in successfully')
      navigate('/')
    } catch (error: any) {
      toast.error(error.message || 'Failed to log in with Google')
      console.error('Google login error:', error)
    }
  }

  return (
    <div className="container flex min-h-[calc(100vh-4rem)] items-center justify-center py-8">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="text-center text-2xl font-bold text-gray-900">
          Create an Account
        </h1>
        <p className="mt-2 text-center text-gray-600">
          Join our community today
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              id="photoURL"
              type="url"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Enter your photo URL (optional)"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={handlePasswordChange}
              className={`mt-1 block w-full rounded-lg border px-3 py-2 shadow-sm focus:outline-none focus:ring-1 ${
                hasPasswordErrors(passwordErrors) && password.length > 0
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:border-primary focus:ring-primary'
              }`}
              placeholder="Enter your password"
            />
            {password.length > 0 && (
              <div className="mt-2 space-y-1">
                <p className={`text-sm flex items-center gap-2 ${passwordErrors.length ? 'text-red-600' : 'text-green-600'}`}>
                  <span>{passwordErrors.length ? '✗' : '✓'}</span>
                  <span>Must be at least 6 characters</span>
                </p>
                <p className={`text-sm flex items-center gap-2 ${passwordErrors.uppercase ? 'text-red-600' : 'text-green-600'}`}>
                  <span>{passwordErrors.uppercase ? '✗' : '✓'}</span>
                  <span>Must contain an uppercase letter</span>
                </p>
                <p className={`text-sm flex items-center gap-2 ${passwordErrors.lowercase ? 'text-red-600' : 'text-green-600'}`}>
                  <span>{passwordErrors.lowercase ? '✗' : '✓'}</span>
                  <span>Must contain a lowercase letter</span>
                </p>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={hasPasswordErrors(passwordErrors) || !password || !email || !name}
            className="w-full rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="mt-4 flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <FcGoogle className="h-5 w-5" />
            Sign in with Google
          </button>
        </div>

        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-medium text-primary hover:text-secondary"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
} 