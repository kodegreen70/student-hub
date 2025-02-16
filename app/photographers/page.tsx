"use client";
import React, { useState } from "react";
import { Search, Filter } from "lucide-react";
import { PhotographerCard } from "../components/photographers-card/photographers-card";
import { Photographer } from "@/types";
const PhotographersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  // Sample photographers data - replace with API call
  const photographers: Photographer[] = [
    {
      id: "1",
      name: "Michael Johnson",
      image:
        "https://images.unsplash.com/photo-1603574670812-d24560880210?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D",
      price: 50000,
      rating: 4.8,
      location: "Lagos",
      experience: 5,
      specialties: ["Graduation", "Wedding", "Portraits"],
      availability: {
        weekdays: ["9am-5pm"],
        weekends: ["10am-6pm"],
      },
      portfolio: [
        "https://images.unsplash.com/photo-1603574670812-d24560880210?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D",
        "/api/placeholder/400/300",
      ],
      bio: "Professional photographer with 5 years of experience in graduation and event photography.",
      contactInfo: {
        email: "michael.johnson@example.com",
        phone: "+234-123-456-7890",
      },
      reviews: [
        {
          id: "r1",
          name: "Sarah",
          rating: 5,
          comment: "Amazing photographer! Captured my graduation perfectly.",
          date: "2024-01-15",
        },
      ],
    },
    {
      id: "2",
      name: "JJ Thompson",
      image:
        "https://plus.unsplash.com/premium_photo-1674389991679-e1a7a0b3e0a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fHww",
      price: 50000,
      rating: 4.8,
      location: "Kaduna",
      experience: 5,
      specialties: ["Graduation", "Wedding", "Portraits"],
      availability: {
        weekdays: ["9am-5pm"],
        weekends: ["10am-6pm"],
      },
      portfolio: [
        "https://images.unsplash.com/photo-1603574670812-d24560880210?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHx8MA%3D%3D",
        "/api/placeholder/400/300",
      ],
      bio: "Professional photographer with 5 years of experience in graduation and event photography.",
      contactInfo: {
        email: "michael.johnson@example.com",
        phone: "+234-123-456-7890",
      },
      reviews: [
        {
          id: "r1",
          name: "Sarah",
          rating: 5,
          comment: "Amazing photographer! Captured my graduation perfectly.",
          date: "2024-01-15",
        },
      ],
    },
    // Add more photographers here
  ];

  const filteredPhotographers = photographers.filter((photographer) => {
    const matchesSearch = photographer.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesPrice =
      !priceFilter ||
      (priceFilter === "low" && photographer.price < 30000) ||
      (priceFilter === "medium" &&
        photographer.price >= 30000 &&
        photographer.price <= 70000) ||
      (priceFilter === "high" && photographer.price > 70000);
    const matchesRating =
      !ratingFilter || photographer.rating >= parseFloat(ratingFilter);

    return matchesSearch && matchesPrice && matchesRating;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Find Your Perfect Photographer
          </h1>
          <p className="text-xl text-indigo-100">
            Professional graduation photographers ready to capture your special
            moment
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search photographers..."
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select
              className="w-full py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            >
              <option value="">All Prices</option>
              <option value="low">Low (Below ₦30,000)</option>
              <option value="medium">Medium (₦30,000 - ₦70,000)</option>
              <option value="high">High (Above ₦70,000)</option>
            </select>
            <select
              className="w-full py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
            >
              <option value="">All Ratings</option>
              <option value="4">4+ Stars</option>
              <option value="4.5">4.5+ Stars</option>
            </select>
          </div>
        </div>

        {/* Photographers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredPhotographers.map((photographer) => (
            <PhotographerCard
              key={photographer.id}
              photographer={photographer}
            />
          ))}
        </div>

        {filteredPhotographers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No photographers found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotographersPage;
