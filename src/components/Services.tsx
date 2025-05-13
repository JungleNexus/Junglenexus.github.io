
import React from 'react';
import { Package, ArrowRight, Users, Chart } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ServicesCard = ({ title, description, icon, isJungleStyle = true }) => {
  const Icon = icon;
  
  return (
    <div className={`${isJungleStyle ? 'border-jungle-red/20' : 'border-tech-blue/20'} border-2 rounded-xl p-6 md:p-8 bg-white shadow-sm hover:shadow-md transition-shadow group`}>
      <div className={`${isJungleStyle ? 'bg-jungle-gradient' : 'bg-tech-gradient'} w-14 h-14 rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
        <Icon className="text-white" size={24} />
      </div>
      
      <h3 className="text-xl md:text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-neutral-charcoal/80 mb-6">{description}</p>
      
      <a href="#contact" className={`inline-flex items-center text-sm font-medium ${isJungleStyle ? 'text-jungle-red' : 'text-tech-blue'} hover:underline`}>
        Learn more <ArrowRight className="ml-1 h-4 w-4" />
      </a>
    </div>
  );
};

const Services = () => {
  const servicesData = [
    {
      title: "Bulk Purchasing, Packaging & Distribution",
      description: "We handle volume purchasing, custom packaging solutions, and efficient distribution across major marketplaces.",
      icon: Package,
      isJungleStyle: true
    },
    {
      title: "Strategic Inventory Management",
      description: "Our advanced forecasting and inventory control systems ensure optimal stock levels and minimize costs.",
      icon: Chart,
      isJungleStyle: false
    },
    {
      title: "Marketing & Sales Support",
      description: "Comprehensive marketplace optimization, brand positioning, and conversion-focused listing management.",
      icon: Users,
      isJungleStyle: true
    },
    {
      title: "Full-Service, Brand-Aligned Solutions",
      description: "Custom distribution strategies that align with your brand values, goals, and growth trajectory.",
      icon: Package,
      isJungleStyle: false
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl custom-heading">
            Our <span className="gradient-text-tech">Services</span>
          </h2>
          <p className="text-lg text-neutral-charcoal/80">
            Comprehensive distribution solutions designed to help your products thrive 
            in today's competitive marketplace landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {servicesData.map((service, index) => (
            <ServicesCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              isJungleStyle={service.isJungleStyle}
            />
          ))}
        </div>
        
        <div className="text-center">
          <Button className="btn-jungle rounded-full px-8 py-6" asChild>
            <a href="#contact">
              Discuss Your Distribution Needs
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
