"use client";
import React, { useState } from "react";

interface Photographer {
  id: number;
  name: string;
  price: number;
  rating: number;
  available: boolean;
}

export const PhotographerBooking = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [photographers, setPhotographers] = useState<Photographer[]>([]);

  return (
    <section className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">
        Book a Graduation Photographer
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block mb-2">Select Date</label>
          <input
            type="date"
            className="border p-2 rounded"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {photographers.map((photographer) => (
            <div key={photographer.id} className="border p-4 rounded">
              <h3 className="font-bold">{photographer.name}</h3>
              <p>Price: ${photographer.price}</p>
              <p>Rating: {photographer.rating}/5</p>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
                disabled={!photographer.available}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
