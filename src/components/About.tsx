
import React from 'react';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section bg-agency-softgray">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-white p-3 rounded-xl shadow-lg rotate-3 transform hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800" 
                alt="Our Team" 
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-agency-purple p-4 rounded-lg shadow-xl">
              <p className="text-white font-bold text-xl">10+ Years</p>
              <p className="text-white/80 text-sm">In the industry</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About PixelPro</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-agency-purple to-agency-turquoise mb-6"></div>
            
            <p className="text-lg">
              We are a forward-thinking digital advertisement agency dedicated to transforming brands through innovative strategies and creative excellence.
            </p>
            
            <p className="text-gray-600">
              Founded with a passion for digital innovation, PixelPro has evolved into a full-service agency with a track record of delivering impactful campaigns that drive measurable results. Our team of experts combines industry knowledge with creative thinking to develop tailored solutions that help our clients thrive in the digital landscape.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-lg p-4 shadow-sm hover-card">
                <h3 className="text-agency-purple font-bold text-lg mb-2">Our Mission</h3>
                <p className="text-gray-600">To empower brands through strategic digital innovation.</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm hover-card">
                <h3 className="text-agency-purple font-bold text-lg mb-2">Our Vision</h3>
                <p className="text-gray-600">To be the catalyst for digital transformation across industries.</p>
              </div>
            </div>
            
            <Button className="bg-agency-purple hover:bg-agency-purple/90 text-white mt-6">Learn More About Us</Button>
          </div>
        </div>
        
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-agency-purple to-agency-turquoise mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Our approach is rooted in understanding your unique needs and goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover-card">
              <div className="w-14 h-14 bg-agency-purple/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-agency-purple">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Strategic Approach</h3>
              <p className="text-gray-600">
                We develop data-driven strategies that align with your business objectives and target audience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover-card">
              <div className="w-14 h-14 bg-agency-purple/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-agency-purple">
                  <path d="m12 14 4-4"></path>
                  <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Creative Excellence</h3>
              <p className="text-gray-600">
                Our team of talented creatives delivers innovative solutions that captivate and engage your audience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover-card">
              <div className="w-14 h-14 bg-agency-purple/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-agency-purple">
                  <path d="M12 2v4"></path>
                  <path d="m4.93 4.93 2.83 2.83"></path>
                  <path d="M2 12h4"></path>
                  <path d="m4.93 19.07 2.83-2.83"></path>
                  <path d="M12 18v4"></path>
                  <path d="m19.07 19.07-2.83-2.83"></path>
                  <path d="M18 12h4"></path>
                  <path d="m19.07 4.93-2.83 2.83"></path>
                  <circle cx="12" cy="12" r="5"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Measurable Results</h3>
              <p className="text-gray-600">
                We focus on delivering tangible outcomes and transparent reporting to demonstrate ROI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
