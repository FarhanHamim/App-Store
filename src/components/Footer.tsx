import { Link } from 'react-router-dom'
import {
  FiMail, FiPhone, FiMapPin, FiCode, FiBook, FiDownload,
  FiDollarSign, FiAward, FiHeart
} from 'react-icons/fi'

export default function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      url: 'https://github.com/Naharamina',
      color: 'hover:bg-[#333333]'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      url: 'https://linkedin.com/in/amirun-nahar-899473344/',
      color: 'hover:bg-[#0077B5]'
    },
    {
      name: 'Instagram',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      url: 'https://instagram.com/__naahaar__',
      color: 'hover:bg-[#E4405F]'
    },
    {
      name: 'Facebook',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: 'https://facebook.com/nahar.amina.56',
      color: 'hover:bg-[#1877F2]'
    }
  ]

  return (
    <footer className="bg-base-200">
      {}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold text-primary mb-2">Join Our Community</h2>
            <p className="text-base-content/80 mb-6 max-w-md">
              Get exclusive updates, developer resources, and special offers directly in your inbox
            </p>
            <div className="join shadow-lg">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="input input-bordered join-item w-64 md:w-80" 
              />
              <button className="btn btn-primary join-item px-6 hover:btn-secondary transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="bg-base-100 py-8 border-y border-base-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <FiDownload className="h-6 w-6 text-primary mx-auto" />
              <div className="stat-value text-primary text-3xl">1M+</div>
              <div className="text-sm opacity-70">App Downloads</div>
            </div>
            <div className="space-y-2">
              <FiCode className="h-6 w-6 text-primary mx-auto" />
              <div className="stat-value text-primary text-3xl">50K+</div>
              <div className="text-sm opacity-70">Developers</div>
            </div>
            <div className="space-y-2">
              <FiAward className="h-6 w-6 text-primary mx-auto" />
              <div className="stat-value text-primary text-3xl">100K+</div>
              <div className="text-sm opacity-70">Apps Published</div>
            </div>
            <div className="space-y-2">
              <FiHeart className="h-6 w-6 text-primary mx-auto" />
              <div className="stat-value text-primary text-3xl">2M+</div>
              <div className="text-sm opacity-70">Happy Users</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/3098/3098866.png" 
                alt="AppStore Logo" 
                className="h-10 w-10 object-contain"
              />
              <span>AppStore</span>
            </Link>
            <p className="text-base-content/70">
              Your one-stop destination for discovering amazing applications. Join our community of developers and users.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full ${social.color} text-base-content hover:text-white transition-all duration-300`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-base-content/60">
              Follow us on social media for updates and news
            </p>
          </div>

          {}
          <div>
            <h3 className="footer-title flex items-center gap-2">
              <FiCode className="h-5 w-5 text-primary" />
              Developer Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/developer/docs" className="link link-hover flex items-center gap-2">
                  <FiBook className="h-4 w-4" />
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/developer/api" className="link link-hover flex items-center gap-2">
                  <FiCode className="h-4 w-4" />
                  API Reference
                </Link>
              </li>
              <li>
                <Link to="/developer/submit" className="link link-hover flex items-center gap-2">
                  <FiDownload className="h-4 w-4" />
                  Submit App
                </Link>
              </li>
              <li>
                <Link to="/developer/monetization" className="link link-hover flex items-center gap-2">
                  <FiDollarSign className="h-4 w-4" />
                  Monetization
                </Link>
              </li>
            </ul>
          </div>

          {}
          <div>
            <h3 className="footer-title flex items-center gap-2">
              <FiBook className="h-5 w-5 text-primary" />
              Legal & Support
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="link link-hover">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="link link-hover">Terms of Service</Link>
              </li>
              <li>
                <Link to="/help" className="link link-hover">Help Center</Link>
              </li>
              <li>
                <Link to="/faq" className="link link-hover">FAQ</Link>
              </li>
              <li>
                <Link to="/guidelines" className="link link-hover">App Guidelines</Link>
              </li>
            </ul>
          </div>

          {}
          <div>
            <h3 className="footer-title flex items-center gap-2">
              <FiMail className="h-5 w-5 text-primary" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 hover:text-primary transition-colors">
                <FiMapPin className="h-5 w-5 text-primary" />
                <span>Block D,Road 10,Bashundhara R/A,Dhaka</span>
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-colors">
                <FiPhone className="h-5 w-5 text-primary" />
                <a href="tel:+1234567890" className="link link-hover">+8801722791234</a>
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-colors">
                <FiMail className="h-5 w-5 text-primary" />
                <a href="mailto:support@appstore.com" className="link link-hover">support@appstore.com</a>
              </li>
            </ul>
          </div>
        </div>

        {}
        <div className="mt-12 pt-8 border-t border-base-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base-content/70">
              © {new Date().getFullYear()} AppStore. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="link link-hover text-sm hover:text-primary transition-colors">Privacy</Link>
              <Link to="/terms" className="link link-hover text-sm hover:text-primary transition-colors">Terms</Link>
              <Link to="/cookies" className="link link-hover text-sm hover:text-primary transition-colors">Cookies</Link>
              <Link to="/sitemap" className="link link-hover text-sm hover:text-primary transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 