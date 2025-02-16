// pages/photographers/[id].tsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Star,
  Calendar,
  MapPin,
  Camera,
  ArrowLeft,
  Mail,
  Phone,
} from "lucide-react";
import { Photographer } from "@/types";

// Temporary placeholder for the contact modal - you'll need to implement this separately
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  contactInfo: {
    email: string;
    phone: string;
  };
}

const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  contactInfo,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl w-96">
        <h2 className="text-2xl font-bold mb-4">Contact Photographer</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <Mail className="mr-3 text-indigo-600" />
            <a href={`mailto:${contactInfo.email}`} className="hover:underline">
              {contactInfo.email}
            </a>
          </div>
          <div className="flex items-center">
            <Phone className="mr-3 text-indigo-600" />
            <a href={`tel:${contactInfo.phone}`} className="hover:underline">
              {contactInfo.phone}
            </a>
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const PhotographerDetailsPage = () => {
  const router = useRouter();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Sample photographer data - replace with API call
  const photographer: Photographer = {
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
      "https://images.unsplash.com/photo-1565034946487-077786996e27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyYWR1YXRpb258ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
      "https://media.istockphoto.com/id/1933378885/photo/bride-and-groom-using-sparklers-with-their-wedding-guests-on-the-beach-wedding-party.webp?a=1&b=1&s=612x612&w=0&k=20&c=O14Es2rFMXW3UhfwBM2Km5QXHYt3O5LI-CLXtY3QsL4=",
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
      {
        id: "r2",
        name: "John",
        rating: 4,
        comment: "Great experience, very professional.",
        date: "2024-02-01",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        contactInfo={photographer.contactInfo}
      />

      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img
          src={photographer.image}
          alt={photographer.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12">
            <button
              onClick={() => router.back()}
              className="text-white/80 mb-4 flex items-center hover:text-white transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Photographers
            </button>
            <div className="animate-slide-up">
              <h1 className="text-5xl font-bold text-white mb-4">
                {photographer.name}
              </h1>
              <div className="flex items-center text-white/90 space-x-4">
                <div className="flex items-center">
                  <MapPin size={20} className="mr-2" />
                  {photographer.location}
                </div>
                <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
                <div className="flex items-center">
                  <Star className="text-yellow-400 mr-1" fill="currentColor" />
                  {photographer.rating.toFixed(1)} (
                  {photographer.reviews.length} reviews)
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
            {/* About Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8 transform hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                About Me
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {photographer.bio}
              </p>
              <div className="mt-4 flex flex-wrap items-center space-x-4">
                <div className="flex items-center mb-2">
                  <Camera className="mr-2 text-indigo-600" />
                  <span>{photographer.experience} Years Experience</span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                    {photographer.specialties.join(" • ")}
                  </div>
                </div>
              </div>
            </section>

            {/* Availability Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Availability
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Weekdays</h3>
                  <div className="text-gray-600">
                    {photographer.availability.weekdays.join(", ")}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Weekends</h3>
                  <div className="text-gray-600">
                    {photographer.availability.weekends.join(", ")}
                  </div>
                </div>
              </div>
            </section>

            {/* Portfolio Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Portfolio
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {photographer.portfolio.map((image, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg transform transition-all hover:scale-105"
                  >
                    <img
                      src={image}
                      alt={`Portfolio image ${index + 1}`}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Reviews</h2>
              <div className="space-y-4">
                {photographer.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b pb-4 last:border-b-0"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-semibold">{review.name}</div>
                      <div className="flex items-center text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            fill={i < review.rating ? "currentColor" : "none"}
                            className="mr-1"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                    <div className="text-sm text-gray-500 mt-2">
                      {review.date}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Section */}
            <section className="bg-white rounded-2xl shadow-lg p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  ₦{photographer.price.toLocaleString()}
                </div>
                <div className="text-gray-600 mb-4">per session</div>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105"
                >
                  Contact Photographer
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographerDetailsPage;
