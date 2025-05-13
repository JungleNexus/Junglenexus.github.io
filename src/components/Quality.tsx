
import React from 'react';
import { Check } from 'lucide-react';

const QualityItem = ({ text }: { text: string }) => (
  <div className="flex items-start space-x-3">
    <div className="bg-tech-gradient rounded-full p-1 shrink-0 mt-1">
      <Check className="h-4 w-4 text-white" />
    </div>
    <p className="text-neutral-charcoal/80">{text}</p>
  </div>
);

const Quality = () => {
  const qualityItems = [
    "Multi-stage quality inspection processes for all products",
    "Compliance with marketplace regulations and industry standards",
    "Regular supplier audits and performance assessments",
    "Strict adherence to product safety protocols",
    "Comprehensive documentation and traceability systems",
    "Ongoing quality monitoring throughout the distribution chain"
  ];

  return (
    <section id="quality" className="section bg-neutral-lightGray/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-jungle-gradient opacity-5 rounded-l-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-tech-gradient opacity-5 rounded-tr-full"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl custom-heading">
              Product Quality & <span className="gradient-text-tech">Compliance</span>
            </h2>
            
            <p className="text-lg text-neutral-charcoal/80 leading-relaxed">
              At Jungle Nexus, we implement rigorous inspection and compliance protocols to ensure 
              every product we distribute meets the highest standards of quality and safety. Our 
              comprehensive approach guarantees marketplace compliance while protecting brand integrity.
            </p>
            
            <div className="space-y-4 pt-2">
              {qualityItems.map((item, index) => (
                <QualityItem key={index} text={item} />
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative mx-auto max-w-md">
              {/* Main image/graphic representation */}
              <div className="aspect-square bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-jungle-red/5 to-tech-blue/5"></div>
                
                {/* Quality certification graphic */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center">
                  <div className="w-32 h-32 rounded-full border-4 border-tech-blue flex items-center justify-center mb-6">
                    <div className="w-24 h-24 rounded-full border-4 border-jungle-red flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-neutral-lightGray flex items-center justify-center text-2xl font-bold text-neutral-charcoal">
                        QC
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-bold text-neutral-charcoal">Quality Assured</h3>
                    <p className="text-neutral-gray">Rigorous Standards & Protocols</p>
                  </div>
                </div>
                
                {/* Decorative quality check marks */}
                <div className="absolute top-6 left-6">
                  <div className="bg-jungle-gradient rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="absolute top-6 right-6">
                  <div className="bg-tech-gradient rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6">
                  <div className="bg-tech-gradient rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-6 right-6">
                  <div className="bg-jungle-gradient rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-jungle-orange/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-tech-blue/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
