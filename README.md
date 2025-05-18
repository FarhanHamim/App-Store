# AppStore Platform

A modern web application that serves as a centralized platform for discovering, installing, and managing applications. Built with React and Firebase, it provides a seamless user experience for both app consumers and developers.

## Live Demo
[AppStore Platform](https://appstore-platform.web.app)

## Purpose
The AppStore Platform aims to provide a user-friendly marketplace where users can discover, install, and review applications. It features robust user authentication, profile management, and a comprehensive review system.

## Key Features

### User Management
- Secure authentication with Firebase Auth
- Email verification status

### App Management
- Browse and search application catalog
- Real-time installation/uninstallation
- Visual installation status indicators
- Detailed app information views

### Review System
- Star rating (1-5 stars)
- Written reviews with timestamps
- Install-gated review system
- Review persistence after app uninstallation

### UI/UX
- Responsive design for all devices
- Interactive toast notifications
- Loading states and animations
- Modal views for detailed information
- Intuitive hover effects

## Tech Stack

### Core Technologies
- React 18
- TypeScript 5
- Firebase 10
- Vite 5

### NPM Packages
- @firebase/auth
- @firebase/firestore
- @firebase/storage
- react-router-dom
- react-hot-toast
- react-icons
- @headlessui/react
- tailwindcss
- date-fns
- uuid

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env` file with your Firebase config:
```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

3. Run the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Deployment

The application can be deployed using:

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```

### Environment Variables
Required environment variables for deployment:
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License
This project is licensed under the MIT License - see the LICENSE file for details. 