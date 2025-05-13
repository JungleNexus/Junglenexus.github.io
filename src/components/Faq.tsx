
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const faqItems = [
    {
      question: "What types of products does Jungle Nexus distribute?",
      answer: "Jungle Nexus distributes a wide range of products across multiple categories. While we began with a focus on grocery items, we've expanded our expertise to include home goods, beauty products, personal care items, pet supplies, and more. We're actively seeking partnerships in all industries and welcome inquiries from suppliers in any product category."
    },
    {
      question: "How does Jungle Nexus help with marketplace compliance?",
      answer: "We implement comprehensive compliance protocols tailored to each marketplace's specific requirements. Our team stays current with all marketplace regulations, handles necessary documentation, ensures proper product classification, manages safety certifications, and addresses any compliance issues that may arise. This proactive approach minimizes the risk of listing removals or account suspensions."
    },
    {
      question: "What marketplaces does Jungle Nexus sell through?",
      answer: "We primarily distribute through Amazon, but also have established channels on Walmart, eBay, Target Plus, and other major online marketplaces. Our multi-channel approach maximizes visibility and sales potential for the products we distribute, while our centralized inventory management ensures consistent stock levels across all platforms."
    },
    {
      question: "What does the onboarding process look like for new suppliers?",
      answer: "Our supplier onboarding begins with an initial consultation to understand your products and goals. We then conduct product and market assessments, develop a tailored distribution strategy, establish the operational framework (including ordering, packaging, and compliance protocols), and create a timeline for marketplace launch. Throughout the process, you'll work with a dedicated account manager who oversees your product's journey to market."
    }
  ];

  return (
    <section id="faq" className="section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl custom-heading">
            Frequently Asked <span className="gradient-text-jungle">Questions</span>
          </h2>
          <p className="text-lg text-neutral-charcoal/80">
            Find answers to common questions about our distribution services and partnership process.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-charcoal/80 pt-2 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-neutral-charcoal/70">
            Don't see your question here? <a href="#contact" className="text-jungle-red font-medium hover:underline">Contact us</a> and we'll be happy to help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faq;
