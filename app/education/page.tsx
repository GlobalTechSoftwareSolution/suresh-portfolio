const EducationPage = () => {
  const education = [
    {
      id: 1,
      degree: "Master of Business Administration (MBA)",
      specialization: "Finance & Marketing",
      university: "Karnataka University Dharwad",
      college: "Chetan Business School, Hubli",
      duration: "2013 - 2015",
      year: "2015",
      score: "First Class",
      achievements: [
        "Specialized in Financial Management and Marketing Strategy",
        "Participated in business case competitions and industry workshops",
        "Developed comprehensive understanding of business operations and financial markets",
        "Completed projects on market analysis and financial planning"
      ],
      skills: ["Financial Analysis", "Strategic Planning", "Market Research", "Business Development", "Leadership"],
      accreditation: "NAAC A+ Accredited University",
      relevance: "Foundation for financial services career and strategic business management"
    },
    {
      id: 2,
      degree: "Bachelor of Arts (BA)",
      specialization: "Economics & Business Studies",
      university: "Gulbarga University, Gulbarga",
      college: "Government First Grade College, Jewargi",
      duration: "2009 - 2012",
      year: "2012",
      score: "First Class",
      achievements: [
        "Developed strong analytical foundation in economics and business principles",
        "Participated in academic seminars and economic forums",
        "Built foundational knowledge of economic theories and business environments",
        "Engaged in research projects on local economic development"
      ],
      skills: ["Economic Analysis", "Research Methodology", "Business Fundamentals", "Critical Thinking", "Communication"],
      accreditation: "UGC Recognized University",
      relevance: "Fundamental understanding of economic principles and business operations"
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "NISM Series VIII: Equity Derivatives Certification",
      issuer: "National Institute of Securities Markets",
      year: "2020",
      validity: "Lifetime"
    },
    {
      id: 2,
      name: "NISM Series V-A: Mutual Fund Distributors Certification",
      issuer: "National Institute of Securities Markets",
      year: "2019",
      validity: "Lifetime"
    },
    {
      id: 3,
      name: "IRDA Insurance Certification",
      issuer: "Insurance Regulatory and Development Authority",
      year: "2018",
      validity: "Lifetime"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-0.5 bg-blue-600"></div>
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Academic Credentials</span>
            <div className="w-12 h-0.5 bg-blue-600"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
            Education & Certifications
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Strong academic foundation complemented by professional certifications, 
            providing the <span className="font-semibold text-gray-900">theoretical knowledge</span> and 
            <span className="font-semibold text-gray-900"> regulatory expertise</span> essential for 
            excellence in financial services leadership.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <div 
              key={edu.id}
              className="group card rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
            >
              {/* Degree Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{edu.degree}</h3>
                    {edu.specialization && (
                      <p className="text-blue-100 text-sm font-medium">{edu.specialization}</p>
                    )}
                  </div>
                  <div className="mt-2 lg:mt-0 lg:ml-4">
                    <span className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                      {edu.year}
                    </span>
                  </div>
                </div>
                <div className="flex items-center text-blue-100 text-sm">
                  <span className="mr-4">🎓 {edu.score}</span>
                  <span>📅 {edu.duration}</span>
                </div>
              </div>

              {/* Institution Details */}
              <div className="p-6 border-b border-gray-100">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-foreground font-semibold min-w-20">University:</span>
                    <span className="text-foreground ml-2">{edu.university}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-foreground font-semibold min-w-20">College:</span>
                    <span className="text-foreground ml-2">{edu.college}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-foreground font-semibold min-w-20">Accreditation:</span>
                    <span className="text-foreground ml-2 text-sm">{edu.accreditation}</span>
                  </div>
                </div>
              </div>

              {/* Key Learnings & Skills */}
              <div className="p-6">
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Key Academic Achievements
                </h4>
                <ul className="space-y-2 mb-4">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start text-foreground text-sm">
                      <span className="text-blue-600 mr-2 mt-1">▸</span>
                      {achievement}
                    </li>
                  ))}
                </ul>

                <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                  Skills Developed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium border border-blue-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Professional Relevance */}
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-foreground">
                    <span className="font-semibold">Career Relevance:</span> {edu.relevance}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default EducationPage;