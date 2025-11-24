"use client";

import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    company: "",
    phone: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const phoneNumber = "919632064020"; // <-- Your WhatsApp number with ISD code

      const whatsappMessage = `
New Contact Inquiry

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not Provided"}
Message: ${formData.message}
`;

      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      window.open(whatsappURL, "_blank");

      // Reset Form
      setFormData({
        name: "",
        email: "",
        subject: "",
        company: "",
        phone: "",
        message: "",
      });

      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError("Failed to send message via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "sureshnaribol82@gmail.com",
      description: "I'll respond within 24 hours"
    },
    {
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      value: "+91 9632064020",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location",
      value: "Kattisangavi(Post)\nJewargi (TQ)\nGulbarga(Dist)\nPincode-585310",
    }
  ];

  const inquiryTypes = [
    "Career Opportunity",
    "Business Collaboration",
    "Investment Advisory",
    "Sales Leadership Role",
    "Channel Partnership",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-0.5 bg-blue-600"></div>
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Get In Touch</span>
            <div className="w-12 h-0.5 bg-blue-600"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Ready to discuss how my 
            <span className="font-semibold text-foreground"> financial services expertise</span> and 
            <span className="font-semibold text-foreground"> sales leadership</span> can drive growth for your organization?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              className="group card rounded-2xl p-6 shadow-lg hover:shadow-xl border border-white/50 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-xl">
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{method.title}</h3>
                  <p className="text-foreground font-medium">{method.value}</p>
                  <p className="text-sm text-foreground mt-1">{method.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Enhanced Contact Info Section */}
            <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white p-8 lg:p-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Start a Conversation</h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Let's discuss how we can collaborate to drive business growth and create exceptional value in financial services.
                </p>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">Professional Focus Areas</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Banca Channel Management</span>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Wealth Management</span>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Sales Leadership</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Response Time</h3>
                    <p className="text-blue-100">Typically within 24 hours for professional inquiries</p>
                  </div>
                </div>
              </div>

              {/* Professional Statement */}
              <div className="border-t border-white/20 pt-6">
                <blockquote className="text-blue-100 italic text-lg leading-relaxed">
                  "I am passionate about driving revenue growth through strategic partnerships and elite relationship management. 
                  Let's connect to explore how we can achieve exceptional results together."
                </blockquote>
                <div className="flex items-center mt-4">
                  <div className="w-8 h-0.5 bg-blue-400 mr-3"></div>
                  <span className="text-blue-200 font-medium">Suresh S</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced Contact Form Section */}
            <div className="p-8 lg:p-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">Send a Message</h2>
                <p className="text-foreground">
                  Fill out the form below and I'll get back to you promptly.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6 text-foreground">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 bg-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 bg-transparent"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 bg-transparent"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>
                
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 resize-none bg-transparent"
                    placeholder="Please describe your inquiry in detail..."
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg text-white font-semibold transition duration-300 shadow-lg ${
                      isSubmitting 
                        ? "bg-gray-400 cursor-not-allowed" 
                        : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:shadow-xl transform hover:-translate-y-0.5"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                  
                  {submitSuccess && (
                    <div className="mt-4 p-4 bg-green-50 text-green-800 rounded-lg border border-green-200">
                      <div className="flex items-center">
                        <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <p className="font-semibold">Message sent successfully!</p>
                          <p className="text-sm">Thank you for your inquiry. I'll respond within 24 hours.</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {submitError && (
                    <div className="mt-4 p-4 bg-red-50 text-red-800 rounded-lg border border-red-200">
                      <div className="flex items-center">
                        <svg className="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{submitError}</span>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;