
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Phone, ArrowRight, Loader2 } from 'lucide-react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

// Define form schema with validation rules
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(1, { message: "Company name is required." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Initialize form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  // Form submission handler
  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Create a plain form data object to use with FormSubmit service
      const formData = new FormData();
      
      // Add all form values to formData
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, String(value));
      });
      
      // Add FormSubmit specific configuration fields
      formData.append('_subject', `New Contact Form Submission from ${values.name}`);
      formData.append('_captcha', 'false');
      formData.append('_next', window.location.href);  // For proper redirect after submission
      
      // Send form data to FormSubmit endpoint
      const response = await fetch("https://formsubmit.co/info@thejunglenexus.com", {
        method: "POST",
        body: formData,
        mode: "no-cors" // This is important for cross-origin form submissions
      });
      
      // FormSubmit will redirect on success, but when testing we need to handle the response
      toast({
        title: "Message sent successfully",
        description: "Thank you for reaching out! We'll get back to you soon.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      // Show error message
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly via email.",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-neutral-lightGray/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-jungle-gradient opacity-5 rounded-r-full"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-2/3 bg-tech-gradient opacity-5 rounded-tl-full"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl custom-heading">
              Let's <span className="gradient-text-jungle">Connect</span>
            </h2>
            
            <p className="text-lg text-neutral-charcoal/80 leading-relaxed">
              We're here to help—whether you're interested in partnering with us, have questions about 
              our services, or just want to learn more. Reach out and let's start a conversation about 
              how Jungle Nexus can support your distribution needs.
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="flex items-center space-x-3">
                <div className="bg-jungle-gradient rounded-full p-2">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <a href="mailto:info@thejunglenexus.com" className="text-neutral-charcoal hover:text-jungle-red transition-colors">
                  info@thejunglenexus.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-tech-gradient rounded-full p-2">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <a href="tel:+17347325192" className="text-neutral-charcoal hover:text-tech-blue transition-colors">
                  (734) 732-5192
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-neutral-charcoal">
                          Name
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            className="w-full px-4 py-3 border border-neutral-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-jungle-red/50"
                            placeholder="Your name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-neutral-charcoal">
                          Email
                        </FormLabel>
                        <FormControl>
                          <input
                            {...field}
                            type="email"
                            className="w-full px-4 py-3 border border-neutral-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-jungle-red/50"
                            placeholder="Your email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-neutral-charcoal">
                        Company
                      </FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          className="w-full px-4 py-3 border border-neutral-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-jungle-red/50"
                          placeholder="Your company name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-neutral-charcoal">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={4}
                          className="w-full px-4 py-3 border border-neutral-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-jungle-red/50 resize-none"
                          placeholder="Tell us about your distribution needs"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="btn-jungle rounded-full px-6 w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
