"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Search, MapPin } from "lucide-react";
import { School } from "@/types";
import Image from "next/image";
interface SchoolCardProps {
  school: School;
}

const SchoolCard: React.FC<SchoolCardProps> = ({ school }) => {
  return (
    <Link
      href={`/scholarships/${school.id}`}
      className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      z
      <div className="relative h-48 overflow-hidden">
        <img
          src={school.imageUrl || "/api/placeholder/400/300"}
          alt={school.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
          {school.name}
        </h3>
        <div className="flex items-center text-gray-600 mt-2">
          <MapPin size={16} className="mr-1" />
          <span>{school.city}</span>
        </div>
        <div className="mt-2 text-sm text-indigo-600 font-medium">
          {school.scholarships.length} scholarships available
        </div>
      </div>
    </Link>
  );
};

const SchoolsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Sample data - replace with API call
  const schools: School[] = [
    {
      id: "1",
      name: "University of Technology",
      city: "Lagos",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqDztr9VCk90qMMMJKOstI8UpnMfSmX21A3w&s",
      description: "A leading institution in technology education",
      scholarships: [
        {
          id: "s1",
          title: "Merit Scholarship",
          amount: 500000,
          deadline: "2024-12-31",
          requirements: ["Minimum 3.5 GPA", "Science background"],
          description: "Full scholarship for outstanding students",
        },
      ],
      requirements: ["WAEC", "JAMB score of 200+"],
      facilities: ["Modern Labs", "Library", "Sports Complex"],
      contactInfo: {
        email: "info@unitech.edu",
        phone: "+234-123-456-7890",
        address: "123 Tech Road, Lagos",
      },
    },
    {
      id: "2",
      name: "University of Technology",
      city: "Lagos",
      imageUrl:
        "https://images.unsplash.com/20/cambridge.JPG?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "A leading institution in technology education",
      scholarships: [
        {
          id: "s1",
          title: "Merit Scholarship",
          amount: 500000,
          deadline: "2024-12-31",
          requirements: ["Minimum 3.5 GPA", "Science background"],
          description: "Full scholarship for outstanding students",
        },
      ],
      requirements: ["WAEC", "JAMB score of 200+"],
      facilities: ["Modern Labs", "Library", "Sports Complex"],
      contactInfo: {
        email: "info@unitech.edu",
        phone: "+234-123-456-7890",
        address: "123 Tech Road, Lagos",
      },
    },
    // Add more schools here
  ];

  const cities = Array.from(new Set(schools.map((school) => school.city)));

  const filteredSchools = schools.filter((school) => {
    const matchesSearch = school.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCity = !selectedCity || school.city === selectedCity;
    return matchesSearch && matchesCity;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Schools with Scholarships</h1>
          <p className="text-xl text-indigo-100">
            Discover institutions offering financial support for your education
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search schools..."
                className="pl-10 w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select
              className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="">All Cities</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Schools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchools.map((school) => (
            <SchoolCard key={school.id} school={school} />
          ))}
        </div>

        {filteredSchools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No schools found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SchoolsPage;
