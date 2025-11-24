"use client";

const CollaborationsPage = () => {
  // JSON data for collaborations
  const collaborationsData = {
    header: {
      tag: "Strategic Partnerships",
      title: "Our Collaborations",
      description: "Strategic partnerships and collaborative ventures that enhance our community outreach and service delivery."
    },
    collaborations: [
      {
        id: 1,
        name: "Nammauru Nammahemme",
        description: "Proud collaboration with Nammauru Nammahemme, a platform dedicated to community development and social welfare initiatives. Together, we work towards creating sustainable financial solutions for underserved communities.",
        detailedDescription: "Our partnership focuses on providing accessible financial services, educational programs, and community support to empower local populations and foster economic growth.",
        website: "https://namma-uru-website.vercel.app/",
        whatsappMessage: "Hello Suresh, I would like to know more about the Nammauru Nammahemme collaboration.",
        image: "/images/namma.webp"
      }
    ],
    benefits: [
      {
        id: 1,  
        title: "Community Impact",
        description: "Creating positive change through financial inclusion and community development programs.",
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      },
      {
        id: 2,
        title: "Sustainable Growth",
        description: "Building long-term partnerships that foster economic development and social welfare.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      },
      {
        id: 3,
        title: "Innovation",
        description: "Developing innovative solutions to address community challenges and financial needs.",
        icon: "M13 10V3L4 14h7v7l9-11h-7z"
      }
    ],
    cta: {
      title: "Interested in Collaboration?",
      description: "Partner with us to create meaningful impact in our communities through strategic collaborations.",
      whatsappMessage: "Hello Suresh, I would like to discuss a potential collaboration opportunity."
    }
  };

  return (
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-0.5 bg-blue-600"></div>
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">{collaborationsData.header.tag}</span>
            <div className="w-12 h-0.5 bg-blue-600"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            {collaborationsData.header.title}
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed font-light">
            {collaborationsData.header.description}
            <span className="font-semibold text-foreground"> community outreach</span> and 
            <span className="font-semibold text-foreground"> service delivery</span>.
          </p>
        </div>

        {/* Nammauru Nammahemme Collaboration */}
        {collaborationsData.collaborations.map((collaboration) => (
          <div key={collaboration.id} className="bg-card rounded-2xl shadow-lg p-8 md:p-12 mb-16">
            {/* Image at the top */}
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl w-64 h-64 flex items-center justify-center">
                <img 
                  src={collaboration.image} 
                  alt={`${collaboration.name} Logo`}
                  className="w-48 h-48 object-contain rounded-xl"
                  onError={(e) => {
                    // Handle missing image by showing placeholder
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                <div 
                  className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 flex items-center justify-center text-gray-500"
                  style={{ display: 'none' }}
                >
                  Collaboration Logo
                </div>
              </div>
            </div>
            
            {/* Collaboration details */}
            <div className="text-left max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-foreground mb-6 text-center">{collaboration.name}</h3>
              <div className="space-y-6">
                <p className="text-foreground text-lg leading-relaxed">
                  {collaboration.description}
                </p>
                <p className="text-foreground text-lg leading-relaxed">
                  {collaboration.detailedDescription}
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <a 
                  href={collaboration.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md"
                >
                  Visit Website
                </a>
                <a 
                  href={`https://wa.me/919380586399?text=${encodeURIComponent(collaboration.whatsappMessage)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 shadow-md"
                >
                  WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Collaboration Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {collaborationsData.benefits.map((benefit) => (
            <div key={benefit.id} className="card bg-card rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={benefit.icon}></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 shadow-xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{collaborationsData.cta.title}</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
            {collaborationsData.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={`https://wa.me/919380586399?text=${encodeURIComponent(collaborationsData.cta.whatsappMessage)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-md text-center"
            >
              Start a Conversation
            </a>
            <a 
              href="/contact" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300 text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationsPage;