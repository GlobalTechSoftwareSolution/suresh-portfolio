import Link from "next/link";

const ServicesPage = () => {
  const loanTypes = [
    {
      title: "Home Loan",
      description: "Finance your dream home with our competitive home loan rates. Get flexible repayment options and quick approval.",
      features: [
        "Competitive interest rates",
        "Loan amount up to 80% of property value",
        "Flexible tenure up to 30 years",
        "Quick processing and disbursal"
      ]
    },
    {
      title: "Gold Loan",
      description: "Instant cash against your gold ornaments with minimal documentation and doorstep service available.",
      features: [
        "Up to 75% loan against gold value",
        "Minimal documentation required",
        "Doorstep service available",
        "No income proof required"
      ]
    },
    {
      title: "Personal Loan",
      description: "Meet your personal financial needs with our unsecured personal loans for various purposes.",
      features: [
        "Unsecured loan facility",
        "Quick disbursal within 48 hours",
        "Loan amount up to ₹25 lakhs",
        "Flexible repayment options"
      ]
    },
    {
      title: "Business Loan",
      description: "Fuel your business growth with our tailored financing solutions for entrepreneurs and enterprises.",
      features: [
        "Loan amount up to ₹50 lakhs",
        "Collateral-free options available",
        "Simplified documentation process",
        "Competitive interest rates"
      ]
    },
    {
      title: "Vehicle Loan",
      description: "Drive your dream car or bike with our easy financing options for two-wheelers and four-wheelers.",
      features: [
        "Financing up to 90% of vehicle cost",
        "Multi-brand vehicle financing",
        "Attractive interest rates",
        "Flexible repayment tenure"
      ]
    },
    {
      title: "Education Loan",
      description: "Support your educational aspirations with our comprehensive education loan schemes for domestic and international studies.",
      features: [
        "Coverage up to 100% of course fees",
        "Moratorium period during course duration",
        "No collateral for loans up to ₹7.5 lakhs",
        "Special discounts for girl students"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-0.5 bg-blue-600"></div>
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Our Services</span>
            <div className="w-12 h-0.5 bg-blue-600"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Financial Solutions
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Comprehensive loan products tailored to meet your diverse financial needs. 
            <span className="font-semibold text-foreground"> Expert guidance</span> and 
            <span className="font-semibold text-foreground"> competitive rates</span> for all your borrowing requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {loanTypes.map((loan, index) => (
            <div 
              key={index} 
              className="card bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              <div className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-white font-bold text-2xl">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{loan.title}</h3>
                  <p className="text-foreground font-light leading-relaxed">{loan.description}</p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Key Features:</h4>
                  <ul className="space-y-2">
                    {loan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                        </div>
                        <span className="ml-3 text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8">
                  <Link href="/contact">
                    <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg">
                      Apply Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;