
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const projects = [
  {
    id: 1,
    title: "Revitalize Campaign",
    client: "EcoFriendly Products",
    category: "social-media",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800",
    description: "Comprehensive social media strategy that increased engagement by 150%"
  },
  {
    id: 2,
    title: "Tech Launch Series",
    client: "InnovateTech",
    category: "branding",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
    description: "Award-winning brand identity and launch campaign for a tech startup"
  },
  {
    id: 3,
    title: "Revenue Accelerator",
    client: "GrowthFinance",
    category: "advertising",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800",
    description: "PPC campaign that delivered 200% ROI within the first month"
  },
  {
    id: 4,
    title: "Global Reach Initiative",
    client: "WorldTravels",
    category: "social-media",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    description: "Multi-platform content strategy that expanded audience reach by 75%"
  },
  {
    id: 5,
    title: "Market Disruptor",
    client: "NextGen Solutions",
    category: "advertising",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    description: "Integrated campaign that established brand leadership in a new market segment"
  },
  {
    id: 6,
    title: "Brand Evolution",
    client: "Heritage Designs",
    category: "branding",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    description: "Complete brand refresh that honored legacy while attracting new audiences"
  }
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="work" className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-agency-purple to-agency-turquoise mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Showcasing our creative solutions and successful collaborations
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="grid grid-cols-4 max-w-md mx-auto">
            <TabsTrigger value="all" onClick={() => setActiveTab("all")}>All</TabsTrigger>
            <TabsTrigger value="branding" onClick={() => setActiveTab("branding")}>Branding</TabsTrigger>
            <TabsTrigger value="advertising" onClick={() => setActiveTab("advertising")}>Ads</TabsTrigger>
            <TabsTrigger value="social-media" onClick={() => setActiveTab("social-media")}>Social</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl hover-card h-72">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
                <p className="text-white/80 text-sm mb-2">{project.client}</p>
                <p className="text-white/70 text-sm mb-4 hidden group-hover:block">{project.description}</p>
                <Button variant="outline" size="sm" className="w-full border-white text-white hover:bg-white hover:text-agency-charcoal transition-colors">
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="border-agency-purple text-agency-purple hover:bg-agency-purple/10">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
