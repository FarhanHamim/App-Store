import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from 'react'
import {
  User,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth'
import { auth, googleProvider } from '../config/firebase'

interface AuthContextType {
  user: User | null
  loading: boolean
  loginWithGoogle: () => Promise<void>
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, name: string, photoURL?: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  async function loginWithGoogle() {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      if (!result?.user) {
        throw new Error('No user data received')
      }
      
      const isNewUser = (result as any).additionalUserInfo?.isNewUser
      if (isNewUser) {
        console.log('New user signed up with Google')
      }
    } catch (error: any) {
      console.error('Error signing in with Google:', error)
      
      switch (error.code) {
        case 'auth/popup-closed-by-user':
          throw new Error('Sign-in was cancelled')
        case 'auth/popup-blocked':
          throw new Error('Popup was blocked by your browser')
        case 'auth/cancelled-popup-request':
          throw new Error('Another sign-in attempt is in progress')
        case 'auth/unauthorized-domain':
          throw new Error('This domain is not authorized for Google sign-in')
        case 'auth/operation-not-allowed':
          throw new Error('Google sign-in is not enabled. Please contact support.')
        default:
          throw new Error('Failed to sign in with Google. Please try again.')
      }
    }
  }

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
  }

  const register = async (email: string, password: string, name: string, photoURL?: string) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}`
      })
    } catch (error: any) {
      console.error('Error during registration:', error)
      throw error
    }
  }

  async function logout() {
    try {
      await signOut(auth)
    } catch (error) {
      console.error('Error signing out:', error)
      throw error
    }
  }

  const value = {
    user,
    loading,
    loginWithGoogle,
    login,
    register,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
} 