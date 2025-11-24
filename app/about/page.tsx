'use client'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-0.5 bg-blue-600"></div>
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Professional Profile</span>
            <div className="w-12 h-0.5 bg-blue-600"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            About Me
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Senior Financial Services Manager with 8+ years of expertise in driving 
            <span className="font-semibold text-foreground"> strategic sales leadership</span> and 
            <span className="font-semibold text-foreground"> elite relationship management</span>.
          </p>
        </div>

        {/* Enhanced Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          {/* Images Section - Two images on the left side */}
          <div className="space-y-8">
            {/* Main Profile Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative w-full h-80 card rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                <img 
                  src="/image.png" 
                  alt="Suresh S - Senior Financial Services Executive"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>
            </div>
            
            {/* Scanner Image with Text */}
            <div className="space-y-4 mt-20">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground">Scan this to contact</h3>
                <p className="text-sm text-foreground/70 mt-2 mb-10">Quick connect via QR code</p>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative w-full h-80 card rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                  <img 
                    src="/images/scanner.jpg" 
                    alt="Professional Scanner"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-out"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      if (target.nextElementSibling) {
                        (target.nextElementSibling as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                  <div 
                    className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center text-gray-500"
                    style={{ display: 'none' }}
                  >
                    Scanner Image
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Content Section - Text on the right side */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Professional Identity */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-3">Suresh S</h2>
                <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 rounded-full border border-blue-600/20">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <p className="text-blue-700 font-semibold text-lg">
                    Banca Channel Manager | Kotak Securities
                  </p>
                </div>
              </div>
              
              <div className="prose prose-lg text-foreground space-y-6">
                <p className="text-lg leading-relaxed font-light">
                  Accomplished financial services professional with a demonstrated history of excellence in 
                  <span className="font-semibold text-foreground"> sales leadership</span> and 
                  <span className="font-semibold text-foreground"> client relationship management</span>. 
                  Currently spearheading strategic partnerships and business expansion initiatives at Kotak Securities.
                </p>
                
                <p className="text-lg leading-relaxed font-light">
                  Proven track record across premier financial institutions including 
                  <span className="font-semibold text-foreground"> Motilal Oswal</span>, 
                  <span className="font-semibold text-foreground"> Indiabulls Ventures</span>, and 
                  <span className="font-semibold text-foreground"> Angel Broking</span>. 
                  MBA graduate from Karnataka University with comprehensive expertise in financial markets and investment products.
                </p>
              </div>
            </div>

            {/* Enhanced Core Competencies */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground flex items-center">
                <span className="w-8 h-0.5 bg-blue-600 mr-4"></span>
                Core Competencies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Strategic Business Development",
                  "Client Relationship Management",
                  "Financial Product Expertise",
                  "Team Leadership & Mentorship",
                  "Revenue Growth Strategy",
                  "Partnership Management",
                  "Market Analysis & Research",
                  "Investment Advisory"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform group-hover:scale-125 transition duration-300"></div>
                    <span className="text-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Stats with Animation */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { number: "8+", label: "Years Experience", suffix: "in Finance" },
                { number: "5+", label: "Leading Firms", suffix: "Worked With" },
                { number: "1000+", label: "Clients Served", suffix: "& Growing" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-8 card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-2">
                  <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors duration-500">
                    {stat.number}
                  </div>
                  <div className="text-foreground font-medium">{stat.label}</div>
                  <div className="text-sm text-foreground mt-1">{stat.suffix}</div>
                </div>
              ))}
            </div>

            {/* Career Highlights */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground flex items-center">
                <span className="w-8 h-0.5 bg-blue-600 mr-4"></span>
                Career Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card p-6 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-foreground mb-3">Leadership Excellence</h4>
                  <p className="text-foreground text-sm leading-relaxed">
                    Successfully led cross-functional teams to achieve consistent revenue targets and expand market presence across multiple financial institutions.
                  </p>
                </div>
                <div className="card p-6 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-foreground mb-3">Strategic Growth</h4>
                  <p className="text-foreground text-sm leading-relaxed">
                    Developed and implemented growth strategies that resulted in significant business expansion and strengthened client relationships.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;