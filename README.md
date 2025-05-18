# App Store - Your Gateway to Discovery

AppNexus is a modern, user-centric AppStore platform designed to help users discover, install, and review a wide array of applications tailored to their interests. The platform features trending apps, categorized Browse, user reviews, and a personalized experience to simplify app management and promote engagement.

**Live Link:** [https://app-store-new.netlify.app/](https://app-store-new.netlify.app/)

**GitHub Repository:** [https://github.com/FarhanHamim/App-Store](https://github.com/FarhanHamim/App-Store)

## Project Purpose

The core goal of this project is to deliver a comprehensive and intuitive AppStore experience. It focuses on providing users with easy access to a curated selection of apps, facilitating discovery through organized categories and trending lists, and empowering them to make informed decisions through genuine user reviews.

## Key Features

### 1. Layout & Navigation
* **Responsive Design:** Fully responsive across mobile, tablet, and desktop devices.
* **Main Navbar:**
    * Features the "App Store" name and logo.
    * Navigation links: "Apps" and "My Profile" (protected).
    * Active routes are clearly highlighted.
    * **Conditional UI for Authentication:**
        * **Logged-in Users:** See their profile image (username visible on hover) and a "Logout" button.
        * **Non-logged-in Users:** See a "Login" button.
    * User authentication state (including profile image and name) persists across page reloads with a loader for fetching user info.
* **Dynamic Main Section:** Content changes dynamically based on the selected route.
* **Comprehensive Footer:**
    * Eye-catching design with relevant information.
    * Includes links to: About Us, Contact Us, Terms of Service, Privacy Policy, Developer Resources, and Social Media icons.
    * Navbar and Footer are consistently displayed on all pages except the 404 error page.

### 2. Apps Page (Homepage - `/`)
* **Promotional Slider:** A rotating SwiperJS slider showcasing at least 3 slides for featured apps, promotions, or newly launched applications.
* **Trending Apps Section:** Displays at least 4 of the highest-rated applications in a card format, sorted in descending order of rating.
* **Categorized Browse:**
    * Dedicated sections for different app categories (e.g., Productivity, Gaming, Education).
    * Each section has a heading corresponding to the category name.
    * All apps belonging to a specific category are displayed in card format within that section.
* **App Cards:** Each card concisely presents:
    * App Thumbnail
    * App Name
    * App Category
    * App Rating
    * Clicking on an app card navigates the user to the detailed `App Details Page`.
* **Extra Sections:**
    * **Top Developers:** Highlights prominent app developers.
    * **User Testimonials:** Showcases positive feedback from platform users.

### 3. App Details Page (`/app/:id` - Protected Route)
* **Access Control:** Redirects non-logged-in users to the Login page. User authentication state is maintained even on page reload within this private route.
* **Comprehensive App Information:** Displays all details for the selected app, including:
    * Name, Developer, Thumbnail, Banner Image
    * Downloads Count, Category, Rating
    * Detailed Description, Key Features list
    * Existing User Reviews
* **Interactive "Install" Button (Challenge Feature):**
    * Initially shows "Install".
    * On click, changes to "Uninstall", indicating the app has been (conceptually) installed.
    * Clicking "Uninstall" reverts the button to "Install".
* **User Review Submission (Challenge Feature):**
    * Input fields for "Review" (text comment) and "Rating" (1-5 stars).
    * "Submit Review" button.
    * **Review Logic:**
        * Users can only submit a review if the app has been "Installed" (i.e., the "Install" button was clicked at least once).
        * Reviews can still be submitted even if the app is subsequently "Uninstalled".
        * Submitted reviews (comment and rating) are immediately displayed on the page for the current session (reviews do not persist after a page refresh as per requirements).

### 4. Authentication (Firebase Powered)
* **Login Page (`/login`):**
    * Accessible via Navbar "Login" button or when trying to access protected routes.
    * Email and Password based authentication.
    * **Google Sign-in** option.
    * Link to navigate to the Register page.
* **Register Page (`/register`):**
    * User registration form with fields: Name, Email, Photo URL, Password.
    * **Password Validation:**
        * Must contain at least one uppercase letter.
        * Must contain at least one lowercase letter.
        * Must be at least 6 characters long.
    * **Google Sign-in** option.
    * Link to navigate to the Login page.
* **Notifications:** Error and success messages for authentication processes are displayed using React Hot Toast.

### 5. User Profile (`/my-profile` - Protected Route & Challenge Feature)
* **Access Control:** Only accessible to logged-in users.
* **View Profile:** Displays the user's Name, Email, and Photo URL.
* **Update Profile:**
    * Includes a form with input fields for Name and Photo URL.
    * Users can edit their name and photo URL.
    * Changes are saved using Firebase's `updateProfile()` method.

### 6. Other Key Features
* **JSON Data Source:** App information is managed via a `apps.json` file (hosted in the `public` folder) containing details for at least 8 apps across 3+ categories. Images are hosted on `imgbb.com`.
* **Error Handling:** A custom, user-friendly 404 "Not Found" page.
* **Additional Routes:** Includes distinct routes for "About Us", "Contact Us", "Privacy Policy", and "Terms of Service", accessible from the footer.
* **Dynamic Page Titles:** Each page has a unique and relevant title using `react-helmet-async` for better SEO and browser tab identification.
* **No Reload Errors:** Ensures that reloading the page from any route (including private routes) does not result in errors and maintains the correct application state.
* **Firebase Authorized Domain:** Configured for Netlify deployment to ensure seamless Firebase operations.

## Technologies Used

* **Frontend:**
    * React (v18.2.0)
    * Vite (as the build tool and development server)
    * JavaScript (ES6+)
* **Routing:**
    * React Router DOM (v6.22.3)
* **Styling:**
    * Tailwind CSS (v3.4.1)
    * DaisyUI (v4.7.2) - Tailwind CSS Component Library
* **State Management:**
    * React Context API (for Authentication via `AuthProvider`)
* **Authentication:**
    * Firebase Authentication (v10.8.0) - Email/Password, Google Sign-In.
* **UI Components & Libraries:**
    * SwiperJS (v11.0.7) - For sliders/carousels.
    * React Hot Toast (v2.4.1) - For notifications.
    * React Icons (v5.0.1) - For scalable vector icons.
    * AOS (Animate On Scroll) (v2.3.4) - For scroll animations.
* **Page Head Management:**
    * React Helmet Async (v2.0.4) - For dynamic page titles.
* **Linting & Code Quality:**
    * ESLint (configured for React + Vite)
* **Type Checking (Optional but good practice):**
    * Prop-types (v15.8.1)
* **Deployment:**
    * Netlify

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

* Node.js (v18.x or later recommended)
* npm (or yarn)
* A Firebase project.

### Firebase Configuration

1.  Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project (or use an existing one).
2.  In your project, go to **Project settings** > **General**. Under "Your apps", click the web icon (`</>`) to add a web app.
3.  Register your app and copy the Firebase configuration object.
4.  Enable Authentication Methods:
    * Go to **Authentication** > **Sign-in method**.
    * Enable "Email/Password".
    * Enable "Google".
5.  Create a `.env` file in the root of your cloned project directory.
6.  Add your Firebase configuration keys to the `.env` file. Vite uses `VITE_` prefix for environment variables:
    ```env
    VITE_FIREBASE_API_KEY="YOUR_API_KEY"
    VITE_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
    VITE_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
    VITE_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
    VITE_FIREBASE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
    VITE_FIREBASE_APP_ID="YOUR_APP_ID"
    ```
    *(Ensure the `src/config/firebase.config.js` file is set up to consume these environment variables).*

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/FarhanHamim/App-Store.git](https://github.com/FarhanHamim/App-Store.git)
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd App-Store
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    ```
    *(or `yarn install` if you prefer yarn)*

### Running the Project Locally

1.  **Ensure your `.env` file with Firebase credentials is correctly set up in the project root.**
2.  **Start the development server:**
    ```sh
    npm run dev
    ```
    *(or `yarn dev`)*
3.  Open your browser and navigate to `http://localhost:5173` (or the port specified in your console).

## Environment Variables

The following environment variables need to be set in a `.env` file at the project root for Firebase integration:

* `VITE_FIREBASE_API_KEY`
* `VITE_FIREBASE_AUTH_DOMAIN`
* `VITE_FIREBASE_PROJECT_ID`
* `VITE_FIREBASE_STORAGE_BUCKET`
* `VITE_FIREBASE_MESSAGING_SENDER_ID`
* `VITE_FIREBASE_APP_ID`

## Author

* **Farhan Hamim**
    * GitHub: [https://github.com/FarhanHamim](https://github.com/FarhanHamim)

## Acknowledgements

* This project was developed as a part of a learning curriculum.
* Inspiration from modern app store designs.
