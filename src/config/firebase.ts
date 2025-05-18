import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAtnYK960PJ6fNNAOTf8qF43ocmmHGmHxI",
  authDomain: "appstore-e89e9.firebaseapp.com",
  projectId: "appstore-e89e9",
  storageBucket: "appstore-e89e9.appspot.com",
  messagingSenderId: "330517764156",
  appId: "1:330517764156:web:1d336427a2d424d1e54b39"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth()
auth.useDeviceLanguage()

export const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt: 'select_account'
})

export const db = getFirestore(app)
export const storage = getStorage(app)

export default app 