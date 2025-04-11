
import React from 'react';
import { Button } from "@/components/ui/button";

const TrainersSection = () => {
  const trainers = [
    {
      id: 1,
      name: "John Smith",
      image: "/lovable-uploads/download (3).jpg",
      specialty: "Strength Training"
    },
    {
      id: 2,
      name: "Team Training",
      image: "/lovable-uploads/download (4).jpg",
      specialty: "Group Fitness"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      image: "/lovable-uploads/WhatsApp Image 2025-03-26 at 4.08.03 PM.jpeg",
      specialty: "Yoga & Pilates"
    },
    {
      id: 4,
      name: "Alex Rodriguez",
      image: "/lovable-uploads/download (7).jpg",
      specialty: "HIIT Training"
    },
    {
      id: 5,
      name: "Lisa Chang",
      image: "/lovable-uploads/download (6).jpg",
      specialty: "Nutrition Coach"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Meet Your Fitness Experts</h2>
        <p className="text-center text-fitness-textGray max-w-3xl mx-auto mb-8">
          Our certified trainers provide personalized support to help you achieve your fitness goals, whether you're a beginner or a seasoned gym enthusiast!
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {trainers.map(trainer => (
            <div key={trainer.id} className="trainer-card group">
              <div className="relative overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fitness-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-3 w-full">
                    <p className="text-white font-medium text-sm">{trainer.name}</p>
                    <p className="text-gray-300 text-xs">{trainer.specialty}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
