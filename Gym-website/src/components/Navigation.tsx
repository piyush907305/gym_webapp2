
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="py-4 px-6 flex items-center justify-between bg-transparent fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/Concordia-logo.jpeg"
            alt="Concordia Logo" 
            className="h-12"
          />
        </Link>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/">
          <Button variant="outline" className="text-sm font-medium bg-white text-fitness-dark border-white hover:bg-white hover:text-black transition-colors">
            Home
          </Button>
        </Link>
        <Link to="/contact">
          <Button variant="outline" className="text-sm font-medium bg-white text-fitness-dark border-white hover:bg-white hover:text-black transition-colors">
            Contact
          </Button>
        </Link>
        <Link to="/login">
          <Button variant="outline" className="text-sm font-medium bg-white text-fitness-dark border-white hover:bg-white hover:text-black transition-colors">
            Login
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
