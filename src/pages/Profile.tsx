import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { FiX } from 'react-icons/fi'

export default function Profile() {
  const { user } = useAuth()
  const [showModal, setShowModal] = useState(false)
  const defaultAvatar = "https://api.dicebear.com/7.x/avataaars/svg"

  if (!user) {
    return <div>Please log in to view your profile.</div>
  }

  return (
    <div className="container mx-auto p-4">
      {}
      <div className="flex justify-center">
        <div 
          onClick={() => setShowModal(true)} 
          className="cursor-pointer hover:opacity-80"
        >
          <img
            src={user.photoURL || defaultAvatar}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-500"
          />
        </div>
      </div>

      {}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
            {}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <FiX size={24} />
            </button>

            {}
            <div className="text-center">
              <img
                src={user.photoURL || defaultAvatar}
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
              />
              <h2 className="text-xl font-bold mb-2">
                {user.displayName || 'No name set'}
              </h2>
              <p className="text-gray-600 mb-4">{user.email}</p>

              <div className="text-left space-y-3">
                <div>
                  <p className="font-semibold">Email Status</p>
                  <p className={user.emailVerified ? 'text-green-600' : 'text-yellow-600'}>
                    {user.emailVerified ? 'Verified' : 'Not Verified'}
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Account Created</p>
                  <p className="text-gray-600">
                    {user.metadata.creationTime
                      ? new Date(user.metadata.creationTime).toLocaleDateString()
                      : 'Unknown'}
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Last Sign In</p>
                  <p className="text-gray-600">
                    {user.metadata.lastSignInTime
                      ? new Date(user.metadata.lastSignInTime).toLocaleDateString()
                      : 'Unknown'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 