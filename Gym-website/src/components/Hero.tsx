
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen bg-fitness-dark overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/running-treadmill-barbend.com_.jpg"
          alt="Woman exercising in gym" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-fitness-dark/70 to-transparent"></div>
      </div>
      
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Your Fitness Journey at<br /> 
              <span className="text-white">CONCORDIA</span> Starts<br />
              Here!
            </h1>
            <Link to="/signup">
            <Button className="bg-white text-fitness-dark hover:bg-white hover:text-black transition-colors mt-4">Sign Up</Button>
            </Link>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
