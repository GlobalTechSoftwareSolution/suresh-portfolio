import Link from 'next/link';


const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Summer Internship Program (2013)",
      subtitle: "Project Title: \"Promotional Strategy of Local Candy Products\"",
      type: "Internship",
      company: "Vinu's Confectionery, Hubli",
      role: "Marketing Executive - FMCG Sector",
      description: "Comprehensive market research and sales strategy development for local candy products in the competitive FMCG landscape.",
      achievements: [
        "Successfully contributed to the research problem through exhaustive exploration on the given title",
        "Achieved the Sales Targets as fixed up by my Company Guide",
        "Developed innovative promotional strategies for local candy market penetration",
        "Conducted field research and consumer behavior analysis"
      ],
      skills: ["Marketing Research", "Sales Strategy", "FMCG", "Consumer Behavior", "Market Analysis", "Promotional Planning"],
      duration: "3 Months",
      category: "professional",
      impact: "Direct contribution to sales growth and market expansion strategies"
    },
    {
      id: 2,
      title: "Financial Management Project",
      subtitle: "Study of Journal Entry & Ledger Accounts",
      type: "Academic Research",
      company: "Krishna Trader's, Gokul Road, Hubli",
      role: "Financial Analyst",
      description: "In-depth analysis of accounting practices and financial management systems in small-scale trading businesses.",
      achievements: [
        "Comprehensive study of journal entries and ledger account management",
        "Analysis of financial recording and reporting systems",
        "Identification of accounting best practices for small businesses",
        "Developed recommendations for financial process improvement"
      ],
      skills: ["Financial Analysis", "Accounting", "Ledger Management", "Financial Reporting", "Process Improvement"],
      duration: "2 Months",
      category: "academic",
      impact: "Enhanced understanding of practical financial management in trading businesses"
    },
    {
      id: 3,
      title: "Telecom Sector Survey",
      subtitle: "Comparative Analysis of Service Providers",
      type: "Market Research",
      company: "Idea vs Airtel Comparative Study",
      role: "Research Analyst",
      description: "Comprehensive comparative analysis of telecom service providers focusing on market positioning and customer satisfaction.",
      achievements: [
        "Conducted comparative analysis of service quality between Idea and Airtel",
        "Surveyed customer satisfaction levels and service preferences",
        "Analyzed market positioning strategies of both telecom giants",
        "Developed insights into competitive advantages and service gaps"
      ],
      skills: ["Market Research", "Competitive Analysis", "Customer Surveys", "Data Analysis", "Telecom Sector"],
      duration: "1 Month",
      category: "academic",
      impact: "Provided valuable insights into telecom service provider competition and customer preferences"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-0.5 bg-blue-600"></div>
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Professional Projects</span>
            <div className="w-12 h-0.5 bg-blue-600"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
            Projects & Research
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Academic and Professional Projects showcasing my 
            <span className="font-semibold text-gray-900"> analytical capabilities</span>, 
            <span className="font-semibold text-gray-900"> research expertise</span>, and 
            <span className="font-semibold text-gray-900"> strategic thinking</span>.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group card rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.type === 'Internship' 
                      ? 'bg-green-100 text-green-800' 
                      : project.type === 'Academic Research'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {project.type}
                  </span>
                  <span className="text-xs text-foreground font-medium">{project.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground font-medium mb-1">{project.company}</p>
                <p className="text-xs text-foreground">{project.role}</p>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Key Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.slice(0, 3).map((achievement, idx) => (
                      <li key={idx} className="text-xs text-foreground flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.skills.slice(0, 4).map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                  {project.skills.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-full text-xs">
                      +{project.skills.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Project Footer */}
              <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-foreground font-medium">Impact</span>
                  <span className="text-xs text-foreground font-semibold text-right max-w-[200px]">
                    {project.impact}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in Collaborating?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how my research and analytical capabilities can contribute to your organization's success.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              <Link href="/contact">Get In Touch</Link>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectsPage;