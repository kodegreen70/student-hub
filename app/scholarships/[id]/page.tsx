"use client";
import React, { useState } from "react";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Calendar,
  DollarSign,
} from "lucide-react";
import { Scholarship, School } from "@/types";
import { useRouter } from "next/navigation";
import { ContactModal } from "@/app/components/contact-modal/contact-modal";

const SchoolDetailsPage = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedScholarship, setSelectedScholarship] =
    useState<Scholarship | null>(null);
  const router = useRouter();

  // Sample data - replace with API call
  const school: School = {
    id: "1",
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
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
      <div className="relative h-[500px]">
        <img
          src={school.imageUrl}
          alt={school.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12">
            <button
              onClick={() => router.back()}
              className="text-white/80 mb-4 flex items-center hover:text-white transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Schools
            </button>
            <div className="animate-slide-up">
              <h1 className="text-5xl font-bold text-white mb-4">
                {school.name}
              </h1>
              <div className="flex items-center text-white/90 space-x-4">
                <div className="flex items-center">
                  <MapPin size={20} className="mr-2" />
                  {school.city}
                </div>
                <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
                <div className="text-white/90">
                  {school.scholarships.length} Scholarships Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-2xl shadow-lg p-8 transform hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                About the School
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {school.description}
              </p>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Available Scholarships
              </h2>
              <div className="space-y-6">
                {school.scholarships.map((scholarship) => (
                  <div
                    key={scholarship.id}
                    className="border border-gray-100 rounded-xl p-6 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg bg-white"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                          {scholarship.title}
                        </h3>
                        <div className="flex items-center text-gray-600 space-x-4">
                          <div className="flex items-center">
                            <DollarSign size={16} className="mr-1" />
                            <span>₦{scholarship.amount.toLocaleString()}</span>
                          </div>
                          <div className="w-1 h-1 bg-gray-300 rounded-full" />
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-1" />
                            <span>Deadline: {scholarship.deadline}</span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedScholarship(scholarship);
                          setIsContactModalOpen(true);
                        }}
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                      >
                        Apply Now
                      </button>
                    </div>
                    <p className="mt-4 text-gray-600">
                      {scholarship.description}
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-900">
                        Requirements:
                      </h4>
                      <ul className="mt-2 space-y-2">
                        {scholarship.requirements.map((req, index) => (
                          <li
                            key={index}
                            className="flex items-center text-gray-600"
                          >
                            <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Enhanced Sidebar */}
          <div className="space-y-6">
            <section className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h2 className="text-xl font-bold mb-4 text-gray-900">
                Contact Information
              </h2>
              <div className="space-y-4">
                <a
                  href={`mailto:${school.contactInfo.email}`}
                  className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors p-2 rounded-lg hover:bg-indigo-50"
                >
                  <Mail size={18} className="mr-3" />
                  {school.contactInfo.email}
                </a>
                <a
                  href={`tel:${school.contactInfo.phone}`}
                  className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors p-2 rounded-lg hover:bg-indigo-50"
                >
                  <Phone size={18} className="mr-3" />
                  {school.contactInfo.phone}
                </a>
                <div className="flex items-start text-gray-600 p-2">
                  <MapPin size={18} className="mr-3 mt-1 flex-shrink-0" />
                  {school.contactInfo.address}
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h2 className="text-xl font-bold mb-4 text-gray-900">
                Facilities
              </h2>
              <ul className="space-y-3">
                {school.facilities.map((facility, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3" />
                    {facility}
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h2 className="text-xl font-bold mb-4 text-gray-900">
                Requirements
              </h2>
              <ul className="space-y-3">
                {school.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3" />
                    {requirement}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        scholarshipTitle={selectedScholarship?.title}
        schoolName={school.name}
      />
    </div>
  );
};

export default SchoolDetailsPage;
