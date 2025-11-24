import Link from "next/link";
import BackgroundColorToggle from "../../components/BackgroundColorToggle";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" }
  ];

  const professionalHighlights = [
    "8+ Years Financial Services",
    "Banca Channel Management",
    "Wealth Management Expert",
    "Sales Leadership"
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Professional Profile */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-bold">Suresh S</h3>
            </div>
            <p className="text-blue-100 leading-relaxed mb-4 max-w-md">
              Senior Financial Services Executive with 8+ years of expertise in driving revenue growth 
              through strategic sales leadership and elite relationship management across leading 
              financial institutions.
            </p>
            <div className="flex flex-wrap gap-2">
              {professionalHighlights.map((highlight, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-blue-100 border border-white/20"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Connect
            </h4>
            <div className="space-y-3">
              <div className="flex items-center text-blue-100">
                <svg className="h-4 w-4 mr-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:sureshnaribol82@gmail.com" className="hover:text-white transition-colors">
                  sureshnaribol82@gmail.com
                </a>
              </div>
              <div className="flex items-center text-blue-100">
                <svg className="h-4 w-4 mr-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919632064020" className="hover:text-white transition-colors">
                  +91 9632064020
                </a>
              </div>
              <div className="flex items-center text-blue-100">
                <svg className="h-4 w-4 mr-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Kattisangavi(Post)\nJewargi (TQ)\nGulbarga(Dist)\nPincode-585310</span>
              </div>
              
            </div>
          </div>
        </div>

        {/* Professional Call-to-Action */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Ready to Drive Business Growth Together?</h4>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how my expertise in financial services and sales leadership can contribute to your organization's success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Start a Conversation
              </Link>
              <a 
                href="tel:+919632064020"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30 hover:border-white/50"
              >
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Directly
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-blue-200 text-sm mb-4 md:mb-0">
            <p>&copy; {currentYear} Suresh S. All rights reserved.</p>
          </div>
          
          <div className="flex items-center space-x-6 text-blue-200 text-sm">
            <span>Built with Professional Excellence</span>
            <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
            <span>Financial Services Executive</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;