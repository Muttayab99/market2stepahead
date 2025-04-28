
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
        <path d="M7 7h10"></path>
        <path d="M7 12h10"></path>
        <path d="M7 17h10"></path>
      </svg>
    ),
    title: "Social Media Management",
    description: "Engage your audience with strategic content creation and community building across platforms."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="m7 11 2-2-2-2"></path>
        <path d="M11 13h4"></path>
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
      </svg>
    ),
    title: "PPC Advertising",
    description: "Maximize ROI with targeted pay-per-click campaigns that deliver measurable results."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
      </svg>
    ),
    title: "Content Creation",
    description: "Captivate your audience with compelling storytelling and professional content production."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ),
    title: "Brand Strategy",
    description: "Develop a distinctive brand identity that resonates with your target audience and sets you apart."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="m16 12-4-4-4 4"></path>
        <path d="M12 16V8"></path>
      </svg>
    ),
    title: "SEO Optimization",
    description: "Boost visibility and organic traffic with expert search engine optimization strategies."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
      </svg>
    ),
    title: "Analytics & Reporting",
    description: "Gain actionable insights with comprehensive performance tracking and detailed reporting."
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-agency-softgray">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Digital Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-agency-purple to-agency-turquoise mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Comprehensive solutions to elevate your brand in the digital landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-card border-none">
              <CardHeader>
                <div className="mb-4 text-agency-purple">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
