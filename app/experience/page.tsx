"use client";

import { useState } from "react";

const ExperiencePage = () => {
  const experiences = [
    {
      id: 1,
      organization: "Kotak Securities Ltd",
      location: "Bangalore, Karnataka",
      jobRole: "Full-time Employment",
      aboutCompany: "Leading stock broking company providing comprehensive equity, derivatives trading, and wealth management services with pan-India presence",
      designation: "Banca Channel Manager",
      products: "Demat Accounts, Mutual Funds, Insurance Products, Equity Trading, Portfolio Management Services",
      jobDuration: "Nov 2021 - Present",
      durationYears: "2+ years",
      current: true,
      achievements: [
        "Spearheaded strategic partnerships with banking channels, driving 35% growth in channel revenue",
        "Managed and expanded banca distribution network across Karnataka region",
        "Achieved 120% of AUM targets through effective cross-selling of mutual funds and insurance products",
        "Implemented training programs for 50+ banking partners on financial products",
        "Led team of 8 relationship managers to deliver consistent business growth"
      ],
      skills: ["Channel Management", "Strategic Partnerships", "Wealth Management", "Team Leadership", "Sales Strategy", "Relationship Banking"],
      impact: "Significantly enhanced channel productivity and partner engagement"
    },
    {
      id: 2,
      organization: "Motilal Oswal Financial Services Ltd",
      location: "Bangalore, Karnataka",
      jobRole: "Full-time Employment",
      aboutCompany: "Premier financial services firm offering stock broking, investment advisory, and wealth management solutions with strong retail presence",
      designation: "Relationship Manager",
      products: "Demat Accounts, Life Insurance, Health Insurance, Mutual Funds, Equity Investments, Portfolio Advisory",
      jobDuration: "Oct 2019 - Aug 2021",
      durationYears: "1 year 10 months",
      achievements: [
        "Managed portfolio of 200+ HNI clients with total AUM of ₹50+ crores",
        "Achieved 150% of quarterly sales targets through strategic client acquisition",
        "Expanded client base by 35% year-over-year through referral programs",
        "Cross-sold insurance and mutual fund products to 80% of existing equity clients",
        "Recognized as 'Top Performer' for 3 consecutive quarters"
      ],
      skills: ["HNI Relationship", "Portfolio Management", "Investment Advisory", "Cross-selling", "Wealth Solutions", "Client Retention"],
      impact: "Established strong track record in HNI client management and wealth advisory"
    },
    {
      id: 3,
      organization: "Indiabulls Ventures Ltd",
      location: "Bangalore, Karnataka",
      jobRole: "Full-time Employment",
      aboutCompany: "Financial services company specializing in stock broking, wealth management, and investment solutions with nationwide operations",
      designation: "Assistant Manager",
      products: "Demat Accounts, Mutual Funds, Equity Trading, Investment Products, Wealth Management",
      jobDuration: "Nov 2018 - May 2020",
      durationYears: "1 year 6 months",
      achievements: [
        "Promoted to Assistant Manager within first year for exceptional performance",
        "Managed team of 8 sales executives, improving team productivity by 40%",
        "Implemented streamlined client onboarding process reducing turnaround time by 30%",
        "Increased customer retention rate by 25% through enhanced service delivery",
        "Conducted weekly training sessions on market updates and product knowledge"
      ],
      skills: ["Team Management", "Sales Operations", "Process Improvement", "Training & Development", "Client Onboarding"],
      impact: "Demonstrated leadership capabilities and process optimization skills"
    },
    {
      id: 4,
      organization: "Angel Broking Pvt Ltd",
      location: "Bangalore, Karnataka",
      jobRole: "Full-time Employment",
      aboutCompany: "One of India's leading retail stock broking houses offering equity trading and investment services with strong technology platform",
      designation: "Relationship Manager",
      products: "Demat Accounts, Life Insurance, Health Insurance, Mutual Funds, Trading Platforms, Investment Advisory",
      jobDuration: "Jul 2017 - Oct 2018",
      durationYears: "1 year 3 months",
      achievements: [
        "Consistently ranked in top 10% of performers nationwide",
        "Managed portfolio of 500+ retail and HNI clients",
        "Achieved 130% of annual sales targets through effective client acquisition",
        "Successfully cross-sold insurance products to 60% of equity client base",
        "Developed strong expertise in equity, derivatives, and mutual funds"
      ],
      skills: ["Financial Advisory", "Client Acquisition", "Retail Broking", "Product Knowledge", "Customer Service"],
      impact: "Built strong foundation in retail broking and client relationship management"
    },
    {
      id: 5,
      organization: "Aditya Trading Solution Pvt Ltd",
      location: "Gulbarga, Karnataka",
      jobRole: "Full-time Employment",
      aboutCompany: "Regional stock broking firm providing equity trading and investment services with focus on retail investors",
      designation: "Senior Sales Executive",
      products: "Demat Accounts, Equity Trading, Investment Advisory, Trading Platforms",
      jobDuration: "Apr 2015 - Jul 2017",
      durationYears: "2 years 3 months",
      achievements: [
        "Started career in financial services with focus on client acquisition",
        "Exceeded sales targets by 40% in first year of operations",
        "Built and maintained relationships with 200+ retail clients",
        "Rapidly promoted from Sales Executive to Senior Sales Executive",
        "Trained and mentored 5 new sales executives on product knowledge and sales techniques"
      ],
      skills: ["Sales Execution", "Market Research", "Client Servicing", "Trading Platforms", "Financial Markets"],
      impact: "Launched successful career in financial services with strong sales foundation"
    }
  ];

  const [selectedExp, setSelectedExp] = useState(experiences[0]);

  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-0.5 bg-blue-600"></div>
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Professional Journey</span>
            <div className="w-12 h-0.5 bg-blue-600"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
            Work Experience
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Progressive career growth across 
            <span className="font-semibold text-gray-900"> premier financial institutions</span>, 
            demonstrating consistent advancement in 
            <span className="font-semibold text-gray-900"> sales leadership</span> and 
            <span className="font-semibold text-gray-900"> channel management</span>.
          </p>
        </div>

        {/* Career Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="card rounded-2xl p-6 text-center shadow-lg">
            <div className="text-2xl font-bold text-foreground mb-2">8+ Years</div>
            <div className="text-foreground font-medium">Total Experience</div>
          </div>
          <div className="card rounded-2xl p-6 text-center shadow-lg">
            <div className="text-2xl font-bold text-foreground mb-2">5 Leading</div>
            <div className="text-foreground font-medium">Financial Institutions</div>
          </div>
          <div className="card rounded-2xl p-6 text-center shadow-lg">
            <div className="text-2xl font-bold text-foreground mb-2">From Sales</div>
            <div className="text-foreground font-medium">To Channel Leadership</div>
          </div>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* LEFT SIDE – EXPERIENCE SELECTOR */}
          <div className="lg:col-span-1">
            <div className="card rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Career Timeline
              </h3>
              <div className="space-y-3">
                {experiences.map((exp) => (
                  <button
                    key={exp.id}
                    onClick={() => setSelectedExp(exp)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                      selectedExp.id === exp.id
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-[1.02] border-blue-500"
                        : "bg-white/50 text-foreground hover:bg-white hover:shadow-md border-gray-200"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-sm leading-tight">{exp.designation}</h4>
                      {exp.current && (
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          selectedExp.id === exp.id 
                            ? "bg-white/20 text-white" 
                            : "bg-green-100 text-green-800"
                        }`}>
                          Current
                        </span>
                      )}
                    </div>
                    <p className={`text-xs ${selectedExp.id === exp.id ? "opacity-90" : "opacity-80"} mb-1`}>{exp.organization}</p>
                    <p className={`text-xs font-medium ${selectedExp.id === exp.id ? "opacity-90" : "opacity-80"}`}>{exp.jobDuration}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – DETAILED VIEW */}
          <div className="lg:col-span-3">
            <div className="card rounded-2xl shadow-xl overflow-hidden">
              
              {/* Header Section */}
              <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-2">{selectedExp.designation}</h2>
                    <p className="text-blue-100 text-lg">{selectedExp.organization}</p>
                    <p className="text-blue-200">{selectedExp.location}</p>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6 text-right">
                    <p className="text-blue-100 font-medium">{selectedExp.jobRole}</p>
                    <p className="text-white font-semibold text-lg">{selectedExp.jobDuration}</p>
                    <p className="text-blue-200 text-sm">{selectedExp.durationYears}</p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Organization Details</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{selectedExp.organization}</h4>
                        <p className="text-foreground text-sm mb-2">{selectedExp.location}</p>
                        <p className="text-foreground text-sm">{selectedExp.aboutCompany}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedExp.skills.map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Role Overview</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-foreground text-sm mb-1">{selectedExp.jobRole}</p>
                        <p className="text-foreground font-semibold">{selectedExp.designation}</p>
                        <p className="text-foreground text-sm mt-1">{selectedExp.jobDuration} • {selectedExp.durationYears}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Products</h4>
                        <p className="text-foreground text-sm">{selectedExp.products}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Key Achievements</h3>
                  <ul className="space-y-3">
                    {selectedExp.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1.5">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <p className="ml-3 text-foreground">{achievement}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Impact & Value Creation</h3>
                  <p className="text-foreground italic">
                    "{selectedExp.impact}"
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

export default ExperiencePage;