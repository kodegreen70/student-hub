import React from "react";
import { Camera, GraduationCap, BookOpen, Award } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Professional Photography",
      description:
        "Book top-rated photographers for your graduation ceremony with just a few clicks.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Scholarship Finder",
      description:
        "Discover and apply for scholarships tailored to your academic profile.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "UTME Guide",
      description:
        "Get personalized subject combinations based on your desired course and institution.",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Career Guidance",
      description:
        "Access expert advice for your academic and career decisions.",
    },
  ];

  return (
    <section className="py-16 bg-indigo-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-900">
          Everything You Need to Succeed
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl items-center  shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
