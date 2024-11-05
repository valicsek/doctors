"use client";

import { DoctorCard } from "./doctor-card";

// Mock weekly schedule data that will be the same for all doctors
const defaultWeeklySchedule = [
  {
    day: "Monday",
    slots: [
      { time: "09:00", isBooked: true },
      { time: "10:00", isBooked: false },
      { time: "11:00", isBooked: true },
      { time: "14:00", isBooked: false },
      { time: "15:00", isBooked: true },
    ],
  },
  {
    day: "Tuesday",
    slots: [
      { time: "09:00", isBooked: false },
      { time: "10:00", isBooked: true },
      { time: "11:00", isBooked: false },
      { time: "14:00", isBooked: true },
      { time: "15:00", isBooked: false },
    ],
  },
  {
    day: "Wednesday",
    slots: [
      { time: "09:00", isBooked: true },
      { time: "10:00", isBooked: true },
      { time: "11:00", isBooked: false },
      { time: "14:00", isBooked: false },
      { time: "15:00", isBooked: false },
    ],
  },
  {
    day: "Thursday",
    slots: [
      { time: "09:00", isBooked: false },
      { time: "10:00", isBooked: false },
      { time: "11:00", isBooked: true },
      { time: "14:00", isBooked: true },
      { time: "15:00", isBooked: false },
    ],
  },
  {
    day: "Friday",
    slots: [
      { time: "09:00", isBooked: true },
      { time: "10:00", isBooked: false },
      { time: "11:00", isBooked: false },
      { time: "14:00", isBooked: false },
      { time: "15:00", isBooked: true },
    ],
  },
];

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  city: string;
  image: string;
  phone?: string;
  availability?: string;
  featured?: boolean;
  rating?: number;
  price: number;
  languages: string[];
  hasDiscount?: boolean;
  acceptsCard?: boolean;
  acceptsHealthInsurance?: boolean;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Nagy János",
    specialty: "Cardiologist",
    city: "Budapest",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
    phone: "+36 1 234 5678",
    availability: "Mon-Fri, 9:00-17:00",
    featured: true,
    rating: 4.9,
    price: 25000,
    languages: ["English", "Hungarian"],
    hasDiscount: true,
    acceptsCard: true,
    acceptsHealthInsurance: true,
  },
  {
    id: 2,
    name: "Dr. Kiss Éva",
    specialty: "Dermatologist",
    city: "Debrecen",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
    phone: "+36 1 234 5679",
    availability: "Mon-Fri, 8:00-16:00",
    featured: true,
    rating: 4.8,
    price: 30000,
    languages: ["Hungarian", "German"],
    acceptsCard: true,
  },
  {
    id: 3,
    name: "Dr. Kovács Péter",
    specialty: "Pediatrician",
    city: "Budapest",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
    phone: "+36 1 234 5680",
    availability: "Mon-Sat, 9:00-18:00",
    featured: true,
    rating: 4.7,
    price: 20000,
    languages: ["Hungarian", "English", "French"],
    hasDiscount: true,
    acceptsHealthInsurance: true,
  },
  {
    id: 4,
    name: "Dr. Szabó Mária",
    specialty: "Neurologist",
    city: "Szeged",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    phone: "+36 1 234 5681",
    availability: "Mon-Fri, 10:00-18:00",
    rating: 4.6,
    price: 35000,
    languages: ["Hungarian", "English"],
    acceptsCard: true,
    acceptsHealthInsurance: true,
  },
];

interface DoctorListProps {
  specialty?: string;
  city?: string;
  featured?: boolean;
  limit?: number;
  searchTerm?: string;
  minRating?: number;
  priceRange?: [number, number];
  languages?: string[];
  hasDiscount?: boolean;
  acceptsCard?: boolean;
  acceptsHealthInsurance?: boolean;
}

export function DoctorList({
  specialty,
  city,
  featured,
  limit,
  searchTerm = "",
  minRating = 0,
  priceRange = [0, Infinity],
  languages = [],
  hasDiscount,
  acceptsCard,
  acceptsHealthInsurance,
}: DoctorListProps) {
  let filteredDoctors = doctors.filter((doctor) => {
    const matchesSpecialty = !specialty || doctor.specialty.toLowerCase() === specialty.toLowerCase();
    const matchesCity = !city || doctor.city.toLowerCase() === city.toLowerCase();
    const matchesFeatured = !featured || doctor.featured === true;
    const matchesSearch = !searchTerm || doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) || doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRating = doctor.rating ? doctor.rating >= minRating : false;
    const matchesPrice = doctor.price >= priceRange[0] && doctor.price <= priceRange[1];
    const matchesLanguages = languages.length === 0 || languages.some((lang) => doctor.languages.includes(lang));
    const matchesDiscount = !hasDiscount || doctor.hasDiscount;
    const matchesCard = !acceptsCard || doctor.acceptsCard;
    const matchesInsurance = !acceptsHealthInsurance || doctor.acceptsHealthInsurance;

    return (
      matchesSpecialty && matchesCity && matchesFeatured && matchesSearch && matchesRating && matchesPrice && matchesLanguages && matchesDiscount && matchesCard && matchesInsurance
    );
  });

  if (limit) {
    filteredDoctors = filteredDoctors.slice(0, limit);
  }

  return (
    <div className="space-y-6">
      {filteredDoctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} schedule={defaultWeeklySchedule} />
      ))}

      {filteredDoctors.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No doctors found matching your criteria. Please try different search terms.</p>
        </div>
      )}
    </div>
  );
}
