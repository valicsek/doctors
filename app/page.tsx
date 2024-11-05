"use client";

import { MapPin, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DoctorList } from "@/components/doctor-list";
import Image from "next/image";

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
    <main className="flex-1">
      {/* Hero Section */}
      <div className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Healthcare Professional
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Search through our network of qualified doctors and specialists
          </p>

          {/* Search Box */}
          <div className="bg-white rounded-lg p-4 shadow-lg">
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
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">Popular Medical Specialties</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Cardiology", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop" },
            { name: "Pediatrics", image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=400&h=300&fit=crop" },
            { name: "Dermatology", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop" },
            { name: "Orthopedics", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop" },
          ].map((specialty) => (
            <div
              key={specialty.name}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => router.push(`/specialty/${specialty.name.toLowerCase()}`)}
            >
              <div className="relative h-48">
                <Image
                  src={specialty.image}
                  alt={specialty.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  {specialty.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Doctors */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Featured Doctors</h2>
          <DoctorList featured limit={4} />
        </div>
      </div>
    </main>
  );
}