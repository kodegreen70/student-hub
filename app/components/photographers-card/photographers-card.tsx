import React from "react";
import Link from "next/link";
import { Star, MapPin } from "lucide-react";
import { Photographer } from "@/types";
interface PhotographerCardProps {
  photographer: Photographer;
}

export const PhotographerCard: React.FC<PhotographerCardProps> = ({
  photographer,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img
          src={photographer.image}
          alt={photographer.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/80 rounded-full px-3 py-1 flex items-center">
          <Star
            className="text-yellow-500 mr-1"
            fill="currentColor"
            size={16}
          />
          <span className="font-semibold text-slate-500">
            {photographer.rating.toFixed(1)}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {photographer.name}
        </h3>
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin size={16} className="mr-2" />
          <span>{photographer.location}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">
            ₦{photographer.price.toLocaleString()}
          </div>
          <Link
            href={`/photographers/${photographer.id}`}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};
