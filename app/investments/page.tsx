import Link from "next/link";

const InvestmentsPage = () => {
  const investmentOptions = [
    {
      title: "Mutual Funds",
      description: "Diversified investment portfolios managed by professional fund managers. Choose from equity, debt, hybrid, and sector-specific funds to meet your financial goals.",
      features: [
        "Expert Fund Management",
        "Diversification Benefits",
        "Flexible Investment Options",
        "Transparent Reporting"
      ]
    },
    {
      title: "SIP (Systematic Investment Plan)",
      description: "Invest a fixed amount regularly in mutual funds to build wealth systematically. Benefit from rupee cost averaging and the power of compounding.",
      features: [
        "Disciplined Investing Approach",
        "Rupee Cost Averaging",
        "Flexible Amount & Frequency",
        "Power of Compounding"
      ]
    },
    {
      title: "Insurance",
      description: "Comprehensive insurance solutions to protect your financial future. Choose from life insurance, health insurance, and general insurance products.",
      features: [
        "Life Coverage Protection",
        "Health & Medical Benefits",
        "Tax Saving Advantages",
        "Customizable Plans"
      ]
    },
    {
      title: "Trading",
      description: "Active participation in stock markets with expert guidance. Access real-time market data, research reports, and trading platforms for informed decisions.",
      features: [
        "Equity & Commodity Trading",
        "Real-time Market Data",
        "Advanced Trading Platforms",
        "Research & Analytics"
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
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Investment Solutions</span>
            <div className="w-12 h-0.5 bg-blue-600"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Wealth Building Options
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Strategic investment avenues to grow your wealth and secure your financial future. 
            <span className="font-semibold text-foreground"> Professional guidance</span> and 
            <span className="font-semibold text-foreground"> tailored solutions</span> for all your investment needs.
          </p>
        </div>

        {/* Investments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {investmentOptions.map((investment, index) => (
            <div 
              key={index} 
              className="card bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              <div className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-white font-bold text-2xl">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{investment.title}</h3>
                  <p className="text-foreground font-light leading-relaxed">{investment.description}</p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {investment.features.map((feature, featureIndex) => (
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
                      Explore Options
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

export default InvestmentsPage;