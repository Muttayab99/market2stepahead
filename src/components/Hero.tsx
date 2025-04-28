
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    });

    const childElements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    childElements?.forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-to-br from-white to-agency-softgray"
      ref={heroRef}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-agency-purple/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-[5%] w-80 h-80 rounded-full bg-agency-turquoise/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 md:space-y-8">
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-agency-purple/10 text-agency-purple animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
              Digital Advertisement Agency
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
              We Create <br /><span className="gradient-text">Digital Experiences</span> <br />That Matter
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
              Transform your brand with cutting-edge digital advertising solutions that drive engagement and deliver measurable results.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400">
              <Button size="lg" className="bg-agency-purple hover:bg-agency-purple/90 text-white">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="border-agency-purple text-agency-purple hover:bg-agency-purple/10">
                Our Work
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block relative animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-500">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-agency-turquoise/20 rounded-xl animate-float"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-agency-purple/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-4 w-16 h-16 bg-agency-pink/20 rounded-lg animate-float" style={{ animationDelay: '2s' }}></div>
              
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                  alt="Digital Advertisement" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white font-bold">Digital Campaigns That Convert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
