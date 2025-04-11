import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const TestimonialsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

  const testimonials = [
    {
      id: 1,
      name: "Alex, Engineering Student",
      rating: 5,
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      text: "The trainers are amazing, and the booking system is so easy to use!"
    },
    {
      id: 2,
      name: "Sarah, Business Student",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
      text: "I love the flexibility of online classes. Absolutely incredible!"
    },
    {
      id: 3,
      name: "John, Music Student",
      rating: 4,
      image: "https://plus.unsplash.com/premium_photo-1661764643474-47ec49cc74fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Great experience with the courses and the community!"
    },
    {
      id: 4,
      name: "Emily, Art Student",
      rating: 5,
      image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80",
      text: "The platform is user-friendly, and the instructors are top-notch!"
    },
    {
      id: 5,
      name: "Michael, Science Student",
      rating: 4,
      image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80",
      text: "The courses are comprehensive and the support is excellent!"
    }
  ];

  const handleSubmit = () => {
    toast({
      description: "Thanks for a review!"
    });
    setIsModalOpen(false);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-8">
          <span className="text-sm uppercase font-medium text-gray-500 mb-2">Reviews</span>
          <h2 className="text-3xl font-bold uppercase text-gray-800">HEAR FROM OUR STUDENTS</h2>
          <p className="text-fitness-textGray max-w-3xl mt-2">
            YOUR FEEDBACK HELPS US IMPROVE!
          </p>
        </div>
        
        <div className="flex justify-end mb-8">
          <Button 
            className="bg-black hover:bg-gray-800 text-white rounded-none px-4 py-2 text-sm flex items-center gap-1"
            onClick={() => setIsModalOpen(true)}
          >
            <span>+</span> Leave a Review
          </Button>
        </div>
        
        <div className="relative mt-4">          
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map(testimonial => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                  <div className="bg-white p-6 rounded-lg border border-gray-100">
                    <div className="flex justify-between mb-4">
                      <div className="flex gap-3">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <div className="flex">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-fitness-textGray">{testimonial.text}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <CarouselPrevious className="static h-8 w-8 translate-y-0 rounded-full border border-gray-300 bg-white hover:bg-gray-100" />
              <CarouselNext className="static h-8 w-8 translate-y-0 rounded-full border border-gray-300 bg-white hover:bg-gray-100" />
            </div>
          </Carousel>
          
          <div className="flex justify-center mt-4 gap-1">
            {Array.from({ length: 4 }).map((_, index) => (
              <div 
                key={index} 
                className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-black' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent>
            <DialogTitle>Leave a Review</DialogTitle>
            <DialogDescription>
              <Input placeholder="Your Name" className="mb-4" />
              <Textarea placeholder="Your Review" />
              <Button className="mt-4 bg-black text-white" onClick={handleSubmit}>
                Submit
              </Button>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default TestimonialsSection;
