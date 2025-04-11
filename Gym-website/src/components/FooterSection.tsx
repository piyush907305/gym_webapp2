
import React from 'react';
import { Facebook, Twitter, Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-3">
              <span className="text-fitness-red font-bold text-xl"></span>
              <span className="font-semibold text-lg">Concordia</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Empowering students to achieve their fitness goals.
            </p>
            <div className="text-sm text-gray-600">
              <p className="mb-1"><strong>Operating Hours:</strong> Open: Mon–Fri 6 AM - 10 PM | Sat-Sun 8 AM - 8 PM</p>
              <p className="mb-1"><strong>Location:</strong> LE 2.315 (Hall Building), Concordia University, QC H3G 1M8</p>
              <p className="mb-3"><strong>Email:</strong> legym@concordia.ca</p>
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div className="md:col-span-2">
            <h2 className="font-bold text-lg mb-3 text-black">Join Our Newsletter</h2>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 border border-gray-300 rounded"
                required
              />
              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
