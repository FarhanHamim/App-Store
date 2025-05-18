import { AuthProvider } from './contexts/AuthContext'
import Routes from './Routes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  )
} 