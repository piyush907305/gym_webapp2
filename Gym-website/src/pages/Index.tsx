
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import LeGymSection from '../components/LeGymSection';
import OnlineFitnessSection from '../components/OnlineFitnessSection';
import TrainersSection from '../components/TrainersSection';
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FooterSection from '../components/FooterSection';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('section');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
          element.classList.add('animate-slide-in');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    // Initial check
    animateOnScroll();
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <LeGymSection />
      <OnlineFitnessSection />
      <TrainersSection />
      <PricingSection />
      <TestimonialsSection />
      
      {/* Call Us Now Section */}
      <section className="bg-black text-white py-16 relative">
        <div className="container mx-auto px-6 text-center">
          <Link to="/contact">
            <Button className="bg-white text-black text-2xl font-bold px-10 py-8 hover:bg-white">Contact Us Now</Button>
          </Link>
        </div>
      </section>
      
      <FooterSection />
    </div>
  );
};

export default Index;
