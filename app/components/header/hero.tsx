// components/Hero.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import bg from "@/public/images/bg1.png";
export const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-24 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Your Academic Journey,{" "}
              <span className="text-yellow-400">Made Simple</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200">
              Book graduation photographers, find scholarships, and get
              personalized UTME subject recommendations - all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors text-center"
              >
                Get Started Now
              </Link>
              <Link
                href="/photographers"
                className="bg-white bg-opacity-20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-30 transition-colors text-center"
              >
                Book a Photographer
              </Link>
            </div>
            <div className="flex gap-8 pt-8">
              <div>
                <p className="text-3xl font-bold">1000+</p>
                <p className="text-gray-200">Students Helped</p>
              </div>
              <div>
                <p className="text-3xl font-bold">50+</p>
                <p className="text-gray-200">Photographers</p>
              </div>
              <div>
                <p className="text-3xl font-bold">200+</p>
                <p className="text-gray-200">Scholarships</p>
              </div>
            </div>
          </div>
          <div className="lg:block  relative">
            <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-yellow-400 rounded-full blur-3xl opacity-30"></div>
            <div className="relative z-10">
              <div className="bg-white bg-opacity-10 rounded-2xl shadow-2xl backdrop-blur-lg overflow-hidden">
                <div className="relative w-full aspect-square">
                  <Image
                    src={bg}
                    alt="Graduation Photography"
                    layout="fill"
                    objectFit="cover"
                    className="transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 rounded-full px-4 py-2 font-bold">
                  Capture Your Moment
                </div>
              </div>
              <div className="mt-6 bg-white/10 rounded-lg p-4 backdrop-blur-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1674389991679-e1a7a0b3e0a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fHww"
                      alt="Photographer"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Michael Johnson</p>
                    <p className="text-sm text-gray-300">
                      Top Rated Photographer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-gray-50"></div>
    </div>
  );
};
