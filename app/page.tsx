"use client";

import { MapPin, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DoctorList } from "@/components/doctor-list";
import { SpecialtyGrid } from "@/components/specialty-grid";

const cities = [
  "Budapest",
  "Debrecen",
  "Szeged",
  "Miskolc",
  "Pécs",
  "Győr",
  "Nyíregyháza",
  "Kecskemét",
];

export default function Home() {
  const router = useRouter();
  const [specialty, setSpecialty] = useState("");
  const [city, setCity] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams({
      specialty: specialty,
      city: city,
    });
    router.push(`/doctors?${params.toString()}`);
  };

  return (
    <main className="flex-1 space-y-4">
      {/* Hero Section */}
      <div className="bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Healthcare Professional
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Search through our network of qualified doctors and specialists
          </p>

          {/* Search Box */}
          <div className="bg-white text-black rounded-lg p-4 shadow-lg">
            <div className="grid gap-4 md:grid-cols-[1fr,1fr,auto]">
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by specialty..."
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none bg-white"
                >
                  <option value="">Select a city</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <button 
                onClick={handleSearch}
                className="px-8 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Specialties */}
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Popular Medical Specialties</h2>
        <SpecialtyGrid />
      </div>

      {/* Featured Doctors */}
      <div>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Featured Doctors</h2>
          <DoctorList featured limit={4} />
        </div>
      </div>
    </main>
  );
}