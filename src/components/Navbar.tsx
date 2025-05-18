import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useState } from 'react'
import { FiLogOut, FiHome, FiGrid, FiLogIn, FiUserPlus, FiSun, FiMoon, FiMenu } from 'react-icons/fi'

export default function Navbar() {
  const { user, logout } = useAuth()
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const defaultAvatar = "https://api.dicebear.com/7.x/avataaars/svg"

  return (
    <nav className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <FiGrid className="h-6 w-6" />
            <span>AppStore</span>
          </Link>

          {}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/apps" className="btn btn-ghost">
              <FiHome className="h-5 w-5 mr-2" />
              Browse Apps
            </Link>

            {user ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <img
                    src={user.photoURL || defaultAvatar}
                    alt={user.displayName || 'User'}
                    className="h-8 w-8 rounded-full"
                  />
                  <span className="text-sm font-medium">{user.displayName}</span>
                </div>
                <button
                  onClick={logout}
                  className="btn btn-ghost text-error"
                >
                  <FiLogOut className="h-5 w-5 mr-2" />
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/login" className="btn btn-ghost">
                  <FiLogIn className="h-5 w-5 mr-2" />
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary">
                  <FiUserPlus className="h-5 w-5 mr-2" />
                  Register
                </Link>
              </div>
            )}

            <button 
              onClick={toggleTheme} 
              className="btn btn-ghost gap-2"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <>
                  <FiMoon className="h-6 w-6" />
                  <span className="hidden sm:inline">Dark Mode</span>
                </>
              ) : (
                <>
                  <FiSun className="h-6 w-6" />
                  <span className="hidden sm:inline">Light Mode</span>
                </>
              )}
            </button>
          </div>

          {}
          <div className="md:hidden">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <FiMenu className="h-6 w-6" />
              </label>
              <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52 mt-4">
                {user ? (
                  <>
                    <li className="menu-title px-4 py-2">
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="w-12 h-12 rounded-full ring-2 ring-primary ring-offset-base-100 ring-offset-2">
                            <img
                              src={user.photoURL || defaultAvatar}
                              alt={user.displayName || "User avatar"}
                              className="w-full h-full object-cover rounded-full"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-medium truncate">{user.displayName || user.email}</span>
                          <span className="text-sm opacity-60">View profile</span>
                        </div>
                      </div>
                    </li>
                    <div className="divider my-1"></div>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/login" className="flex items-center gap-2">
                        <FiLogIn className="h-5 w-5" />
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/register" className="flex items-center gap-2">
                        <FiUserPlus className="h-5 w-5" />
                        Register
                      </Link>
                    </li>
                    <div className="divider my-1"></div>
                  </>
                )}
                <li>
                  <Link to="/apps">
                    <FiHome className="h-5 w-5" />
                    Browse Apps
                  </Link>
                </li>
                {user && (
                  <li>
                    <button onClick={logout} className="text-error">
                      <FiLogOut className="h-5 w-5" />
                      Logout
                    </button>
                  </li>
                )}
                <div className="divider my-1"></div>
                <li>
                  <button onClick={toggleTheme} className="flex items-center gap-2">
                    {theme === 'light' ? (
                      <>
                        <FiMoon className="h-6 w-6" />
                        Dark Mode
                      </>
                    ) : (
                      <>
                        <FiSun className="h-6 w-6" />
                        Light Mode
                      </>
                    )}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 