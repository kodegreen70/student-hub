"use client";

import React, { useState, useEffect } from "react";

export const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Medical Student",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqDztr9VCk90qMMMJKOstI8UpnMfSmX21A3w&s",
      text: "Found my perfect UTME combination and secured a scholarship through this platform!",
    },
    {
      name: "Michael Chen",
      role: "Engineering Graduate",
      image: "/api/placeholder/64/64",
      text: "The graduation photography service made my ceremony extra special. Highly recommended!",
    },
    {
      name: "Aisha Patel",
      role: "Law Student",
      image: "/api/placeholder/64/64",
      text: "The scholarship finder tool helped me discover opportunities I didn't know existed.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Student Success Stories
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mx-auto mb-4"
                    />
                    <p className="text-xl italic mb-4">{testimonial.text}</p>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-indigo-200">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-white w-6" : "bg-indigo-200"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
