import { Routes as RouterRoutes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Apps from './pages/Apps'
import AppDetails from './pages/AppDetails'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import PrivateRoute from './components/PrivateRoute'

export default function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/apps" element={<Apps />} />
      <Route
        path="/apps/:id"
        element={
          <PrivateRoute>
            <AppDetails />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </RouterRoutes>
  )
} 